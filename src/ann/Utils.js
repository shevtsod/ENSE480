// Activation functions for feed-forward
export const ActivationFunctions = {
  tanh: {
    func: Math.tanh,
    der: x => 1 - Math.pow(Math.tanh(x), 2)
  }
}

// Error functions for back-propagation
export const ErrorFunctions = {
  square: {
    func: (output, target) => 0.5 * Math.pow(output - target, 2),
    der: (output, target) => output - target
  },
  linear: {
    func: (output, target) => output - target,
    der: () => 1
  }
}
