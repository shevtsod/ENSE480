import React from 'react'

import licenses from '../licenses'

import Block from '../components/Block'

const Licenses = () => {
  return (
    <Block>
      <h1>Open Source Licenses</h1>

      {licenses.map(({ name, link = '#', license }, i) => (
        <div key={i}>
          <h2>
            <a href={link} target='_blank' rel='noopener noreferrer'>
              {name}
            </a>
          </h2>

          {license}
        </div>
      ))}
    </Block>
  )
}

export default Licenses
