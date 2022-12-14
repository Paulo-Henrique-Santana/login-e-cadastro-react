import React from "react";

const useMsg = () => {
  const [msg, setMsg] = React.useState("");
  const [error, setError] = React.useState("");

  const addMsg = (msg) => {
    setMsg(msg);
    setTimeout(() => setMsg(""), 3000);
  };

  const addError = (error) => {
    setError(error);
    setTimeout(() => setError(""), 3000);
  };

  return [msg, addMsg, error, addError];
};

export default useMsg;
