import "./styles.css";

export default function App() {
  return <Greeting user="Andy" />;
}

function Greeting(props) {
  return <h1>Hello {props.user}!</h1>;
}
