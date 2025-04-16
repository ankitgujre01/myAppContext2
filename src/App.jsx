import React, { useState } from 'react';
import Comp1 from './Comp1';
import Cybrom from './Cybrom';
import Cybrom2 from './Cybrom2';
import Cybrom3 from './Cybrom3';

import UserContext from './context/UserContext';
import NameContext from './context/NameContext';
import Name2Context from './context/Name2Context';

const App = () => {
  const [user, setUser] = useState("Ankit");
  const [name, setName] = useState("Raman");
  const [name2, setName2] = useState("shiva");

  return (
    <>
      <h1>Welcome {user}</h1>
      <button onClick={() => setUser("Ankit Kumar")}>Change User</button>

      <UserContext.Provider value={{ user, setUser }}>
        <Comp1 />
      </UserContext.Provider>

      <NameContext.Provider value={{ name, setName }}>
        <Cybrom />
      </NameContext.Provider>

      <Name2Context.Provider value={{ name2, setName2 }}>
        <Cybrom2>We are learn here</Cybrom2>
        <Cybrom3 />
      </Name2Context.Provider>
    </>
  );
};

export default App;
