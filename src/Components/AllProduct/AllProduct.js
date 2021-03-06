import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import useProduct from '../../hooks/useProduct';
import Product from '../Product/Product';

const AllProduct = () => {
  useEffect(() => {
    document.title = 'Products -CareFast';
  }, []);

  const products = useProduct();
  return (
    <div className="container">
      <h3 className="fw-bold mt-3 mb-4">All Fitness Products</h3>

      <div>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 bg-white rounded-3">
          {products.map(product => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AllProduct;
