import React from "react";
import Login from "./Login";
import Registration from "./Registration";
import UserProfile from "./UserProfile";

const App = () => {
  const pages = {
    login: (
      <Login
        goToRegistration={() => setPage(pages.registration)}
        goToUserProfile={() => setPage(pages.userProfile)}
      />
    ),
    registration: <Registration goToLogin={() => setPage(pages.login)} />,
    userProfile: <UserProfile goToLogin={() => setPage(pages.login)} />,
  };

  const [page, setPage] = React.useState(pages.login);

  return <>{page}</>;
};

export default App;
