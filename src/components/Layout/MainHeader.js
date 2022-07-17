<<<<<<< HEAD
import { Link } from 'react-router-dom';

import Navigation from './Navigation';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>
        <Link to="/welcome">Shopping App</Link>
      </h1>

      <Navigation />
    </header>
  );
};

export default MainHeader;
=======
import { Link } from 'react-router-dom';

import Navigation from './Navigation';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>
        <Link to="/welcome">Shopping App</Link>
      </h1>

      <Navigation />
    </header>
  );
};

export default MainHeader;
>>>>>>> 7760c1b4d2de1acaffc77e3548ad0edc746d2589
