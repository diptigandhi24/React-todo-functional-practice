import React from "react";
function Form(props) {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <input type="text" value={props.value} onChange={props.onChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
