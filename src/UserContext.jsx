import React, { createContext, useState } from 'react';

// Create context
const MyContext = createContext();

// Context Provider component
const UserContext = ({ children }) => {
  const [name, setName] = useState("Ankit");

  return (
    <MyContext.Provider value={{ name, setName }}>
      {children}
    </MyContext.Provider>
  );
};

export default UserContext;
export { MyContext };
