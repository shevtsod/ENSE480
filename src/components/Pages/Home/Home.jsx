import React from 'react'

import Layout from '../../UI/Layout'
import Block from '../../UI/Block'
import Visualizer from '../../Visualizer'

export const Home = () => {
  return (
    <Layout>
      <Block backgroundColor='tertiary'>
        <Visualizer />
      </Block>

      <Block>
        <p>Work in Progress!</p>
      </Block>
    </Layout>
  )
}

export default Home
