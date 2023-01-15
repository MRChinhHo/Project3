import classes from "./OtherInformation.module.css";
const OtherInformation = () => {
  return (
    <div className={classes.item}>
      <div className={classes.item1}>
        <div className={classes.col}>
          <div>
            <h3 className={classes.col1}>FREE SHIPPING</h3>
            <p className={classes.col2}>Free shipping worlwide</p>
          </div>
          <div>
            <h3 className={classes.col1}>24X7 SERVICE</h3>
            <p className={classes.col2}>Free shipping worlwide</p>
          </div>
          <div>
            <h3 className={classes.col1}>FRSTIVAL OFFER</h3>
            <p className={classes.col2}>Free shipping worlwide</p>
          </div>
        </div>
      </div>
      <div className={classes.item2}>
        <div>
          <h3 className={classes.col5}>LET'S BE FRIENDS!</h3>
          <p className={classes.col6}>
            Nisi nisi tempor consequat laboris nisi
          </p>
        </div>
        <div className={classes.col3}>
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};
export default OtherInformation;
