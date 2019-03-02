// Routes
import Home from './pages/Home'
import Debug from './pages/Debug'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Licenses from './pages/Licenses'

export default [
  { path: '/', component: Home, exact: true, label: 'Home', navbar: true },
  { path: '/debug/', component: Debug, label: 'Debug', navbar: true },
  { path: '/about/', component: About, label: 'About', navbar: true },
  { path: '/licenses', component: Licenses },
  { component: NotFound }
]
