import React from 'react'
import PropTypes from 'prop-types'

import { StyledLayout, StyledGridArea } from './style'

import Header from '../Header'
import Footer from '../Footer'

const StyledMain = StyledGridArea('main', 'main')
const StyledFooter = StyledGridArea(Footer, 'footer')

const Layout = ({ className, children }) => {
  return (
    <StyledLayout className={className}>
      {/* Fixed header is not part of the grid */}
      <Header />

      <StyledMain>{children}</StyledMain>
      <StyledFooter />
    </StyledLayout>
  )
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Layout
