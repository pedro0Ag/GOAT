import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-yellow-300 p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold"><img className="w-[60px] h-[60px]"src="GOAT/public/ca.png" alt="" /></Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <FaShoppingCart className="text-2xl" />
      </div>
    </nav>
  );
};

export default Navbar;
