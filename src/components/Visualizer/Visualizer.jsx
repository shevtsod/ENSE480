import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Network from './Network'

const nodes = [[{}, {}], [{}, {}, {}], [{}, {}, {}, {}], [{}, {}]]

export default class Visualizer extends Component {
  static propTypes = {
    network: PropTypes.object
  }

  componentDidMount() {
    !this.props.network && this.props.createNetwork({ nodes })
  }

  componentDidUpdate() {
    // In development, log the state of the network object on each update
    process.env.NODE_ENV === 'development' && console.log(this.props.network)
  }

  render() {
    return (
      <div>
        <Network />
      </div>
    )
  }
}
