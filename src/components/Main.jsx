import React, { useState } from 'react';
import { shuffleId } from './game';

// const idArray = shuffleId();
function Main() {
  const [names, setNames] = useState(shuffleId());
  const handleClick = () => {
    setNames(shuffleId());
  };
  return (
    <main>
      {names.map((name) => (
        <button
          type="button"
          key={name.id}
          id={name.id}
          className="card"
          onClick={handleClick}
        >
          {name.name}
        </button>
      ))}
    </main>
  );
}

export default Main;

