import React from "react";
import "./styles.css";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleCreateUser(event) {
    console.log("Account created!");
    setName(event.target.name.value);
    setEmail(event.target.email.value);
    console.log(name, email);
  }
  function handleDeleteUser() {
    setName("");
    setEmail("");
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form
        handleCreateUser={handleCreateUser}
        handleDeleteUser={handleDeleteUser}
      />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
