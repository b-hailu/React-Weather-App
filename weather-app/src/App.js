import React from 'react';
import Forecast from './components/Forecast/Forecast';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Practice React Weather App</h1>
      </header>
      <main>
        {/* add weather fetching component */}
        <Forecast />
      </main>
      <footer>Page created by Belaynesh</footer>
    </div>
  );
}

export default App;
