import { connect } from 'react-redux'

import Chart from './Chart'

const mapStateToProps = ({ datasets }) => ({
  data: datasets.training
})

export default connect(mapStateToProps)(Chart)
