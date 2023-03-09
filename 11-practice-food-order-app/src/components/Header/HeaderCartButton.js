import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const CartCount = 5;

  const cartHandler = () => {
    props.onShowCart(true);
  };

  return (
    <button className={classes.button} onClick={cartHandler}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{CartCount}</span>
    </ button >
  );
};

export default HeaderCartButton;