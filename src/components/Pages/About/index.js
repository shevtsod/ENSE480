import { connect } from 'react-redux'

import About from './About'

const mapStateToProps = ({ app }) => ({
  repository: app.config.repository
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
