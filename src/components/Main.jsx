import React, { useState } from 'react';
import { shuffleId } from './helper';

const currentPicks = [];

function Main({ score, setScore, setShow }) {
  const [playerList, setPlayerList] = useState(shuffleId());
  const comparePicks = (e) => {
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
    setPlayerList(shuffleId());
  };
  function fake() {
    if (!true) {
      handleClick();
    }
  }
  fake();
  return (
    <main>
      {playerList.map((player) => (
        <div>
          <img
            type="button"
            key={player.id}
            id={player.id}
            className="card"
            // src={player.img}
            src={player.img}
            alt={player.name}
          />
        </div>
      ))}
    </main>
  );
}

export default Main;

// {name.name}
// onClick={handleClick}
//

