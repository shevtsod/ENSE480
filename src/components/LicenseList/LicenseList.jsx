import React from 'react'

import License from './License'

const Licenses = ({ licenses }) =>
  licenses.map((props, i) => <License key={i} {...props} />)

export default Licenses
