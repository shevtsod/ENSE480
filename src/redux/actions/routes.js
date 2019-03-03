import { LOAD_ROUTES } from '../constants/routes'

import routes from '../../routes'

export const loadRoutes = () => ({
  type: LOAD_ROUTES,
  payload: routes
})
