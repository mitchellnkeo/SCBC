import React from 'react';
import 'tailwindcss/tailwind.css';

function NavBar() {
  return (
    <nav className="bg-red-400 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Seattle Chinatown Book Club</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;