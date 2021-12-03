import React from 'react'
import ContextSimpleState from '../../src/components/context-simple-state/ContextSimpleState'
import { SimpleStoreProvider } from '../../src/components/context-simple-state/SimpleStore.jsx'

const ContextSimpleStatePage = () => {
  return (
    <SimpleStoreProvider>
      <ContextSimpleState />
    </SimpleStoreProvider>
  )
}

export default ContextSimpleStatePage
