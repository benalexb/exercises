import React from 'react'
import { useSimpleStore } from './SimpleStore'

const ContextSimpleState = () => {
  const { bogusProperty } = useSimpleStore()

  console.log('Rendered ContextSimpleState', bogusProperty)

  return (
    <div>Context using simple state!</div>
  )
}

export default ContextSimpleState
