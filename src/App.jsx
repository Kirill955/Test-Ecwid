import React from 'react';

// Style
import './App.scss';

// Components
import { Inputs } from './components/Inputs/Inputs';

function App() {
  return (
    <div className="App">
      <h1>React !</h1>
      <Inputs.Text />
    </div>
  );
}

export default App;
