<<<<<<< HEAD
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState();

  const { id, title, description, price } = props;

  const addToCartHandler = () => {
    setIsLoading(true);
    dispatch(cartActions.addItemToCart({ id, title, price }));

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <li className={classes.item}>
      <Card className={classes.card}>
        <h3>{title}</h3>

        <p>{description}</p>

        <div className={classes.actions}>
          <div className={classes.price}>${price.toFixed(2)}</div>

          <button onClick={addToCartHandler} disabled={isLoading}>
            {isLoading ? <LoadingSpinner /> : 'Add to Cart'}
          </button>
        </div>

      </Card>
    </li>
  );
};

export default ProductItem;
=======
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState();

  const { id, title, description, price } = props;

  const addToCartHandler = () => {
    setIsLoading(true);
    dispatch(cartActions.addItemToCart({ id, title, price }));

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <li className={classes.item}>
      <Card className={classes.card}>
        <h3>{title}</h3>

        <p>{description}</p>

        <div className={classes.actions}>
          <div className={classes.price}>${price.toFixed(2)}</div>

          <button onClick={addToCartHandler} disabled={isLoading}>
            {isLoading ? <LoadingSpinner /> : 'Add to Cart'}
          </button>
        </div>

      </Card>
    </li>
  );
};

export default ProductItem;
>>>>>>> 7760c1b4d2de1acaffc77e3548ad0edc746d2589
