/* eslint-disable default-case */
import React, { useReducer } from "react";
import "./index.css";

const App = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1,
        };
      case "decrement":
        return {
          count: state.count - 1,
        };
      default:
        return state;
    }
    // return { count: state.count + 1 };
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [count, setCount] = useState(0);

  function increment() {
    // setCount(count + 1);
    dispatch({ type: "increment" });
  }

  function decrement() {
    // setCount(count - 1);
    dispatch({ type: "decrement" });
  }

  return (
    <div>
      <button onClick={increment} className="p-4 b-4">
        Initial Count
      </button>
      <span>{state.count}</span>
      <button onClick={decrement}>Final Count</button>
    </div>
  );
};

export default App;
