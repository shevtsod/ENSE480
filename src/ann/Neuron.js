/**
 * Implementation of a neuron in a Neural Network
 *
 * @export
 * @class Neuron
 */
export default class Neuron {
  constructor(id, { bias, output, error }) {
    this.id = id

    this.bias = bias || Math.random() * 2 - 1
    this.output = output || 0
    this.error = error || 0
  }
}
