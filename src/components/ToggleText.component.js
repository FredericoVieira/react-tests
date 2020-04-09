import React, { useState } from 'react';

function ToggleText() {
  const [isShown, setIsShown] = useState(true);

  return (
    <div>
      <button id="btn-toggle" onClick={() => setIsShown(!isShown)}>Toggle Text</button>
      {isShown && <p id="p-toggle">Text goes here</p>}
    </div>
  );
}

export default ToggleText;
