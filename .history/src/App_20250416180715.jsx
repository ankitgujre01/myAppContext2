import React from 'react'
import { useState, createContext } from 'react';
import Comp1 from './Comp1';
import Cybrom from './Cybrom';
import Cybrom2 from './Cybrom2';


const myContext = createContext();

const App = () => {

  const [name, setName] = useState("Raman");

  const [user, setUser] = useState("Ankit");

  const [name2, setName2] = useState("shiva");
  
  return (
    <>
      <h1>Welcome {user}</h1>
      <button onClick={() => setUser("Ankit Kumar")}>Change User</button>
      <myContext.Provider value={{ user, setUser }}>
        <Comp1 />
        
      </myContext.Provider>
      
      <myContext.Provider value={{ name, setName }}>
        <Cybrom />
      </myContext.Provider>

      <myContext.Provider value={{ name2, setUser }}>
        <Cybrom2>
          We are learn here
        </Cybrom2>
      </myContext.Provider>
    </>
  )
}

export default App;
export { myContext };