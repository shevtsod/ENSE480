import Neuron from './Neuron'

/**
 * Implementation of a basic feedforward Neural Network w/ back-propagation
 *
 * @export
 * @class Network
 */
export default class Network {
  constructor({ learningRate = 1, neurons, weights, epoch = 0 } = {}) {
    // Two-dimensional array of layers and neurons in each layer
    this.neurons = neurons
    // Array of weight matrices between layers
    this.weights = weights

    // Learning Rate for back-propagation
    this.learningRate = learningRate

    // Activation function to pass to neurons
    this.activation = Math.tanh
    // Derivative of activation function
    this.derivative = x => 1 - Math.pow(Math.tanh(x), 2)

    // Current epoch (iteration) of the neural network
    this.epoch = epoch
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
      neurons: this.createNeurons(layers),
      weights: this.createWeights(layers)
    })
  }

  /**
   * Return an array of neurons from the provided multi-dimensional
   * array of layers
   *
   * @static
   * @param {*} layers
   * @memberof Network
   */
  static createNeurons(layers = []) {
    return layers
      .map(layer => Array(layer).fill({}))
      .map(layer =>
        layer.map(
          (node, i) => new Neuron(i, { activation: this.activation, ...node })
        )
      )
  }

  /**
   * Return an array of weights from the provided multi-dimensional array of layers
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

      const weightsLayer = []

      // For every node in this layer
      for (let j = 0; j < current; j++) {
        const matrix = []

        // For every node in the next layer
        for (let k = 0; k < next; k++) {
          matrix[(j, k)] = Math.random() * 2 - 1
        }

        weightsLayer.push(matrix)
      }

      weights.push(weightsLayer)
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
    return this.neurons[0] || []
  }

  /**
   * Get an array of the hidden layers (each of which is an array of neurons)
   *
   * @readonly
   * @memberof Network
   */
  get hiddenLayers() {
    return this.neurons.slice(1, this.neurons.length - 1) || []
  }

  /**
   * Get an array of neurons in the output layer
   *
   * @readonly
   * @memberof Network
   */
  get outputLayer() {
    return this.neurons[this.neurons.length - 1] || []
  }

  /**
   * Feed-forward algorithm to update weights
   *
   * @memberof Network
   */
  feedForward() {}

  /**
   * Back-propagation of errors to update weights
   *
   * @memberof Network
   */
  backPropagation() {}

  /**
   * Execute a single epoch for this neural network
   *
   * @memberof Network
   */
  runOnce() {
    this.feedForward()
    this.backPropagation()
    this.epoch++
  }
}
