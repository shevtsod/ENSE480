import { connect } from 'react-redux'

import App from './App'

const mapStateToProps = ({ config, routes }) => ({
  config,
  routes: routes.filter(({ external }) => !external)
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
