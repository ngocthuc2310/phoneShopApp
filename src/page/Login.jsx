import { Link, useNavigate } from "react-router-dom";
import "./style/styleLogin.css";
import { useRef, useState } from "react";
import { Dispath } from "../useHook/useStore";
import { login } from "../linkPage/linkPage";

//========= Trang Login ========================================================
export function Login() {
  const nv = useNavigate();
  const email = useRef("");
  const password = useRef("");

  function evLogin() {
    const logg = {
      email: email.current.value,
      password: password.current.value,
    };
    fetch(login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logg),
    })
      .then((x) => x.json())
      .then((y) => {
        Dispath("login", y.user);
        nv("/clientapp");
      })
      .catch((er) => console.log(er));
  }

  return (
    <div className="login">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          evLogin();
        }}
      >
        <h1>Sign In</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" ref={email} required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={password} required />
        </div>
        <button type="submit">SIGN IN</button>
        <div>
          Creat an account? <Link to={"/clientapp/register"}>Sign up</Link>
        </div>
      </form>
    </div>
  );
}
