import React from "react";
function Todo(props) {
  const list = props.list;
  console.log("value if list", list);
  if (list.length !== 0) {
    console.log("Inside the if condition");
    return (
      <ul>
        {list.map(item => (
            <li key={item.id} data-key={item.id}>
              {item.text}
            </li>
        ))}
      </ul>
    );
  } else {
    return "";
  }
}

export default Todo;
