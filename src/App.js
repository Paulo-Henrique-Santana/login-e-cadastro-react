import React from "react";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import UserProfile from "./Components/UserProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import ChangePassword from "./Components/ChangePassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="userProfile" element={<UserProfile />} />
        <Route path="changePassword" element={<ChangePassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
