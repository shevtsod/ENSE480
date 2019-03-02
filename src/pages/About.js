import React from 'react'
import { Link } from 'react-router-dom'

const Username = () => <a href='https://github.com/shevtsod'>@shevtsod</a>

const About = () => {
  return (
    <>
      <h1>About</h1>

      <p>
        This is a project by Daniel Shevtsov (<Username />) for ENSE 480
        (Knowledge Base and Information Systems) at the University of Regina.
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
    </>
  )
}

export default About
