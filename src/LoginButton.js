import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import MyFavoriteBooks from "./MyFavoriteBooks";
import Button from 'react-bootstrap/Button'
const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return  isAuthenticated &&
  (<Button onClick={() => loginWithRedirect()} variant="secondary">Log In</Button>);
  

};

export default LoginButton;
