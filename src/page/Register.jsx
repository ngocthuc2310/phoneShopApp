import { Link, useNavigate } from "react-router-dom";
import "./style/styleRegister.css";
import { useRef } from "react";
import { signup } from "../linkPage/linkPage";

//=========== trang đăng ký user acount =====================================
export function Register() {
  const nv = useNavigate();
  const userList = useRef(
    JSON.parse(
      localStorage.getItem("users") ? localStorage.getItem("users") : "[]"
    )
  );
  const fullname = useRef("");
  const email = useRef("");
  const password = useRef("");
  const phone = useRef("");

  function evInput() {
    const user = {
      fullname: fullname.current.value,
      email: email.current.value,
      password: password.current.value,
      phone: phone.current.value,
    };
    // if (userList.current.findIndex((x) => x.email == user.email) >= 0)
    //   alert("❌ Signup fail! This email existed");
    // else {
    //   userList.current.push(user);
    //   localStorage.setItem("users", JSON.stringify(userList.current));
    //   alert("Sign up successful!");
    //   nv("/phoneshop2024/login");
    // }
    fetch(signup, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((x) => x.json())
      .then((y) => {
        alert(y.msg);
      })
      .catch((er) => console.log(er));
  }

  return (
    <div className="register">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          evInput();
        }}
      >
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" ref={fullname} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={email} required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={password}
            minLength={9}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" ref={phone} required />
        </div>
        <button type="submit">SIGN UP</button>
        <div>
          Login? <Link to={"/clientapp/login"}>Click</Link>{" "}
        </div>
      </form>
    </div>
  );
}
