// // AuthRoute.js
// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// const AuthRoute = ({ children, ...props }) => {
//   const isLoggedIn = !!localStorage.getItem("accessToken");

//   return isLoggedIn ? (
//     <Route {...props}>{children}</Route>
//   ) : (
//     <Navigate to="/login" />
//   );
// };

// export default AuthRoute;
