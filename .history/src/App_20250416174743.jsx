import React from 'react'
import { useState, createContext } from 'react';
import Comp1 from './Comp1';
import Cybrom from './Cybrom';


const myContext = createContext();

const App = () => {

  const [name, setName] = useState("Raman");

  const [user, setUser] = useState("Ankit");
  
  return (
    <>
      <h1>Welcome {user}</h1>
      <button onClick={() => setUser("Ankit Kumar")}>Change User</button>
      <myContext.Provider value={{ user, setUser }}>
        <Comp1 />
        
      </myContext.Provider>
      
    </>
  )
}

export default App;
export { myContext };