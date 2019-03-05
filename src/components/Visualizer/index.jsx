import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Visualizer extends Component {
  static propTypes = {}

  render() {
    return <div />
  }
}

const mapStateToProps = _state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Visualizer)
