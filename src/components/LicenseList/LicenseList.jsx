import React from 'react'

const Licenses = ({ licenses }) =>
  licenses.map(({ name, link = '#', license }, i) => (
    <div key={i}>
      <h2>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {name}
        </a>
      </h2>

      {license}
    </div>
  ))

export default Licenses
