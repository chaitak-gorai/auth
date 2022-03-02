import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import Dashboard from './Dashboard';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const location = useLocation();

  if (currentUser !== undefined) {
    if (!currentUser) {
      return <Navigate to='/login' state={{ from: location }} replace />;
    }
    return children;
  } else {
    return <div>loading</div>;
  }
};

export default PrivateRoute;
