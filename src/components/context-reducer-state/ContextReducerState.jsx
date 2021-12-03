import React from 'react'
import { useReducerStore } from './ReducerStore'

const ContextReducerState = () => {
  const { bogusProperty, bogusState } = useReducerStore()

  console.log('Rendered ContextReducerState', bogusProperty, bogusState)

  return (
    <div>Context using reducer state</div>
  )
}

export default ContextReducerState
