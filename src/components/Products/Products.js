import ProductItem from './ProductItem';

import classes from './Products.module.css';

const Products = () => {
  const DUMMY_PRODUCTS = [
    {
      id: 'p1',
      price: 6,
      title: 'My First Book',
      description: 'The first book I ever wrote',
    },
    {
      id: 'p2',
      price: 5,
      title: 'My Second Book',
      description: 'The Second book I ever wrote',
    },
    {
      id: 'p3',
      price: 9,
      title: 'My Third Book',
      description: 'The third book I ever wrote',
    },
    {
      id: 'p4',
      price: 30,
      title: 'My Forth Book',
      description: 'The forth book I ever wrote',
    },
    {
      id: 'p5',
      price: 20,
      title: 'My Fifth Book',
      description: 'The fifth book I ever wrote',
    },
    {
      id: 'p6',
      price: 10,
      title: 'My Sixth Book',
      description: 'The sixth book I ever wrote',
    },
    {
      id: 'p7',
      price: 10,
      title: 'My Seventh Book',
      description: 'The seventh book I ever wrote',
    },
    {
      id: 'p8',
      price: 10,
      title: 'My Eighth Book',
      description: 'The eighth book I ever wrote',
    },
  ];

  const products = DUMMY_PRODUCTS.map(product => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
    />
  ));

  return (
    <section className={classes.products}>
      <h1>Welcome to my Shopping app!</h1>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
