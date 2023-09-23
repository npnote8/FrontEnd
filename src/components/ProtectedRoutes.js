import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
import { Context } from "../App";

const cookies = new Cookies();

// The ProtectedRoutes component receives a component and then decides if the component should be returned to the user or not

// it checks if there is a valid token (token is set upon a successful login) coming from the cookie. If the token is undefined, then it redirects to the default path (the landing page in this case)

// receives component and any other props represented by ...rest
export default function ProtectedRoutes({ children }) {
  const { user } = useContext(Context);

  console.log("user", JSON.stringify(user));

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
  return;

  // this route takes other routes assigned to it from the App.js and return the same route if condition is met
}
