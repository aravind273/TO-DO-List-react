import React, { useState } from "react";
import ToDOItem from "./ToDOItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, additem] = useState([]);

  function add() {
    additem((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    additem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
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
          {items.map((item, index) => (
            <ToDOItem
              key={index}
              id={index}
              delete={deleteItem}
              text={item}
            ></ToDOItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
