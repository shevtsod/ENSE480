import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = ({ config, routes }) => ({
  config,
  routes
})

const mapDispatchToProps = _dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
