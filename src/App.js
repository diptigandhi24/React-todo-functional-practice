import React, { useState } from "react";
import Todo from "./Todo.js";
import Form from "./form.js";
import "./App.css";

function App() {
  let [list, addToList] = useState([]);
  let [text, setText] = useState("");
  const onSubmitHandler = event => {
    event.preventDefault();
    if (!text.length) return;
    let newItem = {
      text: text,
      id: Date.now()
    };

    addToList(list.concat(newItem));
    setText((text = ""));
  };
  return (
    <div>
      <Form
        onSubmitHandler={onSubmitHandler}
        onChange={e => {
          setText((text = e.target.value));
        }}
        value={text}
      />
      <Todo list={list} />
    </div>
  );
}

export default App;
