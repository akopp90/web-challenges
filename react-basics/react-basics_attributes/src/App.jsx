import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article>
      <h2 className="article__title">Newsletter Anmeldung</h2>
      <label htmlFor="input">E-Mail</label>
      <br />
      <input id="input"></input>
      <br />
      <a href="https://google.com" className="article__link">
        Send
      </a>
    </article>
  );
}
