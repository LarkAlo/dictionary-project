import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>This project was coded by Kimberly Cossio and is </small>
          <small>
            {" "}
            <a
              href="https://github.com/LarkAlo/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-Source
            </a>
            and{" "}
            <a
              href="https://jovial-chebakia-d376bd.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
