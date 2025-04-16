import React from 'react'
import { useContext } from 'react';
import { myContext } from './App';
const Cybrom = () => {
    const { name } = useContext(myContext);
    console.log(name);
  return (
      <>
          <h1>Welcome: {} </h1>
      </>
  )
}

export default Cybrom;