import React from 'react'
import Comp4 from './Comp4';

const Comp3 = ({user}) => {
  return (
      <>
          Comp3
          <Comp4 user={user}/>
      </>
  )
}

export default Comp3;