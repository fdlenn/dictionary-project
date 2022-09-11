import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
    <div className="container">
      <header className="App-header">
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        <small>
         This dictionary app was <a href="https://github.com/fdlenn/dictionary-project.git" target="_blank" rel="noreferrer">coded</a> by Laura Fenn and is hosted on <a href="https://dulcet-cheesecake-0fb1a2.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>.
          </small>
        
      </footer>
    </div>
    </div>
  );
}
