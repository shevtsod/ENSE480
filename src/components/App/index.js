import { connect } from 'react-redux'

import App from './App'

const mapStateToProps = ({ app }) => ({
  config: app.config,
  routes: app.routes
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
