import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  return <div>{currentUser ? <Outlet /> : <Navigate to='/login' />}</div>;
};

export default AuthRoute;
