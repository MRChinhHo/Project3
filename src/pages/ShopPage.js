import { useEffect, useState } from "react";
import classes from "./ShopPage.module.css";
import { Link } from "react-router-dom";
const ShopPage = () => {
  const [dataSlect, setDataSlect] = useState("All");
  const [dataClick, setDataClick] = useState([]);
  //su ly du lieu data
  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((res) => res.json())
      .then((data) => {
        //chon tat ca sp
        if (dataSlect === "All") {
          setDataClick(data);
        } else {
          //chon sp muon xem
          setDataClick(
            data.filter((item) => {
              return item.category === dataSlect;
            })
          );
        }
      });
  }, [dataSlect]);
  const Click = (e) => {
    setDataSlect(e.target.innerText);
  };
  return (
    <div>
      <div className={classes.shop}>
        <h2>SHOP</h2>
        <p>SHOP</p>
      </div>
      <div className={classes.container}>
        <div>
          <h3>CATEGORIES</h3>
          <h5 className={classes.title1}>APPLE</h5>
          <ul>
            <li>
              <a href="#" onClick={Click}>
                All
              </a>
            </li>
          </ul>
          <h5 className={classes.title2}>IPHONE & MAC</h5>
          <ul>
            <li onClick={Click}>
              <a href="#">iphone</a>
            </li>

            <li onClick={Click}>
              <a href="#">ipad</a>
            </li>
            <li onClick={Click}>
              <a href="#">macbook</a>
            </li>
          </ul>
          <h5 className={classes.title4}>WIRELESS</h5>
          <ul>
            <li onClick={Click}>
              <a href="#">airpod</a>
            </li>
            <li onClick={Click}>
              <a href="#">watch</a>
            </li>
          </ul>
          <h5 className={classes.title3}>OTHER</h5>
          <ul>
            <li onClick={Click}>
              <a href="#">KeyBoard</a>
            </li>
            <li onClick={Click}>
              <a href="#">Other</a>
            </li>
          </ul>
        </div>

        <div className={classes.imgList}>
          {dataClick?.map((item, index) => {
            return (
              <div key={index} className={classes.item}>
                <Link to={`/detail/${item._id.$oid}`}>
                  <img src={item.img1} id={item._id.$oid} />
                </Link>
                <p>{item.name}</p>
                <p className={classes.money}>
                  {Number(item.price).toLocaleString()} VND
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ShopPage;
