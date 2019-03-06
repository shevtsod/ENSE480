import React from 'react'

import Layout from '../../UI/Layout'
import Block from '../../UI/Block'
import LicenseList from '../../LicenseList'

const Licenses = () => {
  return (
    <Layout>
      <Block>
        <h1>Open Source Licenses</h1>
        <LicenseList />
      </Block>
    </Layout>
  )
}

export default Licenses
