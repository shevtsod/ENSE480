import { connect } from 'react-redux'

import Footer from './Footer'

const mapStateToProps = ({ app }) => ({
  name: app.config.name,
  homeLink: app.routes.find(({ path }) => path === '/'),
  authorName: app.config.author.name
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
