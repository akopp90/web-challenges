import React from "react";
import "./styles.css";
import Counter from "./components/Counter";

export default function App() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <Counter
      count={count}
      increment={increment}
      decrement={decrement}
      value={count}
    />
  );
}
