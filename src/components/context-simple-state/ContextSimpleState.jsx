import React from 'react'
import { useSimpleStore } from './SimpleStore'

const ContextSimpleState = () => {
  const { bogusProperty, bogusState } = useSimpleStore()

  console.log('Rendered ContextSimpleState', bogusProperty, bogusState)

  return (
    <div>Context using simple state!</div>
  )
}

export default ContextSimpleState
