import React from 'react';
import 'tailwindcss/tailwind.css';

function Body() {
  return (
    <div className="bg-amber-50 flex flex-grow justify-center items-center py-8">
      <div className="text-center">
        <h1 className="py-4 font-bold text-stone-600">This Month's Book Club Meeting:</h1>
        <img src="./assets/MarchFlyer.png" alt="Flyer" className="w-64 h-auto sm:w-48 md:w-64 lg:w-96" />
      </div>
    </div>
  );
}

export default Body;