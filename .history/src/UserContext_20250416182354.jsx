import React, { createContext, useState } from 'react';

const UserContext = createContext();

const User = ({ children }) => {
  const [name, setName] = useState("hemant");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export { UserContext };