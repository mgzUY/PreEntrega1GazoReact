import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">MGZ Cartas</h1>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
