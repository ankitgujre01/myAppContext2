import React from 'react'
import { useContext } from 'react';
import { myContext } from './App';

const {user} = useContext(myContext);

const Comp5 = ({ user }) => {
    
  return (
      <>
          Comp5
          <Comp5 user= {user}/>
      </>
  )
}

export default Comp5;