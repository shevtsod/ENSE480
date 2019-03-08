import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './style'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ className, children }) => {
  return (
    <Styled.Layout className={className}>
      <Header />
      <Styled.Main>{children}</Styled.Main>
      <Styled.GridArea as={Footer} area='footer' />
    </Styled.Layout>
  )
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Layout
