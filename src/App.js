import React from "react";
import Login from "./Login";
import Registration from "./Registration";
import UserProfile from "./UserProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import ChangePassword from "./ChangePassword";

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
