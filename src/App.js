import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Anna Ziętarska and is{" "}
          <a
            href="https://github.com/AnnaZietarska/project-pogodowy"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
