import React from "react";

const UserProfile = ({ goToLogin }) => {
  return (
    <div>
      <p>UserProfile</p>
      <a href="#" onClick={goToLogin}>
        Sair
      </a>
    </div>
  );
};

export default UserProfile;
