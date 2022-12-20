import React, { useState } from 'react';
import { shuffleId } from './game';

const currentPicks = [];

function Main({ score, setScore, setShow }) {
  const [names, setNames] = useState(shuffleId());
  const comparePicks = async (e) => {
    if (currentPicks.includes(e.target.id)) {
      setScore(0);
      currentPicks.length = 0;
    } else {
      currentPicks.push(e.target.id);
      setScore(score + 1);
      if (currentPicks.length === 16) {
        setShow(true);
        currentPicks.length = 0;
      }
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

