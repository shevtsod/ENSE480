import React from 'react'

import * as Styled from './style'

import Link from '../../UI/Link'

const License = ({ link, name, copyrightText }) => {
  return (
    <Styled.Wrapper>
      <h2>
        <Styled.Link
          as={Link}
          path={link}
          label={name}
          external={true}
          target='_blank'
          rel='noopener noreferrer'
        />
      </h2>

      <Styled.Copyright>{copyrightText}</Styled.Copyright>
    </Styled.Wrapper>
  )
}

export default License
