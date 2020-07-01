import React from 'react';

// Style
import './App.scss';

// Components
import { Inputs } from './components/Inputs/Inputs';
import { Buttons } from './components/Buttons/Buttons';

function App() {
  return (
    <div className="App">
      <h1>React !</h1>
      <Inputs.Text />
      <Buttons.Submit handler={() => console.log('click')} />
    </div>
  );
}

export default App;
