import React, { Fragment, useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import style from "./App.module.css";
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/AuthComponent";
import Meals from "./components/Meals";
import ProtectedRoutes from "./components/ProtectedRoutes";

export const Context = React.createContext({
  user: null,
  updateUser: () => {},
});

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Context.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/free" element={<FreeComponent />} />

          <Route element={<ProtectedRoutes user={user} />}>
            <Route path="/auth" element={<AuthComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
