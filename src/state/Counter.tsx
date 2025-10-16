import { useReducer } from "react";

const initialState = { count: 0 };

type CounterState = {
  count: number
}

type ActionState = {
  type: 'increment' | 'decrement' | 'default',
  payload: number
}

function reducer(state: CounterState, action: ActionState) {
  switch (action.type) {
    case 'increment': return { count: state.count + action.payload }
    case 'decrement': return { count: state.count - action.payload }
    case 'default': return { count: state.count }
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Count: {state.count}</h1>

      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>Decrement</button>
    </>
  )
}