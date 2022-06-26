import React from 'react';
import Product from '../components/Product';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <div>
        <img className="top-img" src="/images/m1.jpg" alt="top-img"></img>
      </div>
      <div>
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
