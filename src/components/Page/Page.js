import React from 'react'
import PropTypes from 'prop-types'
import { StyledPage, StyledPageContent } from './Page.style'

const Page = ({ children }) => {
  return (
    <StyledPage>
      <StyledPageContent>{children}</StyledPageContent>
    </StyledPage>
  )
}

Page.propTypes = {
  children: PropTypes.node
}

export default Page
