import React from 'react'

let licenses = [
  {
    name: 'polished',
    link: 'https://github.com/styled-components/polished',
    license: () => (
      <>
        <p>MIT License</p>
        <p>Copyright (c) 2016 - 2018 Brian Hough and Maximilian Stoiber</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy
          <br />
          of this software and associated documentation files (the "Software"),
          to deal
          <br />
          in the Software without restriction, including without limitation the
          rights
          <br />
          to use, copy, modify, merge, publish, distribute, sublicense, and/or
          sell
          <br />
          copies of the Software, and to permit persons to whom the Software is
          <br />
          furnished to do so, subject to the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all
          <br />
          copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR
          <br />
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY,
          <br />
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
          SHALL THE
          <br />
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          <br />
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
          ARISING FROM,
          <br />
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
          IN THE
          <br />
          SOFTWARE.
        </p>
      </>
    )
  },
  {
    name: 'react',
    link: 'https://github.com/facebook/react',
    license: () => (
      <>
        <p>MIT License</p>
        <p>Copyright (c) Facebook, Inc. and its affiliates.</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy
          <br />
          of this software and associated documentation files (the "Software"),
          to deal
          <br />
          in the Software without restriction, including without limitation the
          rights
          <br />
          to use, copy, modify, merge, publish, distribute, sublicense, and/or
          sell
          <br />
          copies of the Software, and to permit persons to whom the Software is
          <br />
          furnished to do so, subject to the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all
          <br />
          copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR
          <br />
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY,
          <br />
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
          SHALL THE
          <br />
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          <br />
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
          ARISING FROM,
          <br />
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
          IN THE
          <br />
          SOFTWARE.
        </p>
      </>
    )
  },
  {
    name: 'react-redux',
    link: 'https://github.com/reduxjs/react-redux',
    license: () => (
      <>
        <p>The MIT License (MIT)</p>
        <p>Copyright (c) 2015-present Dan Abramov</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy
          <br />
          of this software and associated documentation files (the "Software"),
          to deal
          <br />
          in the Software without restriction, including without limitation the
          rights
          <br />
          to use, copy, modify, merge, publish, distribute, sublicense, and/or
          sell
          <br />
          copies of the Software, and to permit persons to whom the Software is
          <br />
          furnished to do so, subject to the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all
          <br />
          copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR
          <br />
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY,
          <br />
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
          SHALL THE
          <br />
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          <br />
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
          ARISING FROM,
          <br />
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
          IN THE
          <br />
          SOFTWARE.
        </p>
      </>
    )
  },
  {
    name: 'react-router',
    link: 'https://github.com/ReactTraining/react-router',
    license: () => (
      <>
        <p>MIT License</p>
        <p>Copyright (c) React Training 2016-2018</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy
          <br />
          of this software and associated documentation files (the "Software"),
          to deal
          <br />
          in the Software without restriction, including without limitation the
          rights
          <br />
          to use, copy, modify, merge, publish, distribute, sublicense, and/or
          sell
          <br />
          copies of the Software, and to permit persons to whom the Software is
          <br />
          furnished to do so, subject to the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all
          <br />
          copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR
          <br />
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY,
          <br />
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
          SHALL THE
          <br />
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          <br />
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
          ARISING FROM,
          <br />
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
          IN THE
          <br />
          SOFTWARE.
        </p>
      </>
    )
  },
  {
    name: 'redux',
    link: 'https://github.com/reduxjs/redux',
    license: () => (
      <>
        <p>The MIT License (MIT)</p>
        <p>Copyright (c) 2015-present Dan Abramov</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy
          <br />
          of this software and associated documentation files (the "Software"),
          to deal
          <br />
          in the Software without restriction, including without limitation the
          rights
          <br />
          to use, copy, modify, merge, publish, distribute, sublicense, and/or
          sell
          <br />
          copies of the Software, and to permit persons to whom the Software is
          <br />
          furnished to do so, subject to the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all
          <br />
          copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR
          <br />
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY,
          <br />
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
          SHALL THE
          <br />
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          <br />
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
          ARISING FROM,
          <br />
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
          IN THE
          <br />
          SOFTWARE.
        </p>
      </>
    )
  },
  {
    name: 'styled-components',
    link: 'https://github.com/styled-components/styled-components',
    license: () => (
      <>
        <p>MIT License</p>
        <p>Copyright (c) 2016-present Glen Maddern and Maximilian Stoiber</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy
          <br />
          of this software and associated documentation files (the "Software"),
          to deal
          <br />
          in the Software without restriction, including without limitation the
          rights
          <br />
          to use, copy, modify, merge, publish, distribute, sublicense, and/or
          sell
          <br />
          copies of the Software, and to permit persons to whom the Software is
          <br />
          furnished to do so, subject to the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all
          <br />
          copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR
          <br />
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY,
          <br />
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
          SHALL THE
          <br />
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          <br />
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
          ARISING FROM,
          <br />
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
          IN THE
          <br />
          SOFTWARE.
        </p>
      </>
    )
  }
]

const Licenses = () => {
  return (
    <div>
      <h1>Open Source Licenses</h1>

      {licenses.map(({ name, link = '#', license: License }, i) => (
        <div key={i}>
          <h2>
            <a href={link}>{name}</a>
          </h2>

          <License />
        </div>
      ))}
    </div>
  )
}

export default Licenses
