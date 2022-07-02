import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartIsShown = useSelector((state) => state.ui.cartIsShown);

  return (
    <Layout>
      {cartIsShown && <Cart />}
      <Routes>
        <Route path="/" element={<Navigate replace to="/welcome" />} />
        <Route path="/welcome" element={<HomePage />} />
        <Route path="/auth" element={!isLoggedIn && <AuthPage />} />
        <Route path="/products" element={isLoggedIn && <ProductsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
