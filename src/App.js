import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import UserProfile from "./Pages/UserProfile/UserProfile";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import NotFound from "./Pages/NotFound";
import { GlobalStyle } from "./style_global";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
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
