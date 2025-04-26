import React, { useContext } from 'react';
import { MyContext } from './UserContext';

const Cybrom = () => {
  const { name, setName } = useContext(MyContext);

  return (
    <>
      <h1>Cybrom</h1>
      <h2>Hello, {name}</h2>
      <button onClick={() => setName("Om Prakash")}>
        Change Name
      </button>
    </>
  );
};

export default Cybrom;
