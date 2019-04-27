import React, { useReducer, useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length,
          name: action.name
        }
      ];
    case "remove":
      // keep every item except the one we want to remove
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
}
export default function OLXpeBechde() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer(reducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }

  return (
    <>
      <h1>OLX Pe Bechde</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => dispatch({ type: "remove", index })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
