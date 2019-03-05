import React from 'react'
import { ConfigContext } from '../../containers/App'

/*
HOC that returns a component with config as a prop
*/
const withConfig = Component => {
  return props => (
    <ConfigContext.Consumer>
      {config => <Component {...props} config={config} />}
    </ConfigContext.Consumer>
  )
}

export default withConfig
