import React from 'react';

import './styles/CartWidget.css';

export const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="bi bi-cart2"></i>
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;
