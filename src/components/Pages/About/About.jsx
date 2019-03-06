import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Layout from '../../UI/Layout'
import Block from '../../UI/Block'

export const About = ({ repository }) => {
  return (
    <Layout>
      <Block>
        <h1>About</h1>

        <p>
          This is a project by Daniel Shevtsov for ENSE 480 (Knowledge Base and
          Information Systems) at the University of Regina. The project topic is
          the implementation of a working system that includes concepts of
          Artificial Intelligence.
        </p>

        <p>
          This project implements a basic Artificial Neural Network for
          categorizing points in two-dimensional space. In addition, a
          visualization is provided to display the network's state as it is
          being trained, the inputs fed into the network, and the network's
          outputs.
        </p>

        <h2>Inspirations</h2>

        <p>
          This project is inspired by some other amazing AI projects with
          similar demos featuring artificial neural networks:
        </p>

        <ul>
          <li>
            <b>TensorFlow: </b>
            <a
              href='http://playground.tensorflow.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              http://playground.tensorflow.org
            </a>
          </li>
          <li>
            <b>ConvnetJS: </b>
            <a
              href='https://cs.stanford.edu/people/karpathy/convnetjs/demo/classify2d.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://cs.stanford.edu/people/karpathy/convnetjs/demo/classify2d.html
            </a>
          </li>
        </ul>

        <h2>Source Code</h2>

        <p>
          The entire source code for this application is available on GitHub at
          the link below:
        </p>

        <p>
          <a href={repository} target='_blank' rel='noopener noreferrer'>
            {repository}
          </a>
        </p>

        <p>
          Other software projects developed by Daniel Shevtsov are also
          available on GitHub:
        </p>

        <p>
          <a
            href='https://github.com/shevtsod/'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://github.com/shevtsod/
          </a>
        </p>

        <h2>
          <Link to='/licenses/'>Open Source Licenses</Link>
        </h2>
      </Block>
    </Layout>
  )
}

About.propTypes = {
  repository: PropTypes.string.isRequired
}

export default About
