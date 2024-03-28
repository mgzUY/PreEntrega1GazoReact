import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold">{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;
