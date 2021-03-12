import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href = "ejemplo_id.html" onclick="window.open('\ejemplo_id.html')">PROBANDO FUNCION GETELEMNTBYID EN PROYECTO REAL</a>
        <a href = "ejemplo_2.html" onclick="window.open('\ejemplo_2.html')">IR AL EJEMPLO 1</a>
        <a href = "ejemplo_2.html" onclick="window.open('\ejemplo_2.html')">IR AL EJEMPLO 2</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
