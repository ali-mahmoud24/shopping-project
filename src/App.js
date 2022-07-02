import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import ProductsPage from './pages/ProductsPage'
import NotFoundPage from './pages/NotFoundPage'
import useAuth from './hooks/use-auth'

const SignedInProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  if (isLoggedIn) {
    return <Navigate to="/" replace />
  }

  return children
}

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to="/auth" replace />
  }

  return children
}

function App() {
  useAuth()

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
  )
}

export default App
