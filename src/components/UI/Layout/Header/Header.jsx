import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Headroom from 'headroom.js'
import { Link } from 'react-router-dom'

import * as Styled from './style'

import NavBar from './Navbar'

import Logo from '../../../../assets/logo-32x32.png'

export class Header extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.headerRef = React.createRef()
  }

  componentDidMount() {
    this.headroom = new Headroom(this.headerRef.current).init()
  }

  render() {
    const { className, title } = this.props

    return (
      <Styled.Header className={className} ref={this.headerRef}>
        <Styled.Title to='/' as={Link}>
          <Styled.Logo src={Logo} alt='Logo' />
          <Styled.Label>{title}</Styled.Label>
        </Styled.Title>

        <NavBar />
      </Styled.Header>
    )
  }
}

export default Header
