import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';

function App() {
  const [score, setScore] = useState(0);
  const [show, setShow] = useState('hide');

  const handleClose = () => setShow('hide');
  // const handleShow = () => setShow('show');

  useEffect(() => {
    setShow('show');
  }, [score === 2]);
  return (
    <>
      <Header score={score} onClick={handleClose} />
      <Main score={score} setScore={setScore} onClick={handleClose} />
      <Modal className={show} />
    </>
  );
}

export default App;

