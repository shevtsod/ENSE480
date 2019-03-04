import React from 'react'
import { IoLogoGithub } from 'react-icons/io'

// Routes
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Licenses from './pages/Licenses'

/*
Application routes

  path         - Route URL
  exact        - Only loads route if location is matched exactly
  component    - Component that will handle this route (only internal)
  label        - Display name for the route
  navbar       - Determines whether the route should be displayed in the primary
                 application navigation bar
  external     - Specifies that the route is an external URL
*/
export default [
  {
    path: '/',
    exact: true,
    component: Home,
    label: 'Home',
    navbar: true
  },
  {
    path: '/about/',
    component: About,
    label: 'About',
    navbar: true
  },
  {
    path: 'https://github.com/shevtsod/ENSE480',
    label: <IoLogoGithub size={'2em'} />,
    navbar: true,
    external: true
  },
  {
    path: '/licenses',
    component: Licenses
  },
  {
    component: NotFound
  }
]
