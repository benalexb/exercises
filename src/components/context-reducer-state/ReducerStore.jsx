import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { simpleReducer, getInitialState, incrementCounter, setBogusData, setBogusData2, setStatus } from './SimpleReducer'
import PropTypes from 'prop-types'

const ReducerStore = createContext()

ReducerStore.displayName = 'ReducerStore'

export const useReducerStore = () => useContext(ReducerStore)

export const ReducerStoreProvider = ({ children }) => {
  const bogusProperty = 'bogus property'

  const [state, dispatch] = useReducer(simpleReducer, getInitialState())

  useEffect(() => {
    setInterval(() => {
      dispatch(incrementCounter())
    }, 1000)

    setInterval(() => {
      dispatch(setBogusData({ value: 1000 + state.counter }))
    }, 1500)

    setInterval(() => {
      dispatch(setBogusData2({ value: 10000000 - state.counter }))
    }, 2000)

    setInterval(() => {
      dispatch(setStatus(state.counter % 2 === 0 ? 'even' : 'odd'))
    }, 2500)
  }, [])

  return (
    <ReducerStore.Provider value={{ bogusProperty, bogusState: state.counter }}>
      {children}
    </ReducerStore.Provider>
  )
}

ReducerStoreProvider.propTypes = {
  children: PropTypes.node
}
