import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // lay du lieu tu local nếu k có thì {}
  const currentUser = JSON.parse(localStorage.getItem("current")) || {};
  console.log(currentUser.name);
  const onLogout = () => {
    // xóa data local
    localStorage.removeItem("current");
    navigate("/");
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.titles}>
        <NavLink to="/" className={classes.title}>
          Home
        </NavLink>
        <NavLink to="/shop" className={classes.title}>
          Shop
        </NavLink>
      </div>
      <div>
        <h1 className={classes.h1}>BOUTIQUE</h1>
      </div>
      <div className={classes.titles}>
        <NavLink to="./cart" className={classes.title}>
          <i class="fa-solid fa-cart-flatbed"></i>
          Cart
        </NavLink>
        {currentUser.name ? (
          <>
            <p className={classes.title}>{currentUser.name}</p>
            <button onClick={onLogout}>(Log Out)</button>
          </>
        ) : (
          <NavLink to="./login" className={classes.title}>
            <i class="fa-solid fa-user"></i>
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};
export default Navbar;
