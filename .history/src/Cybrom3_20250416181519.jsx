import React from 'react'
import UserContext from './UserContext';
import { myContext } from './App';
const Cybrom3 = () => {
    const { name2 } = useContext(myContext);
    console.log(name2);
  return (
      <>
        <h1>Welcome to here</h1>
      </>
  )
}

export default Cybrom3;