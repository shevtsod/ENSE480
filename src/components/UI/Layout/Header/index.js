import { connect } from 'react-redux'

import Header from './Header'

const mapStateToProps = ({ config }) => ({
  title: config.name
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
