import React, { useContext, useEffect } from 'react';
import { CartItemsContext } from '../../CartItemsContext';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartItems = useContext(CartItemsContext);
  let cartCount = 0;

  cartItems.map(item => {
    cartCount += Number(item.amount)
  });

  const cartHandler = () => {
    props.onShowCart(true);
  };

  return (
    <button className={classes.button} onClick={cartHandler}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </ button >
  );
};

export default HeaderCartButton;