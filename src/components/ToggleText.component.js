import React, { useState } from 'react';

function ToggleText() {
  const [isShown, setIsShown] = useState(true);

  return (
    <div>
      <button
        id="btn-toggle"
        className={`neumorphic btn btn-toggle ${isShown && 'neumorphic-pressed'}`}
        onClick={() => setIsShown(!isShown)}>
          <span>
            <strong>
              Toggle Text
            </strong>
          </span>
        </button>
      <p id="p-toggle">{`${isShown ? 'Text goes here': '...'}`}</p>
    </div>
  );
}

export default ToggleText;
