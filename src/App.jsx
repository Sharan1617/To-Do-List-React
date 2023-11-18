import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  function handleInput(event) {
    setInput(event.target.value);
  }
  function handleClick() {
    setTodo((prevItem) => {
      return [...prevItem, input];
    });
    setInput("");
  }

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input type="text" onChange={handleInput}></input>
          <button className="btn" onClick={handleClick}>
            Add
          </button>
        </div>
        <div>
          <ul>
            {todo.map((todoItem) => {
              return <li key={todoItem.id}>{todoItem}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="footer">
        <h2>&copy;Sharanveer</h2>
      </div>
    </>
  );
}

export default App;
