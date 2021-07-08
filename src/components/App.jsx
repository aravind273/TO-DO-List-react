import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, additem] = useState([]);

  function add() {
    additem((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function inputChanged(event) {
    var value = event.target.value;
    setInputText(value);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={inputChanged} value={inputText} />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem) => (
            <li>{todoitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
