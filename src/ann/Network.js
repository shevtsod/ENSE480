import Node from './Node'

/**
 * Implementation of a basic feedforward Neural Network
 *
 * @export
 * @class Network
 */
export default class Network {
  constructor({ learningRate = 1, nodes, weights, epoch = 0 } = {}) {
    // Learning Rate for back-propagation
    this.learningRate = learningRate
    // Activation function to pass to neurons
    this.activation = Math.tanh
    // Derivative of activation function
    this.derivative = x => 1 - Math.pow(Math.tanh(x), 2)
    // Current epoch (iteration) of the neural network
    this.epoch = epoch

    // Two-dimensional array of layers and neurons
    this.nodes = this.createNodes(nodes)
    // Two-dimensional array of weights
    this.weights = weights || this.createWeights(nodes)
  }

  /**
   * Get an array of nodes in the input layer
   *
   * @readonly
   * @memberof Network
   */
  get inputLayer() {
    return this.nodes[0] || []
  }

  /**
   * Get an array of the hidden layers (each of which is an array of nodes)
   *
   * @readonly
   * @memberof Network
   */
  get hiddenLayers() {
    return this.nodes.slice(1, this.nodes.length - 1) || []
  }

  /**
   * Get an array of nodes in the output layer
   *
   * @readonly
   * @memberof Network
   */
  get outputLayer() {
    return this.nodes[this.nodes.length - 1] || []
  }

  /**
   * Return an array of nodes from the provided multi-dimensional array of layers
   *
   * @param {*} layers
   * @memberof Network
   */
  createNodes(layers = []) {
    let index = 0
    return layers.map(layer =>
      layer.map(
        node => new Node(index++, { activation: this.activation, ...node })
      )
    )
  }

  /**
   * Return an array of weights from the provided multi-dimensional array of layers
   *
   * @param {*} [layers=[]]
   * @memberof Network
   */
  createWeights(layers = []) {
    const weights = []

    for (let i = 0; i < layers.length - 1; i++) {
      const current = layers[i],
        next = layers[i + 1]

      const layerWeights = []

      for (let j = 0; j < current.length * next.length; j++) {
        layerWeights.push(Math.random() * 2 - 1) // Random initial weight
      }

      weights.push(layerWeights)
    }

    return weights
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
  runOneEpoch() {
    this.feedForward()
    this.backPropagation()
  }
}
