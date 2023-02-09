import { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    //goi ham con
    <Fragment>
      <Navbar />
      <main className={classes.main}>{props.children}</main>

      <Footer />
    </Fragment>
  );
};
export default Layout;
