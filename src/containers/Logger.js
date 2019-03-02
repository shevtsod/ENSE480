import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Logger extends Component {
  static propTypes = {}

  render() {
    return <div />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logger)
