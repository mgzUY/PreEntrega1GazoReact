import React from 'react';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a TCG Store" />
    </div>
  );
}

export default App;
