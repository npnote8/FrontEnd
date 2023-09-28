import { createContext, useContext, useState } from "react";
import axios from "axios";
import RenderNavigationNew from "./RenderNavigationNew";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const login = (userInformation) => {
    const configuration = {
      method: "post",
      url: "http://localhost:5000/api/v1/auth/login",

      data: userInformation,
    };

    axios(configuration)
      .then((result) => {
        console.log("user", result.data.user);
        console.log("token", result.data.token);
        console.log("response", result);
        setUser(result.data.user);
        console.log("result", result);
        localStorage.setItem("token", result.data.token);
        setToken(result.data.token);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, token }}>
      <>
        <RenderNavigationNew />
      </>
    </AuthContext.Provider>
  );
};
