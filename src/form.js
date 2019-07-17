import React, { useState } from "react";
function Form({ addToList, list }) {
  let [inputText, setInputText] = useState("");
  const onChangeText = e => {
    setInputText(e.target.value);
  };
  const submitInput = e => {
    e.preventDefault();
    let newItem = {
      text: inputText,
      id: Date.now()
    };
    setInputText("");
    addToList(list.concat(newItem));
  };
  return (
    <form onSubmit={submitInput}>
      <input type="text" value={inputText} onChange={onChangeText} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
