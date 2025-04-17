import React, { useState } from 'react';
import Comp1 from './Comp1';
import Cybrom from './Cybrom';
import Cybrom2 from './Cybrom2';
import Cybrom3 from './Cybrom3';

import UserContext from './context/UserContext';


const App = () => {
  const [user, setUser] = useState("Ankit");
  // const [name, setName] = useState("Raman");
  // const [name2, setName2] = useState("shiva");

  return (
    <>
      <h1>Welcome {user}</h1>
      <button onClick={() => setUser("Ankit Kumar")}>Change User</button>

      <UserContext.Provider value={{ user, setUser }}>
        <Comp1 />
      </UserContext.Provider>
      
    </>
  );
};

export default App;
