import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Firebase user check হওয়া পর্যন্ত অপেক্ষা করবে
  if (loading) {
    return <Loading />;
  }

  // Login না থাকলে Login page-এ পাঠাবে
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={location.pathname}
        replace
      />
    );
  }

  // Login থাকলে page দেখাবে
  return children;
};

export default PrivateRoute;