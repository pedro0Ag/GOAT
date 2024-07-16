import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'X3 Controlador', description: '** NAO VEM SUPORTE PARA CELULAR ** Este controlador Bluetooth é compatível com todos os tipos de simuladores e jogos. O mais importante é que ele suporta configurações de combate duplas. Ele pode suportar jogos de plataforma Android e alguns jogos clássicos que são familiares.',  price: 'R$80', image: 'GOAT/public/product1.jpg' },
  { id: 2, name: 'Lenovo-LP5 TWS', description: 'Fone De Ouvido Lenovo Lp5 Livepods Cor Cinza Bluetooth Tws Os fones de ouvido Lenovo LP5 LivePods são uma excelente escolha para quem valoriza uma conexão sem fio estável e de alta qualidade. Com o chip BT 5.1, esses fones oferecem uma conexão rápida e confiável, com baixa latência, garantindo uma experiência sem interrupções.', price: 'R$80', image: 'GOAT/public/product2.jpg' },
  { id: 3, name: 'Smartwatch S100 Ultra', description: 'O Smartwatch S100 Ultra Amoled Estojo 7 Pulseiras é o acessório perfeito para quem busca praticidade e tecnologia em um único dispositivo. Com homologação Anatel, você pode ter a certeza de um produto de qualidade e segurança garantida. Com memória interna de 128 MB e memória RAM de 128 MB, você terá espaço suficiente para armazenar seus dados e aplicativos favoritos.', price: 'R$160', image: 'GOAT/public/product3.jpg' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id == id);

  return (
    <div className="p-10">
      {product ? (
        <div className="flex flex-col items-center">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <span className="text-green-600 font-bold mt-2">{product.price}</span>
      <a className='text-white bg-blue-600 mt-8 border rounded'
      href="https://wa.me/5585994510659?text=Olá  Bem-vindo à GOAT! 
Confirme seu pedido!
Produto: [Smartwatch S100 Ultra Amoled Estojo 7 Pulseiras]
Valor: R$ 160,00.     
Para concluir sua compra, realize o pagamento via PIX utilizando a chave: xxx-xxx-xxx-xx.   
Agradecemos pela preferência e estamos ansiosos para entregar seu pedido!
Equipe GOAT"
 >Comprar</a>
        </div>
      ) : (
        <p>Produto não encontrado </p>
      )}
    </div>
  );
};

export default ProductDetails;
