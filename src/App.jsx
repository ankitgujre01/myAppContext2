import React, { useContext } from 'react';
import { MyContext } from './UserContext';
import Cybrom from './Cybrom';

const App = () => {
  const { name } = useContext(MyContext);

  return (
    <>
      <h1>Welcome to App</h1>
      <h2>User Name from Cybrom: {name}</h2>
      <Cybrom />
    </>
  );
};

export default App;
