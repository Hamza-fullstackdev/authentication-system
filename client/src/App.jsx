import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AuthRoute from "./auth/AuthRoute";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route element={<AuthRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
