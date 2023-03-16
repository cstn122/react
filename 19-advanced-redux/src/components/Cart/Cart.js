import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const items = useSelector(state => state.cart.items);


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(eachItem =>
          <CartItem
            name={eachItem.name}
            id={eachItem.id}
            price={eachItem.price}
            quantity={eachItem.quantity}
            totalPrice={eachItem.totalPrice}
          />)}
      </ul>
    </Card>
  );
};

export default Cart;
