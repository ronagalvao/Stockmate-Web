import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/UseAuth';
import Login from 'feature/auth/Login/LoginPage';

export function LoginPage() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/home');
  };

  if (user) {
    return <Route to="/" />;
  }

  return (
    <div>
      <Login setUser={setUser} onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}
