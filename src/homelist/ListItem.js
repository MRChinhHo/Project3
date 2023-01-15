import classes from "./ListItem.module.css";
import { Link } from "react-router-dom";
//danh sach muc
const ListItem = (prop) => {
  return (
    <div className={classes.conten}>
      <div className={classes.text}>
        <h5 className={classes.text1}>CAREFULLY CREATED COLLECTIONS</h5>
        <h3 className={classes.text2}>BROWSE OUR CATEGORIES</h3>
      </div>
      <div className={classes.img_container}>
        <div className={classes.img1}>
          <Link to="/shop">
            <img className={classes.imgitem} src="./image/product_1.png" />
          </Link>
          <Link to="/shop">
            <img className={classes.imgitem} src="./image/product_2.png" />
          </Link>
        </div>
        <div className={classes.img2}>
          <Link to="/shop">
            <img className={classes.imgitem} src="./image/product_3.png" />
          </Link>
          <Link to="/shop">
            <img className={classes.imgitem} src="./image/product_4.png" />
          </Link>
          <Link to="/shop">
            <img className={classes.imgitem} src="./image/product_5.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
