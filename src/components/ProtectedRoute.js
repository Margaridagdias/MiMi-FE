import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const ProtectedRoute = ({ authorized, redirect, ...props }) => {
  if (localStorage.getItem("loggedInUser")) {
    return <Route {...props} />;
  } else {
    return <Redirect to={redirect} />;
  }
};
export default ProtectedRoute;