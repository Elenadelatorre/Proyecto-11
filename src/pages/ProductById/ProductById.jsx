import React, { useState, useEffect } from 'react';
import './ProductById.css';
import { useParams } from 'react-router-dom';
const ProductById = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products/' + id)
      .then((response) => response.json())
      .then((response) => setProduct(response));
  }, []);

  return (
    <div className='teams'>
      {product && (
        <div className='modal-content'>
          <h2>{product.title}</h2>
          <img
            className='team-logo'
            src={product.images[0].replace(/[\[\]\"\\]/g, '')}
            alt={product.title}
          />
          <p>{product.description}</p>
          <p style={{ fontWeight: 'bold' }}>Category: {product.category.name}</p>
          <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Price:{product.price + '€'}</p>
        </div>
      )}
    </div>
  );
};

export default ProductById;
