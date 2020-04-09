import React from 'react';
import './App.css';

import ToggleText from './components/ToggleText.component'
import Counter from './components/Counter.component'

function App() {
  return (
    <div className="container">
      <p>
        React tests example!
      </p>
      <ToggleText />
      <Counter />
    </div>
  );
}

export default App;
