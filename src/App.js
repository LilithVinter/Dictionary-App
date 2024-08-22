import logo from './logo.png';
import './App.css';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dictionary</h1>
        <Search />
      </header>
      <main></main>
      <footer>
        <p>
          This project was coded by{" "}
          <a
            href="https://github.com/LilithVinter"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Carie Ng
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/LilithVinter/Dictionary-App"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://carie-learning-to-code-4.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            hosted on Netify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
