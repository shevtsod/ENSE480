import { connect } from 'react-redux'

import LicenseList from './LicenseList'
import licenses from './licenses'

const mapStateToProps = () => ({
  licenses
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LicenseList)
