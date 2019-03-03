(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEgUExURXQoKHYqKnIkJP7+/nUqKv38/P79/f///3YrK3UpKXQpKWkXF20eHmsZGWoYGGoZGWwcHHEiInMnJ20cHP37+2wbG2saGnMlJfz6+oE9PdvIyOzi4vv5+XcsLGsbG5NbW6N0dI9UVG4fH20fH6Bubv39/aV2dvr4+HIjI7CIiH02NuPU1L6dnfz7+6l7e860tPPu7ryZmX03N3EjI4tOTn85ObeRkd3Ly5xoaMapqbWPj/fz88isrMOlpXIlJdfCwnctLerf37uYmGkYGPj19W4gIM+2tsKjo5RcXNG6utK7u41RUc61tXguLpdgYLeSkrOMjP/+/tC3t/Xw8Ojb25hiYqFxcZBVVZ5ra7mWlo1QUIhJSfLt7bKKiq6Dg4A8PJY3Zw0AAAAJcEhZcwAALiMAAC4jAXilP3YAAAFySURBVDjLxVPXbsMwDLRkSaQc7zg76W726N57773n//9FlaIumsDuY0tIgASeqCOP1LT/Msnkr26cHqFoxPvXnNmZKcePCyLpxsoOLO8bmRiE4a2DgHHYG2WRfkwvQFYHPYADNxKBiS3gAGq/JjAaMAeBAgTw9gOAyr6OzBwGwUVwWXzeDb+Qmq1M+yJNBiYVSR0u0uEbWaXtTqdNq2Fa5tD8Zv7BDa8yg3kQAvIYJs4sU3PT3ymg3YQi50Vo2mFMZBr7Jmj4pYL6U61CyVf1Z0iMvsrWJxQltSbq1JBs1E75pLe0tNGtDIcG1RhNHg/dMrMHgVZZJc4FlK0SPT1SoQrDyR4Ec2sVgErNZcy8As45vOS8HiWllRsby1mSjTzpQtHJwnmfDOg5jocaOndK5i6dEwv7mwxVTJI6+xSyBavbkUIaPt5AlrcEDCajm4WY99eg67A0QGL6kZjvj4eLg6n4pidewkokya8zgcj+dko/APHYHeEJ9sXAAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC"},39:function(e,t,n){e.exports=n(52)},49:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(14),o=n.n(l),i=n(20),c=n(11),s=[],u=Object(c.b)({config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@@config/LOAD_CONFIG":return t.payload;default:return e}},routes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@@config/LOAD_ROUTES":return t.payload;default:return e}}}),E=Object(c.c)(u,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),m=(n(48),n(49),n(15)),T=n(16),O=n(22),h=n(12),I=n(17),A=n(55),f=n(57),R=n(54),p=n(5),d={name:"ENSE480",repository:"https://github.com/shevtsod/ENSE480",author:{name:"Daniel Shevtsov",github:{username:"@shevtsod",url:"https://github.com/shevtsod"}},theme:{primary:"#732C2C",secondary:"#33090F",tertiary:"#FCAA67",primaryText:"#ffffff",secondaryText:"#ffffff",tertiaryText:"#000000"}},b=n(6);function N(){var e=Object(b.a)(["\n  max-width: 1000px;\n\n  margin: 0 auto;\n  padding: 16px;\n\n  word-break: break-word;\n"]);return N=function(){return e},e}function S(){var e=Object(b.a)([""]);return S=function(){return e},e}var g=p.b.section(S()),H=p.b.div(N()),L=function(e){var t=e.className,n=e.children;return r.a.createElement(g,{className:t},r.a.createElement(H,null,n))},w=function(){return r.a.createElement(L,null,r.a.createElement("h1",null,"Home"),r.a.createElement("p",null,"Work in Progress!"))},y=n(53),v=function(e){return function(t){return r.a.createElement(Te.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,{config:n}))})}},F=function(e){var t=e.username,n=e.url;return r.a.createElement("a",{href:n},t)},C=v(function(e){var t=e.config.author;return r.a.createElement(L,null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"This is a project by Daniel Shevtsov (",r.a.createElement(F,{username:t.github.username,url:t.github.url}),") for ENSE 480 (Knowledge Base and Information Systems) at the University of Regina."),r.a.createElement("p",null,"The aim of the project is to implement a basic Artificial Neural Network for categorizing points in two-dimensional space. In addition, a visualization is provided to display the network's state as it is being trained, the inputs fed into the network, and the network's outputs."),r.a.createElement("h2",null,"Inspirations"),r.a.createElement("p",null,"This project is inspired by some other amazing JavaScript AI projects with similar demos:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"TensorFlow.js: "),r.a.createElement("a",{href:"http://playground.tensorflow.org"},"http://playground.tensorflow.org")),r.a.createElement("li",null,r.a.createElement("b",null,"ConvnetJS: "),r.a.createElement("a",{href:"https://cs.stanford.edu/people/karpathy/convnetjs/demo/classify2d.html"},"https://cs.stanford.edu/people/karpathy/convnetjs/demo/classify2d.html"))),r.a.createElement("h2",null,r.a.createElement(y.a,{to:"/licenses/"},"Open Source Licenses")))}),D=[{name:"gh-pages",link:"https://github.com/tschaub/gh-pages",license:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"MIT License"))}},{name:"headroom.js",link:"https://github.com/WickyNilliams/headroom.js",license:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"The MIT License (MIT)"),r.a.createElement("p",null,"Copyright (c) 2013 Nick Williams"),r.a.createElement("p",null,"Permission is hereby granted, free of charge, to any person obtaining a copy",r.a.createElement("br",null),'of this software and associated documentation files (the "Software"), to deal',r.a.createElement("br",null),"in the Software without restriction, including without limitation the rights",r.a.createElement("br",null),"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell",r.a.createElement("br",null),"copies of the Software, and to permit persons to whom the Software is",r.a.createElement("br",null),"furnished to do so, subject to the following conditions:"),r.a.createElement("p",null,"The above copyright notice and this permission notice shall be included in",r.a.createElement("br",null),"all copies or substantial portions of the Software."),r.a.createElement("p",null,'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR',r.a.createElement("br",null),"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,",r.a.createElement("br",null),"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE",r.a.createElement("br",null),"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER",r.a.createElement("br",null),"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,",r.a.createElement("br",null),"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN",r.a.createElement("br",null),"THE SOFTWARE."))}},{name:"normalize.css",link:"https://github.com/necolas/normalize.css",license:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"The MIT License (MIT)"),r.a.createElement("p",null,"Copyright \xa9 Nicolas Gallagher and Jonathan Neal"),r.a.createElement("p",null,"Permission is hereby granted, free of charge, to any person obtaining a copy of",r.a.createElement("br",null),'this software and associated documentation files (the "Software"), to deal in',r.a.createElement("br",null),"the Software without restriction, including without limitation the rights to",r.a.createElement("br",null),"use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies",r.a.createElement("br",null),"of the Software, and to permit persons to whom the Software is furnished to do",r.a.createElement("br",null),"so, subject to the following conditions:"),r.a.createElement("p",null,"The above copyright notice and this permission notice shall be included in all",r.a.createElement("br",null),"copies or substantial portions of the Software."),r.a.createElement("p",null,'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR',r.a.createElement("br",null),"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,",r.a.createElement("br",null),"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE",r.a.createElement("br",null),"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER",r.a.createElement("br",null),"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,",r.a.createElement("br",null),"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE",r.a.createElement("br",null),"SOFTWARE."))}},{name:"polished",link:"https://github.com/styled-components/polished",license:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"MIT License"),r.a.createElement("p",null,"Copyright (c) 2016 - 2018 Brian Hough and Maximilian Stoiber"),r.a.createElement("p",null,"Permission is hereby granted, free of charge, to any person obtaining a copy",r.a.createElement("br",null),'of this software and associated documentation files (the "Software"), to deal',r.a.createElement("br",null),"in the Software without restriction, including without limitation the rights",r.a.createElement("br",null),"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell",r.a.createElement("br",null),"copies of the Software, and to permit persons to whom the Software is",r.a.createElement("br",null),"furnished to do so, subject to the following conditions:"),r.a.createElement("p",null,"The above copyright notice and this permission notice shall be included in all",r.a.createElement("br",null),"copies or substantial portions of the Software."),r.a.createElement("p",null,'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR',r.a.createElement("br",null),"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,",r.a.createElement("br",null),"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE",r.a.createElement("br",null),"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER",r.a.createElement("br",null),"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,",r.a.createElement("br",null),"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE",r.a.createElement("br",null),"SOFTWARE."))}},{name:"react",link:"https://github.com/facebook/react",license:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"MIT License"),r.a.createElement("p",null,"Copyright (c) Facebook, Inc. and its affiliates."),r.a.createElement("p",null,"Permission is hereby granted, free of charge, to any person obtaining a copy",r.a.createElement("br",null),'of this software and associated documentation files (the "Software"), to deal',r.a.createElement("br",null),"in the Software without restriction, including without limitation the rights",r.a.createElement("br",null),"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell",r.a.createElement("br",null),"copies of the Software, and to permit persons to whom the Software is",r.a.createElement("br",null),"furnished to do so, subject to the following conditions:"),r.a.createElement("p",null,"The above copyright notice and this permission notice shall be included in all",r.a.createElement("br",null),"copies or substantial portions of the Software."),r.a.createElement("p",null,'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR',r.a.createElement("br",null),"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,",r.a.createElement("br",null),"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE",r.a.createElement("br",null),"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER",r.a.createElement("br",null),"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,",r.a.createElement("br",null),"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE",r.a.createElement("br",null),"SOFTWARE."))}},{name:"react-redux",link:"https://github.com/reduxjs/react-redux",license:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"The MIT License (MIT)"),r.a.createElement("p",null,"Copyright (c) 2015-present Dan Abramov"),r.a.createElement("p",null,"Permission is hereby granted, free of charge, to any person obtaining a copy",r.a.createElement("br",null),'of this software and associated documentation files (the "Software"), to deal',r.a.createElement("br",null),"in the Software without restriction, including without limitation the rights",r.a.createElement("br",null),"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell",r.a.createElement("br",null),"copies of the Software, and to permit persons to whom the Software is",r.a.createElement("br",null),"furnished to do so, subject to the following conditions:"),r.a.createElement("p",null,"The above copyright notice and this permission notice shall be included in all",r.a.createElement("br",null),"copies or substantial portions of the Software."),r.a.createElement("p",null,'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR',r.a.createElement("br",null),"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,",r.a.createElement("br",null),"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE",r.a.createElement("br",null),"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER",r.a.createElement("br",null),"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,",r.a.createElement("br",null),"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE",r.a.createElement("br",null),"SOFTWARE."))}},{name:"react-router",link:"https://github.com/ReactTraining/react-router",license:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"MIT License"),r.a.createElement("p",null,"Copyright (c) React Training 2016-2018"),r.a.createElement("p",null,"Permission is hereby granted, free of charge, to any person obtaining a copy",r.a.createElement("br",null),'of this software and associated documentation files (the "Software"), to deal',r.a.createElement("br",null),"in the Software without restriction, including without limitation the rights",r.a.createElement("br",null),"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell",r.a.createElement("br",null),"copies of the Software, and to permit persons to whom the Software is",r.a.createElement("br",null),"furnished to do so, subject to the following conditions:"),r.a.createElement("p",null,"The above copyright notice and this permission notice shall be included in all",r.a.createElement("br",null),"copies or substantial portions of the Software."),r.a.createElement("p",null,'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR',r.a.createElement("br",null),"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,",r.a.createElement("br",null),"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE",r.a.createElement("br",null),"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER",r.a.createElement("br",null),"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,",r.a.createElement("br",null),"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE",r.a.createElement("br",null),"SOFTWARE."))}},{name:"redux",link:"https://github.com/reduxjs/redux",license:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"The MIT License (MIT)"),r.a.createElement("p",null,"Copyright (c) 2015-present Dan Abramov"),r.a.createElement("p",null,"Permission is hereby granted, free of charge, to any person obtaining a copy",r.a.createElement("br",null),'of this software and associated documentation files (the "Software"), to deal',r.a.createElement("br",null),"in the Software without restriction, including without limitation the rights",r.a.createElement("br",null),"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell",r.a.createElement("br",null),"copies of the Software, and to permit persons to whom the Software is",r.a.createElement("br",null),"furnished to do so, subject to the following conditions:"),r.a.createElement("p",null,"The above copyright notice and this permission notice shall be included in all",r.a.createElement("br",null),"copies or substantial portions of the Software."),r.a.createElement("p",null,'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR',r.a.createElement("br",null),"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,",r.a.createElement("br",null),"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE",r.a.createElement("br",null),"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER",r.a.createElement("br",null),"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,",r.a.createElement("br",null),"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE",r.a.createElement("br",null),"SOFTWARE."))}},{name:"styled-components",link:"https://github.com/styled-components/styled-components",license:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"MIT License"),r.a.createElement("p",null,"Copyright (c) 2016-present Glen Maddern and Maximilian Stoiber"),r.a.createElement("p",null,"Permission is hereby granted, free of charge, to any person obtaining a copy",r.a.createElement("br",null),'of this software and associated documentation files (the "Software"), to deal',r.a.createElement("br",null),"in the Software without restriction, including without limitation the rights",r.a.createElement("br",null),"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell",r.a.createElement("br",null),"copies of the Software, and to permit persons to whom the Software is",r.a.createElement("br",null),"furnished to do so, subject to the following conditions:"),r.a.createElement("p",null,"The above copyright notice and this permission notice shall be included in all",r.a.createElement("br",null),"copies or substantial portions of the Software."),r.a.createElement("p",null,'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR',r.a.createElement("br",null),"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,",r.a.createElement("br",null),"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE",r.a.createElement("br",null),"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER",r.a.createElement("br",null),"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,",r.a.createElement("br",null),"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE",r.a.createElement("br",null),"SOFTWARE."))}}],W=[{path:"/",exact:!0,component:w,label:"Home",navbar:!0},{path:"/about/",component:C,label:"About",navbar:!0},{path:"https://github.com/shevtsod/ENSE480",label:"GitHub",navbar:!0,external:!0},{path:"/licenses",component:function(){return r.a.createElement(L,null,r.a.createElement("h1",null,"Open Source Licenses"),D.map(function(e,t){var n=e.name,a=e.link,l=void 0===a?"#":a,o=e.license;return r.a.createElement("div",{key:t},r.a.createElement("h2",null,r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},n)),r.a.createElement(o,null))}))}},{component:function(){return r.a.createElement(L,null,r.a.createElement("h1",null,"This page does not exist!"))}}];function M(){var e=Object(b.a)(["\n  grid-area: ",";\n"]);return M=function(){return e},e}function P(){var e=Object(b.a)(["\n  font-family: 'Roboto', sans-serif;\n\n  height: 100vh;\n\n  display: grid;\n  grid-template-areas:\n    'header'\n    'main'\n    'footer';\n  grid-template-columns: 1fr;\n  grid-template-rows: 64px 1fr auto;\n"]);return P=function(){return e},e}var U=p.b.div(P()),G=function(e,t){return Object(p.b)(e)(M(),t)},j=n(33),Y=n.n(j);function k(){var e=Object(b.a)(["\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n\n  padding: 16px;\n\n  font-size: 24px;\n  text-decoration: none;\n  color: ",";\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  &:active {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"]);return k=function(){return e},e}function B(){var e=Object(b.a)(["\n  padding: 8px;\n"]);return B=function(){return e},e}function x(){var e=Object(b.a)(["\n  height: 64px;\n  width: 100%;\n\n  position: fixed;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  color: ",";\n  background-color: ",";\n\n  will-change: transform;\n  transition: transform 200ms linear;\n\n  /* Headroom.js classes */\n  &.headroom--pinned {\n    transform: translateY(0%);\n  }\n  &.headroom--unpinned {\n    transform: translateY(-100%);\n  }\n"]);return x=function(){return e},e}var V=p.b.header(x(),function(e){return e.theme.secondaryText},function(e){return e.theme.primary}),X=p.b.img(B()),K=n(56),J=n(37);function z(){var e=Object(b.a)(["\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n\n  padding: 16px;\n\n  color: ",";\n  background-color: ",";\n  text-decoration: none;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  &:active {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"]);return z=function(){return e},e}function Z(){var e=Object(b.a)(["\n  height: 100%;\n\n  display: flex;\n"]);return Z=function(){return e},e}var _,Q=p.b.nav(Z()),q=function(e){return function(t){return r.a.createElement(Oe.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,{routes:n}))})}},$=(_=function(e){var t=e.className,n=e.external,a=e.path,l=e.label;return n?r.a.createElement("a",{href:a,className:t},r.a.createElement("span",null,l)):r.a.createElement(y.a,{to:a,className:t},r.a.createElement("span",null,l))},Object(p.b)(_)(z(),function(e){return e.theme.primaryText},function(e){var t=e.active,n=e.theme;return t?Object(J.a)(.1,n.primary):"transparent"})),ee=function(e){var t=e.className,n=e.routes,a=e.location.pathname;return r.a.createElement(Q,{className:t},n.filter(function(e){return e.navbar}).map(function(e,t){return r.a.createElement($,Object.assign({key:t},e,{active:a===e.path}))}))};ee.defaultProps={links:[]};var te,ne=q(Object(K.a)(ee)),ae=n(36),re=n.n(ae),le=(te=y.a,Object(p.b)(te)(k(),function(e){return e.theme.primaryText})),oe=v(function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(O.a)(this,Object(h.a)(t).call(this,e))).headerRef=r.a.createRef(),n}return Object(I.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){this.headroom=new Y.a(this.headerRef.current).init()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.config.name;return r.a.createElement(V,{className:t,ref:this.headerRef},r.a.createElement(le,{to:"/"},r.a.createElement(X,{src:re.a,alt:"Logo"}),r.a.createElement("span",null,n)),r.a.createElement(ne,null))}}]),t}(a.Component));function ie(){var e=Object(b.a)(["\n  text-align: center;\n\n  color: ",";\n  background-color: ",";\n"]);return ie=function(){return e},e}var ce=p.b.footer(ie(),function(e){return e.theme.secondaryText},function(e){return e.theme.secondary}),se=v(function(e){var t=e.className,n=e.config,a=n.name,l=n.author;return r.a.createElement(ce,{className:t},r.a.createElement(L,null,r.a.createElement("h2",null,a),r.a.createElement("span",null,l.name,", 2019")))}),ue=G("main","main"),Ee=G(se,"footer"),me=function(e){var t=e.className,n=e.children;return r.a.createElement(U,{className:t},r.a.createElement(oe,null),r.a.createElement(ue,null,n),r.a.createElement(Ee,null))},Te=r.a.createContext({}),Oe=r.a.createContext({}),he=function(e){function t(e){var n;return Object(m.a)(this,t),n=Object(O.a)(this,Object(h.a)(t).call(this,e)),e.initializeApp(),n}return Object(I.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props,t=e.config,n=e.routes;return t?r.a.createElement(A.a,{basename:"/ENSE480"},r.a.createElement(Te.Provider,{value:t},r.a.createElement(Oe.Provider,{value:n},r.a.createElement(p.a,{theme:t.theme},r.a.createElement(me,null,r.a.createElement(f.a,null,n.filter(function(e){return!e.external}).map(function(e,t){var n=e.path,a=e.component,l=e.exact;return r.a.createElement(R.a,{key:t,path:n,exact:l,component:a})}))))))):null}}]),t}(a.Component),Ie=Object(i.b)(function(e){return{config:e.config,routes:e.routes}},function(e){return{initializeApp:function(){e({type:"@@config/LOAD_CONFIG",payload:d}),e({type:"@@config/LOAD_ROUTES",payload:W})}}})(he),Ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Re=document.getElementById("root");o.a.render(r.a.createElement(i.a,{store:E},r.a.createElement(Ie,null)),Re),function(e){if("serviceWorker"in navigator){if(new URL("/ENSE480",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/ENSE480","/service-worker.js");Ae?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):fe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):fe(t,e)})}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.ddd25e49.chunk.js.map