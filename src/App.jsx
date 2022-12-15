import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [score, setScore] = useState(0);
  // const prop = [score, setScore];

  return (
    <>
      <Header score={score} />
      <Main score={score} setScore={setScore} />
    </>
  );
}

export default App;

