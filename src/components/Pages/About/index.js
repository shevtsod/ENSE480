import { connect } from 'react-redux'

import About from './About'

const mapStateToProps = ({ config }) => ({
  repository: config.repository
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
