import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Navbar from './Navbar'

const mapStateToProps = ({ app }) => ({
  title: app.config.name,
  routes: app.routes.filter(({ navbar }) => navbar)
})

const mapDispatchToProps = {}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
)
