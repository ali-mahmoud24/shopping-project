<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom';

import { logout } from '../../firebase/firebase-auth';
import { useAuthContext } from '../../context/auth-context';

import CartButton from '../Cart/CartButton';

import classes from './Navigation.module.css';

const Navigation = () => {
  const { logout: logoutCtx, isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logout();
      logoutCtx();

      navigate('/auth', { replace: true });
    } catch (error) {
      const errorCode = error.code;
      alert(errorCode);
    }
  };

  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <>
            <li>
              <CartButton />
            </li>

            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </>
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
=======
import { Link, useNavigate } from 'react-router-dom';

import { logout } from '../../firebase/firebase-auth';
import { useAuthContext } from '../../context/auth-context';

import CartButton from '../Cart/CartButton';

import classes from './Navigation.module.css';

const Navigation = () => {
  const { logout: logoutCtx, isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logout();
      logoutCtx();

      navigate('/auth', { replace: true });
    } catch (error) {
      const errorCode = error.code;
      alert(errorCode);
    }
  };

  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <>
            <li>
              <CartButton />
            </li>

            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </>
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
>>>>>>> 7760c1b4d2de1acaffc77e3548ad0edc746d2589
