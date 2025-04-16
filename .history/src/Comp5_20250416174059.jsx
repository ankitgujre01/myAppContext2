import React from 'react'
import { useContext } from 'react';
import { myContext } from './App';


const Comp5 = ({ user }) => {
    const {user} = useContext(myContext);
  return (
      <>
          Comp5
          <Comp5 user= {user}/>
      </>
  )
}

export default Comp5;