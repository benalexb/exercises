import { createSlice } from '@reduxjs/toolkit'

// Initial state
export const getInitialState = (partialState) => ({
  ...partialState,
  value: 0,
  status: 'idle'
})

// Slice
export const counterSlice = createSlice({
  name: 'counter',
  initialState: getInitialState(),
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value++
    },
    setStatus: (state, action) => {
      state.status = action.payload
    }
  }
})

// Actions
export const { increment, setStatus } = counterSlice.actions

// Selectors
export const selectCount = (state) => state.counter.value
export const selectStatus = (state) => state.counter.status

export default counterSlice.reducer
