import { connect } from 'react-redux'

import Header from './Header'

const mapStateToProps = ({ app }) => ({
  title: app.config.name
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
