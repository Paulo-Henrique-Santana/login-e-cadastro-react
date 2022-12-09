import React from "react";
import { Link } from "react-router-dom";

const UserProfile = ({ goToLogin }) => {
  return (
    <div>
      <p>UserProfile</p>
      <Link to="/">Sair</Link>
    </div>
  );
};

export default UserProfile;
