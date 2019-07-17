import React, { useState } from "react";
import Todo from "./Todo.js";
import Form from "./form.js";
import "./App.css";

function App() {
  let [list, addToList] = useState([]);

  return (
    <div>
      <Todo list={list} />
      <Form addToList={addToList} list={list} />
    </div>
  );
}

export default App;
