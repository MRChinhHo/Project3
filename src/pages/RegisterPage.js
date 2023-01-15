import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./RegisterPage.module.css";
const RegisterPage = () => {
  const navigate = useNavigate();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const phoneInputRef = useRef();

  //luu data xuong local
  let userArr = JSON.parse(localStorage.getItem("users")) || [];
  const savedataLocal = (data) => {
    localStorage.setItem("users", JSON.stringify(data));
  }; //lay data tu local
  const getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };
  //su kien submit
  const Submit = () => {
    //lay gia tri
    const nameInput = nameInputRef.current.value;
    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;
    const phoneInput = phoneInputRef.current.value;
    //setemail(emailInput)

    const validateForm = () => {
      let checked = true;
      for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].emailInput === emailInput) {
          alert("Email da ton tai");
          checked = false;
          break;
        }
      }
      //truong hop trong
      if (nameInput === "") {
        alert("Nhap Input");
        checked = false;
        return;
      }
      if (passwordInput === "") {
        alert("vui long nhap password");
        checked = false;
        return;
      }
      if (emailInput === "") {
        alert("vui long nhap email muon su dung");
        checked = false;
        return;
      }
      if (phoneInput === "") {
        alert("vui long nhap so dien thoat");
        checked = false;
        return;
      }
      //mat khau it hon 7 ky tu
      if (passwordInput.length < 7) {
        alert("nhat khau it nhat co 8 ky tu");
        checked = false;
        return;
      }
      return checked;
    };
    let validate = validateForm();
    if (validate) {
      userArr.push({ emailInput, nameInput, passwordInput, phoneInput });
      savedataLocal(userArr);
      //lam moi
      passwordInputRef.current.value = "";
      nameInputRef.current.value = "";
      emailInputRef.current.value = "";
      phoneInputRef.current.value = "";
      navigate("/login");
    }
  };
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: "url(/image/banner1.jpg)" }}
    >
      <div className={classes.item}>
        <h2 className={classes.item1}>Sign Up</h2>
        <input
          ref={nameInputRef}
          id="name"
          type="text"
          placeholder="Full name"
        />
        <input
          ref={emailInputRef}
          id="email"
          type="amail"
          placeholder="Email"
        />
        <input
          ref={passwordInputRef}
          id="password"
          type="password"
          placeholder="Password"
        />
        <input
          ref={phoneInputRef}
          id="phone"
          type="number"
          placeholder="Phone"
        />
        <button onClick={Submit}>SIGN UP</button>
        <p>
          Login? <a href="/login">Click</a>
        </p>
      </div>
    </div>
  );
};
export default RegisterPage;
