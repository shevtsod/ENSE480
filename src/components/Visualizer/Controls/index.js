import { connect } from 'react-redux'

import Controls from './Controls'

import NeuralNetwork from '../../../ann'

const mapStateToProps = ({ network }) => ({
  network: network && new NeuralNetwork(network)
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls)
