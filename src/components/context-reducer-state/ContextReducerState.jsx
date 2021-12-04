import React from 'react'
import { useReducerStore } from './ReducerStore'

const ContextReducerState = () => {
  const { bogusProperty } = useReducerStore()

  console.log('Rendered ContextReducerState', bogusProperty)

  return (
    <div>Context using reducer state</div>
  )
}

export default ContextReducerState
