import React from 'react';

const CartWidget = () => {
  return (
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h9a2 2 0 012 2v11a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2zm0 0l1.791-3.582A1 1 0 0111.618 3h.764a1 1 0 01.827.418L13 4m-4 3V3m0 0a2 2 0 10-4 0m4 0a2 2 0 114 0z" />
      </svg>
      <span className="text-gray-500">0</span> {}
    </div>
  );
}

export default CartWidget;
