import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../hooks/UseAuth';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
  isPrivate: boolean;
}

const PrivateRoute = ({ path, element }: PrivateRouteProps) => {
  const user = useAuth();

  return user ? <Route path={path} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
