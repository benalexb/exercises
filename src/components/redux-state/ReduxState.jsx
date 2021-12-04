import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, selectStatus } from './counter-slice'

const ReduxState = () => {
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)

  useEffect(() => {
    setInterval(() => {
      dispatch(increment())
    }, 1000)
  }, [])

  console.log('Rendered ReduxState!', status)

  return (
    <div>State managed by Redux</div>
  )
}

export default ReduxState
