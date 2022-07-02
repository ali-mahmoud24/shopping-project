import { NavLink } from 'react-router-dom';

import Navigation from './Navigation';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      {/* <NavLink to="/welcome"> */}
        <h1>Shopping App</h1>
      {/* </NavLink> */}
      <Navigation />
    </header>
  );
};

export default MainHeader;
