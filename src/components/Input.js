import React from "react";

const Input = props => {
  const myStyle = {
    display: "inline-block",
    textAlign: "left"
  };
  const font1 = {
        fontFamily: "Poppins"
  };
  return (
    <p>
      <label style={myStyle} htmlFor={props.id}>
        {props.label}
      </label>
      <input style={font1} type={props.type} id={props.id} />
      <button onClick={props.onClick} id={props.id + ".io"}>
        edit
      </button>{" "}
    </p>
  );
};

export default Input;
