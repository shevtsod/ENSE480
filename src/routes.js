// Routes
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import NotFound from './components/Pages/NotFound'
import Licenses from './components/Pages/Licenses'

/*
Application routes

  path         - Route URL
  exact        - Only loads route if location is matched exactly
  component    - Component that will handle this route (only internal)
  icon         - Icon to show for this route
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
    icon: 'IoIosHome',
    label: 'Home',
    navbar: true
  },
  {
    path: '/about/',
    component: About,
    icon: 'IoIosInformationCircle',
    label: 'About',
    navbar: true
  },
  {
    path: 'https://github.com/shevtsod/ENSE480',
    icon: 'IoLogoGithub',
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
