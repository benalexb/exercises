import React from 'react'
import ContextReducerState from '../../src/components/context-reducer-state/ContextReducerState'
import { ReducerStoreProvider } from '../../src/components/context-reducer-state/ReducerStore'

const ContextReducerStatePage = () => {
  return (
    <ReducerStoreProvider>
      <ContextReducerState />
    </ReducerStoreProvider>
  )
}

export default ContextReducerStatePage
