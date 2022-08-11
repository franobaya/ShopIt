import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my first React app
        </p>
        <a
          className="App-link"
          href="https://github.com/franobaya"
          target="_blank"
          rel="noopener noreferrer"
        >
          More about Me
        </a>
      </header>
    </div>
  );
}

export default App;
