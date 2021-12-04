import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../src/components/redux-state/store'
import ReduxState from '../../src/components/redux-state/ReduxState'

const ReduxStatePage = () => (
  <Provider store={store}>
    <ReduxState />
  </Provider>
)

export default ReduxStatePage
