import { useRef, useState } from "react";
import classes from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // nhap email
  const navigate = useNavigate();
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const emailInputRef = useRef();
  const [phone, setphone] = useState("");
  const passwordInputRef = useRef();
  const [data, setdata] = useState([]);
  const phoneInputRef = useRef();
  const nameInputRef = useRef();
  //luu data xuong local
  let userArr = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = JSON.parse(localStorage.getItem("current")) || {};
  const savedataLocal = (data) => {
    localStorage.setItem("current", JSON.stringify(data));
  };
  //lay data tu local
  const getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };
  // bac su kien
  const Submit = () => {
    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;

    const validateForm = () => {
      let checked = false;
      //check input
      if (emailInput === "") {
        alert("nhap Email");
        checked = false;
        return;
      }
      if (passwordInput === "") {
        alert("nhap password");
        checked = false;
        return;
      }
      for (let i = 0; i < userArr.length; i++) {
        //dieu kien
        if (
          emailInput == userArr[i].emailInput &&
          passwordInput == userArr[i].passwordInput
        ) {
          currentUser.name = userArr[i].nameInput;
          checked = true;
          return checked;
        }
      }
      alert("Incorrect username or password");
      return checked;
    };
    let validate = validateForm();
    //luu gia tri
    if (validate) {
      currentUser.email = emailInput;
      currentUser.password = passwordInput;
      setdata(currentUser);
      savedataLocal(currentUser);
      //lam moi input
      passwordInputRef.current.value = "";
      emailInputRef.current.value = "";
      navigate("/");
    } else {
      passwordInputRef.current.value = "";
    }
  };
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: "url(/image/banner1.jpg)" }}
    >
      <div className={classes.item}>
        <h2 className={classes.item1}>Sign In</h2>
        <input
          ref={emailInputRef}
          id="email"
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordInputRef}
          id="password"
          type="password"
          placeholder="Password"
        />
        <button onClick={Submit}>SIGN IN</button>
        <p>
          Create an account?<a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
