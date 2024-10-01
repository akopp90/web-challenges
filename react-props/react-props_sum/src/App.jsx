import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA="2" valueB="5" />;
}

function Sum(props) {
  return (
    <p>
      {props.valueA} + {props.valueB} = {props.valueA + props.valueB}
    </p>
  );
}
