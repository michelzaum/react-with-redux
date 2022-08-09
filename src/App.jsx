import reactLogo from './assets/react.svg';
import reduxLogo from './assets/redux.png';
import './App.css';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://redux.js.org/" target="_blank">
          <img src={reduxLogo} className="logo redux" alt="Redux logo" />
        </a>
      </div>
      <h1>Vite + React + Redux</h1>
      <div className="card">
        <Counter />
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and Redux logos to learn more
      </p>
    </div>
  );
};

export default App;
