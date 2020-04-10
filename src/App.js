import React from 'react';
import './App.scss';

import ToggleText from './components/ToggleText.component'
import Counter from './components/Counter.component'
import Races from './components/Races.component'

function App() {
  return (
    <div className="app-container">
      <p>
        React tests example!
      </p>
      <ToggleText />
      <Counter />
      <Races />
    </div>
  );
}

export default App;
