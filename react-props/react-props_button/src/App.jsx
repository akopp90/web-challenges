import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {}

  return (
    <>
      <Button text="Button" color="red" onClick={handleClick} />
      <Button
        text="Another Button"
        color="green"
        onClick={handleClick}
        disabled
      />
      <Button text="Another Button" color="blue" onClick={handleClick} />
      <Button text="Another Button" color="yellow" onClick={handleClick} />
    </>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{
        backgroundColor: color,
        margin: 10,
        borderRadius: 10,
        border: 0,
        padding: 10,
        cursor: "pointer",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {" "}
      {color}
      {text}
    </button>
  );
}
