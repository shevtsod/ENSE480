import { connect } from 'react-redux'

import Footer from './Footer'

const mapStateToProps = ({ config, routes }) => ({
  name: config.name,
  homeLink: routes.find(({ path }) => path === '/'),
  authorName: config.author.name
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
