import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

import Card from '../UI/Card'

import classes from './ProductItem.module.css'

const ProductItem = props => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState()

  const { id, title, description, price } = props

  const addToCartHandler = () => {
    setIsLoading(true)
    dispatch(cartActions.addItemToCart({ id, title, price }))
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  return (
    <li className={classes.item}>
      <Card className={classes.card}>
        <h3>{title}</h3>

        <p>{description}</p>

        <div className={classes.actions}>
          <div className={classes.price}>${price.toFixed(2)}</div>
          <button onClick={addToCartHandler}>{isLoading ? '.....' : 'Add to Cart'}</button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem
