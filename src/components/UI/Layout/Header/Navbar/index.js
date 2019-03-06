import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Navbar from './Navbar'

const mapStateToProps = ({ config, routes }) => ({
  title: config.name,
  routes: routes.filter(({ navbar }) => navbar)
})

const mapDispatchToProps = {}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
)
