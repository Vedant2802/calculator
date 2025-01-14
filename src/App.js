/* eslint-disable default-case */
import React, { useReducer, useState } from "react";
import "./index.css";

const App = () => {
  // clock();
  // const ACTIONS = {};
  //   function reducer(state, action) {
  //     switch (action.type) {
  //       case "increment":
  //         return {
  //           count: state.count + 1,
  //         };
  //       case "decrement":
  //         return {
  //           count: state.count - 1,
  //         };
  //       default:
  //         return state;
  //     }
  //     // return { count: state.count + 1 };
  //   }
  //   const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   // const [count, setCount] = useState(0);

  //   function increment() {
  //     // setCount(count + 1);
  //     dispatch({ type: "increment" });
  //   }

  //   function decrement() {
  //     // setCount(count - 1);
  //     dispatch({ type: "decrement" });
  //   }

  //   return (
  //     <div className="counter">
  //       <button onClick={increment} className="button">
  //         Initial Count
  //       </button>
  //       <span>{state.count}</span>
  //       <button onClick={decrement} className="button">
  //         Final Count
  //       </button>
  //     </div>
  //   );

  const ACTIONS = {
    ADD_TODO: "add-todo",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...state, action.payload.name];
      default:
        return state;
    }
  }

  // function todo(name) {
  //   return {
  //     id: Date.now(),
  //     name: name,
  //     complete: false,
  //   };
  // }

  const [state, dispatch] = useReducer(reducer, []);
  console.log(state);
  const [name, setName] = useState("");
  console.log(name);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default App;
