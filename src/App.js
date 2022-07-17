import { Routes, Route, Navigate } from 'react-router-dom';

import { useAuthContext } from './context/auth-context';

import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';

import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';

// TODO ===>
// 1- Refactor the SignedInProtectedRoute and ProtectedRoute components to a seperate file
// 2- Style the 404 Not found page
// 3- Style the 'Start shopping' button in StartingPageContent component
// 4- Style the Products + ProductItem components better (problems with flexbox and aligning items better UI overall)
// 5- Resposive design
// 6- Add green border to inputs when inputs are valid

const SignedInProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuthContext();

  if (isLoggedIn) {
    return <Navigate to="/welcome" replace />;
  }
  return children;
};

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

const App = () => {
  return (
    <Layout>
      <Cart />
      <Routes>
        <Route path="/" element={<Navigate replace to="/welcome" />} />
        <Route path="/welcome" element={<HomePage />} />
        <Route
          path="/auth"
          element={
            <SignedInProtectedRoute>
              <AuthPage />
            </SignedInProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;