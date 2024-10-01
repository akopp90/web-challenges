import React from "react";
import { Children } from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Home</Button>
      <Button>Service</Button>
      <Button>Pricing</Button>
      <Button>About</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
