import React, { createContext, useState } from 'react';

const myContext = createContext();

const UserContext = ({ children }) => {
  const [name, setName] = useState("hemant");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { myContext };