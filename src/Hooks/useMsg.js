import React from "react";

const useMsg = () => {
  const [msg, setMsg] = React.useState(localStorage.getItem("msg") || "");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    localStorage.removeItem("msg");
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setMsg("");
      setError("");
    }, 3000);
  }, [msg, error]);

  return { msg, setMsg, error, setError };
};

export default useMsg;
