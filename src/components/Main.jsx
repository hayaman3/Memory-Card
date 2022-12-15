import React, { useState } from 'react';
import { shuffleId } from './game';

const currentPicks = [];

function Main({ score, setScore }) {
  const [names, setNames] = useState(shuffleId());

  const comparePicks = (e) => {
    if (currentPicks.includes(e.target.id)) {
      setScore(0);
    } else {
      currentPicks.push(e.target.id);
      setScore(score + 1);
    }
  };

  const handleClick = (e) => {
    comparePicks(e);
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

