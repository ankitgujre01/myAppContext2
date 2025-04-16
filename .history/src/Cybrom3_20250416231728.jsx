// Cybrom3.jsx
import React, { useContext } from 'react';
import Name2Context from './context/Name2Context';

const Cybrom3 = () => {
  const { name2 } = useContext(Name2Context);

  return (
    <>
      <h1>Welcome to here, {name2}</h1>
    </>
  );
};

export default Cybrom3;
