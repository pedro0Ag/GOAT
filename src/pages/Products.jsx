import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'X3 Controlador', description: 'Controle Bluetooth Para Jogos Sem fio', price: 'R$80', image: 'GOAT/public/product1.jpg' },
  { id: 2, name: 'Lenovo-LP5 TWS', description: 'Fone De Ouvido Bluetooth', price:'R$80' , image: 'GOAT/public/product2.jpg' },
  { id: 3, name: 'Smartwatch S100 Ultra', description: 'Amoled Vem Com Estojo Contendo 7 Pulseiras', price: 'R$160', image: 'GOAT/public/product3.jpg ' },
];

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
