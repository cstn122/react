import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  const dummyCartCount = 5;

  return (
    <button className={classes.button}>
      <CartIcon className={classes.icon} />
      <p>Your Cart</p>
      <div className={classes.badge}>
        {dummyCartCount}
      </div>
    </ button>
  );
};

export default HeaderCartButton;