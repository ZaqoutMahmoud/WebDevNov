import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, redirect = "/", children }) => {
  if (user.username !== "admin" || user.password !== "123456") {
    return <Navigate to={redirect} />;
    // false
  }
  console.log(user, "this is protected route");
  return children;
};

export default ProtectedRoute;
