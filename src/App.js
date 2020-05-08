import React, { useReducer } from 'react';
import './App.css';
import ComponentB from './components/ComponentB';
import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <div>Count - {count}</div>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;
