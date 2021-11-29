/* eslint-disable no-console */
import { useReducer, useEffect } from 'react';

const initialState = { count: 0 };

function simpleReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const useSomeHook = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(simpleReducer, initialState);

  useEffect(() => {
    setInterval(() => {
      dispatch({ type: 'increment' });
    }, 1000);
  }, []);
};

export default function HookReducerState() {
  useSomeHook();

  console.log('Render!');

  return (
    <div>
      Check the console to observe the re-renders taking place.
    </div>
  );
}
