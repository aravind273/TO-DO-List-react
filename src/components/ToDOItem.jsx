import React from "react";

function ToDOItem(props) {
  return <li onClick={() => props.delete(props.id)}>{props.text}</li>;
}

export default ToDOItem;
