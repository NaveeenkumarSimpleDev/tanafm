import React, { useState, useContext } from "react";
import context from "../../../Context/Context";

const OwnerId = import.meta.env.VITE_APP_USER_NAME;
const OwnerPass = import.meta.env.VITE_APP_PASSWORD;

const Login = () => {
  const ctx = useContext(context);
  const [userId, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const userIdChangeHandler = (e) => {
    setUserID(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginOwner = (e) => {
    e.preventDefault();

    if (userId === OwnerId && password === OwnerPass) {
      alert("login");
      localStorage.setItem("OWNER_LOGIN", "1");
      window.open("/");
    }
  };
  return (
    <div>
      <form onSubmit={loginOwner}>
        <div>
          <label htmlFor="userid">User</label>
          <input
            type="text"
            name="userid"
            className="userid"
            onChange={(e) => userIdChangeHandler(e)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            type="text"
            name="password"
            className="password"
            onChange={(e) => passwordChangeHandler(e)}
          />
        </div>
        <button>Login</button>
        {ctx.ownerLogin && <h1>Hii welcom</h1>}
      </form>
    </div>
  );
};

export default Login;
