import React, { useEffect, useState } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);
  return (
    <div className='teams'>
      <div className='teams-cards'>
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            className='team-card'
            key={product.id}
          >
            <img
              className='team-logo'
              src={product.images[0].replace(/[\[\]\"\\]/g, '')}
              alt={product.title}
            />
            <p>{product.price + '€'}</p>
            <h2 className='team-name'>{product.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
