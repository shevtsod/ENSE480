import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Headroom from 'headroom.js'
import { Link as RouterLink } from 'react-router-dom'

import { StyledHeader, StyledTitle, StyledLogo } from './style'

import withConfig from '../../hoc/withConfig'
import NavBar from '../NavBar'

import Logo from '../../assets/logo-32x32.png'

const StyledHeaderTitle = StyledTitle(RouterLink)

export class Header extends Component {
  static propTypes = {
    className: PropTypes.string,
    config: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.headerRef = React.createRef()
  }

  componentDidMount() {
    this.headroom = new Headroom(this.headerRef.current).init()
  }

  render() {
    const { className, config } = this.props
    const { name } = config

    return (
      <StyledHeader className={className} ref={this.headerRef}>
        <StyledHeaderTitle to='/'>
          <StyledLogo src={Logo} alt='Logo' />
          <span>{name}</span>
        </StyledHeaderTitle>

        <NavBar />
      </StyledHeader>
    )
  }
}

export default withConfig(Header)
