import React, { useState } from 'react';
import { shuffleId } from './helper';

const currentPicks = [];

function Main({ score, setScore, setShow }) {
  const [playerList, setPlayerList] = useState(shuffleId());

  const comparePicks = (id) => {
    if (currentPicks.includes(id)) {
      setScore(0);
      currentPicks.length = 0;
    } else {
      currentPicks.push(id);
      setScore(score + 1);
      if (currentPicks.length === 16) {
        setShow(true);
        currentPicks.length = 0;
      }
    }
  };

  const handleClick = (e) => {
    comparePicks(e.target.closest('button').id);
    setPlayerList(shuffleId());
  };

  return (
    <main>
      {playerList.map((player) => (
        <button
          type="button"
          onClick={handleClick}
          key={player.id}
          id={player.id}
          className="card"
        >
          <div className="container">
            <div className="gradient" />
            <img
              className="card-image"
              src={player.img}
              alt={player.name}
            />
            <span className="player-name">{player.name}</span>
          </div>
        </button>
      ))}
    </main>
  );
}

export default Main;

// {name.name}
// onClick={handleClick}
//

