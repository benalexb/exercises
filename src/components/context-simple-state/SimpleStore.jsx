import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const SimpleStore = createContext()

SimpleStore.displayName = 'SimpleStore'

export const useSimpleStore = () => useContext(SimpleStore)

export const SimpleStoreProvider = ({ children }) => {
  const bogusProperty = 'bogus property'
  const [bogusState, setBogusState] = useState(0)
  const [bogusState2, setBogusState2] = useState(1000)
  const [bogusState3, setBogusState3] = useState(5000)

  useEffect(() => {
    setInterval(() => {
      setBogusState(bogusState + 1)
    }, 1000)

    setInterval(() => {
      setBogusState2(bogusState2 - 1)
    }, 1500)

    setInterval(() => {
      setBogusState3(bogusState3 - 5)
    }, 2000)
  }, [])

  return (
    <SimpleStore.Provider value={{ bogusProperty, bogusState }}>{children}</SimpleStore.Provider>
  )
}

SimpleStoreProvider.propTypes = {
  children: PropTypes.node
}
