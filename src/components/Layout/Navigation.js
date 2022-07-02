import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';

import CartButton from '../Cart/CartButton';

import classes from './Navigation.module.css';

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [navOpen, setNavOpen] = useState(false);


  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate('/auth', { replace: true });
  };

  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <CartButton />
          </li>
        )}

        {isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}

        {!isLoggedIn && (
          <li>
            <Link to="/auth">
              <button>Login</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
