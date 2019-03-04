import React from 'react'

import Block from '../components/Block'
import Visualizer from '../containers/Visualizer'

export const Home = () => {
  return (
    <>
      <Block backgroundColor='tertiary'>
        <Visualizer />
      </Block>

      <Block>
        <p>Work in Progress!</p>
      </Block>
    </>
  )
}

export default Home
