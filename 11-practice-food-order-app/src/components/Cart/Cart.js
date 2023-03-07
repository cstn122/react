import React from 'react';
import classes from './Cart.module.css';
import Modal from '../../UI/Modal';
import CartItem from '../Cart/CartItem';

const Cart = (props) => {
  return (
    <Modal className={classes['cart-items']}>
      <CartItem />
      <p className={classes.total}>Total Amount ${props.total}</p>
      <div className={classes.actions}>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;