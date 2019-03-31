import Neuron from './Neuron'
import * as Utils from './Utils'

/**
 * Implementation of a basic feedforward Neural Network w/ back-propagation
 *
 * @export
 * @class Network
 */
export default class Network {
  constructor({
    learningRate = 0.03,
    layers,
    weights,
    epoch = 0,
    activation = Utils.ActivationFunctions.tanh,
    error = Utils.ErrorFunctions.linear,
    globalError = 0
  } = {}) {
    // Two-dimensional array of layers and neurons in each layer
    this.layers = layers
    // Array of weight matrices between layers
    this.weights = weights

    // Learning Rate for back-propagation
    this.learningRate = learningRate

    // Activation function to pass to neurons
    this.activation = activation

    // Error function for back-propagation
    this.error = error

    // Current epoch (iteration) of the neural network
    this.epoch = epoch

    // Global network error
    this.globalError = globalError
  }

  /**
   * Initialize and return a new Network object
   *
   * @static
   * @param {*} layers
   * @returns
   * @memberof Network
   */
  static initialize(layers) {
    return new Network({
      layers: this.createLayers(layers),
      weights: this.createWeights(layers)
    })
  }

  /**
   * Given an array of layers each containing a number representing the number
   * of nodes in that layer,return an array layers containing that number of
   * neurons in each layer.
   *
   * e.g., [2, 3, 4, 2]
   *  Input layer - 2 neurons
   *  Hidden layer 1 - 3 neurons
   *  Hidden layer 2- 4 neurons
   *  Output layer - 2 neurons
   *
   * @static
   * @param {*} layers
   * @memberof Network
   */
  static createLayers(layers = []) {
    return layers
      .map(layer => Array(layer).fill({}))
      .map(layer =>
        layer.map(
          (node, i) => new Neuron(i, { activation: this.activation, ...node })
        )
      )
  }

  /**
   * Return an array of weight matrices from the provided array of layers.
   * A matrix is generated for every pair of layers.
   *
   * e.g., If there are 6 layers including input and output layers, an array
   * of 5 matrices is returned corresponding to the following pairs of layers:
   * [0-1, 1-2, 2-3, 3-4, 4-5]
   *
   * If layer 1 has 2 neurons and layer 2 has 3 neurons, the resulting matrix is:
   * | w11 w21 |
   * | w12 w22 |
   * | w13 w23 |
   *
   * @static
   * @param {*} [layers=[]]
   * @memberof Network
   */
  static createWeights(layers = []) {
    const weights = []

    // For every layer
    for (let i = 0; i < layers.length - 1; i++) {
      const current = layers[i],
        next = layers[i + 1]

      const matrix = []

      // For every node in the next layer
      for (let j = 0; j < next; j++) {
        const row = []

        // For every node in this layer
        for (let k = 0; k < current; k++) {
          row[k] = Math.random() * 2 - 1
        }

        matrix.push(row)
      }

      weights.push(matrix)
    }

    return weights
  }

  /**
   * Get an array of neurons in the input layer
   *
   * @readonly
   * @memberof Network
   */
  get inputLayer() {
    return this.layers[0] || []
  }

  /**
   * Get an array of the hidden layers (each of which is an array of neurons)
   *
   * @readonly
   * @memberof Network
   */
  get hiddenLayers() {
    return this.layers.slice(1, this.layers.length - 1) || []
  }

  /**
   * Get an array of neurons in the output layer
   *
   * @readonly
   * @memberof Network
   */
  get outputLayer() {
    return this.layers[this.layers.length - 1] || []
  }

  /**
   * Feed-forward algorithm to update weights
   *
   * @param {*} [inputs=[]] Array of inputs for every node in the input layer
   * @memberof Network
   */
  feedForward(inputs = []) {
    // Set the outputs of the input layer to these inputs
    this.inputLayer.forEach((node, i) => (node.output = inputs[i]))

    // Update the outputs of every node in every layer after the input layer
    this.layers.forEach((layer, i) => {
      if (i === 0) return

      // For every node on this layer...
      layer.forEach((node, j) => {
        // Calculate the product of this node with every node in the prev. layer
        let input = node.bias

        // For every node on the previous layer...
        this.layers[i - 1].forEach((prevNode, k) => {
          // Calculate w1 * x1 + w2 * x2 + ... + wn * xn
          // weights[][][]
          // First array - weight matrices. Index 0 -> array btwn layers 0 and 1
          // Second array - node on the *current* layer
          // Third array - node on the *previous* layer
          input += this.weights[i - 1][j][k] * prevNode.output
        })

        // Calculate the new output based on the activation function
        node.output = this.activation.func(input)
      })
    })
  }

  /**
   * Back-propagation of errors to update weights
   *
   * @param {number} [target=0] Target value for the output
   * @memberof Network
   */
  backPropagate(target = 0) {
    // Reset global network error
    this.globalError = 0

    // Compute output layer error (error = target - output)
    // For the output node, use the network's error function for the derivative
    this.outputLayer.forEach(node => {
      // Calculate error and bias

      node.error =
        this.error.func(node.output, target) *
        this.error.der(node.output, target)
      node.bias += this.learningRate * node.error

      // Update global network error
      this.globalError += Math.abs(node.error)
    })

    // Propagate error backwards through the layers in the network
    for (let i = this.layers.length - 1; i >= 1; i--) {
      const layer = this.layers[i]
      const prevLayer = this.layers[i - 1]
      const weights = this.weights[i - 1]

      // Calculate error for every neuron in each layer based on the next layer
      prevLayer.forEach((prevNode, j) => {
        // Compute error (e = (w1 * e1 + w2 * e2 + ... + wn * en) * output)
        let sum = layer.reduce(
          (sum, node, k) => sum + weights[k][j] * node.error,
          0
        )

        // Calculate error and bias
        prevNode.error = sum * this.error.der(prevNode.output, target)
        prevNode.bias += this.learningRate * prevNode.error

        // Update global network error
        this.globalError += Math.abs(prevNode.error)

        // Update weights (w = w + lr * en * output)
        layer.forEach((node, k) => {
          weights[k][j] += this.learningRate * node.error * prevNode.output
        })
      })
    }
  }

  /**
   * Execute a single epoch for this neural network
   *
   * @param {*} inputs Array of points each with an associated value
   * @memberof Network
   */
  runOnce(inputs) {
    // Scale inputs to values from range [-5, 5] to [-1, 1]
    const scaledInputs = inputs.map(input => ({
      x: (2 * (input.x + 5)) / 10 - 1,
      y: (2 * (input.y + 5)) / 10 - 1,
      value: input.value
    }))

    // For each input, feedforward and back-propagate
    scaledInputs.forEach(input => {
      // Feed input features into network
      this.feedForward([input.x, input.y])
      // Pass expected output to network to calc error
      this.backPropagate(input.value)
    })
    this.epoch++
  }
}
