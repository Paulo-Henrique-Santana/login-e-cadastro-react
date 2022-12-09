import React from "react";
import Login from "./Login";
import Registration from "./Registration";
import UserProfile from "./UserProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="userProfile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
