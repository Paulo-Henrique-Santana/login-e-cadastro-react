import React from "react";
import Login from "./Login";
import Registration from "./Registration";

const App = () => {
  const changeLogin = () => {
    setPage(pages.login);
  };

  const changeRegistration = () => {
    setPage(pages.registration);
  };

  const pages = {
    login: <Login key={"login"} changePage={changeRegistration} />,
    registration: (
      <Registration key={"registration"} changePage={changeLogin} />
    ),
  };

  const [page, setPage] = React.useState(pages.login);

  return <>{page}</>;
};

export default App;
