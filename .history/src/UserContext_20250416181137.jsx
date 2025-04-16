import React from 'react'
import { createContext } from 'react';

import { useContext } from 'react';

const myContext = createContext();

const UserContext = () => {

    const [name, setName] = useState("hemant");

    const [user, setUser]
  return (
      <>
          <myContext.Provider value={{ name, setName }}>
              </myContext.Provider>
      </>
  )
}

export default UserContext;
export { UserContext };