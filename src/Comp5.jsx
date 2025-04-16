import React, { useContext } from 'react';
import { myContext } from './App';

const Comp5 = () => {
  const { user } = useContext(myContext);

  return (
    <>
      <div>Comp5 - {user}</div>
    </>
  );
};

export default Comp5;
