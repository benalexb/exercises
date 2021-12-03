// Action Types

export const INCREMENT_COUNTER = 'APP/PERF/INCREMENT_COUNTER'
export const SET_BOGUS_DATA = 'APP/PERF/SET_BOGUS_DATA'
export const SET_BOGUS_DATA2 = 'APP/PERF/SET_BOGUS_DATA2'
export const SET_STATUS = 'APP/PERF/SET_STATUS'

// Initial State

export const getInitialState = (partialState) => ({
  ...partialState,
  counter: 0,
  bogusData: null,
  bogusData2: null,
  bogusStatus: 'idle'
})

// Actions

export const incrementCounter = () => ({ type: INCREMENT_COUNTER })

export const setBogusData = (bogusData) => ({ type: SET_BOGUS_DATA, payload: bogusData })

export const setBogusData2 = (bogusData) => ({ type: SET_BOGUS_DATA2, payload: bogusData })

export const setStatus = (newStatus) => ({ type: SET_BOGUS_DATA, payload: newStatus })

// Reducer

export const simpleReducer = (state = getInitialState(), action) => {
  const { type, payload } = action

  switch (type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 }
    case SET_BOGUS_DATA:
      return { ...state, bogusData: payload }
    case SET_BOGUS_DATA2:
      return { ...state, bogusData2: payload }
    case SET_STATUS:
      return { ...state, bogusStatus: payload }
    default:
      return { ...state }
  }
}
