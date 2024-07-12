import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <span className="text-green-600 font-bold">{product.price}</span>
      <Link to={`/products/${product.id}`} className="block mt-4 text-blue-500 hover:underline">Ver Detalhes</Link>
       <a className='text-blue-600 mt-9 '
      href="https://wa.me/5585994510659?text=Olá  Bem-vindo à GOAT! 
Confirme seu pedido!
Produto: [Smartwatch S100 Ultra Amoled Estojo 7 Pulseiras]
Valor: R$ 160,00.     
Para concluir sua compra, realize o pagamento via PIX utilizando a chave: xxx-xxx-xxx-xx.   
Agradecemos pela preferência e estamos ansiosos para entregar seu pedido!
Equipe GOAT"
 >Comprar</a>
    </div>
  );
};

export default ProductCard;
