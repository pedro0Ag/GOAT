import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Bem-vindo à GOAT</h1>
      <p className="mt-4">Explore nossos produtos incríveis!</p>
      <h2 className='text-blue-500 text-xl'>
        <Link to="/products" className="hover:underline">AQUI!!!</Link>
      </h2>
    </div>
  );
};

export default Home;
