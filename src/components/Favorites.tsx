import Nav from './Nav';
import { GlobalContext } from '../context/GlobalState';
import React, { useContext, useState } from 'react';

const Favorites = ({}) => {
  const { doglist, removeDogFromDoglist } = useContext(GlobalContext);

  return (
    <div>
      <Nav />
      <h1>My Favorite Dogs</h1>
    </div>
  );
};

export default Favorites;
