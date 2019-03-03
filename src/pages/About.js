import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import withConfig from '../hoc/withConfig'
import Block from '../components/Block'

const GitHubLink = ({ username, url }) => <a href={url}>{username}</a>

export const About = ({ config }) => {
  const { author } = config

  return (
    <Block>
      <h1>About</h1>

      <p>
        This is a project by Daniel Shevtsov (
        <GitHubLink username={author.github.username} url={author.github.url} />
        ) for ENSE 480 (Knowledge Base and Information Systems) at the
        University of Regina.
      </p>

      <p>
        The aim of the project is to implement a basic Artificial Neural Network
        for categorizing points in two-dimensional space. In addition, a
        visualization is provided to display the network's state as it is being
        trained, the inputs fed into the network, and the network's outputs.
      </p>

      <h2>Inspirations</h2>

      <p>
        This project is inspired by some other amazing JavaScript AI projects
        with similar demos:
      </p>

      <ul>
        <li>
          <b>TensorFlow.js: </b>
          <a href='http://playground.tensorflow.org'>
            http://playground.tensorflow.org
          </a>
        </li>
        <li>
          <b>ConvnetJS: </b>
          <a href='https://cs.stanford.edu/people/karpathy/convnetjs/demo/classify2d.html'>
            https://cs.stanford.edu/people/karpathy/convnetjs/demo/classify2d.html
          </a>
        </li>
      </ul>

      <h2>
        <Link to='/licenses/'>Open Source Licenses</Link>
      </h2>
    </Block>
  )
}

About.propTypes = {
  config: PropTypes.object.isRequired
}

export default withConfig(About)
