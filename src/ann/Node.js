/**
 * Implementation of a node in a Neural Network
 *
 * @export
 * @class Node
 */
export default class Node {
  constructor(id, { bias, output, error, activation }) {
    this.id = id
    this.bias = bias || Math.random() * 2 - 1 // Random initial bias

    this.output = output
    this.error = error

    this.activation = activation
    this.derivative = null
  }
}
