import "./styles.css";

export default function App() {
  return <Greeting usenamer="Andy" />;
}

function Greeting(props) {
  return <h1>Hello {props.name}!</h1>;
}
