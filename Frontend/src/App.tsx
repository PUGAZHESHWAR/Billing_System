import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './components/LoginForm';
import AdminDashboard from './pages/AdminDashboard';
import StaffDashboard from './pages/StaffDashboard';

const AppRouter: React.FC = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={user ? <Navigate to={`/${user.role}`} replace /> : <LoginForm />} 
        />
        
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/staff"
          element={
            <ProtectedRoute requiredRole="staff">
              <StaffDashboard />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/"
          element={
            user ? (
              <Navigate to={`/${user.role}`} replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;