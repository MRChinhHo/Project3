import { useState, useEffect } from "react";
import classes from "./ListProduct.module.css";
import Popup from "../popup/Popup";
//danh sach san pham
const ListProduct = () => {
  const [data, setData] = useState([]);
  const [datadetail, setDatadetail] = useState();
  const [popup, setPopup] = useState(false);

  //lay data
  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  //luu data cua san phan va show modul
  const handleClick = (item) => {
    setDatadetail(item);
    setPopup(true);
  };
  const CloseModel = () => {
    setPopup(false);
  };
  return (
    <div className={classes.conten1}>
      <div className={classes.title}>
        <p className={classes.title1}>MADE THE HARD WAY</p>
        <h3 className={classes.title2}>TOP TRENDING PRODUCTS</h3>
      </div>
      <div className={classes.items}>
        {data.map((item, index) => {
          return (
            <div key={index} className={classes.item}>
              <img src={item.img1} onClick={() => handleClick(item)} />
              <p className={classes.item1}>{item.name}</p>
              <p className={classes.item2}>
                {Number(item.price).toLocaleString()} VND
              </p>
            </div>
          );
        })}
      </div>
      {popup && <Popup data={datadetail} CloseModel={CloseModel} />}
    </div>
  );
};
export default ListProduct;
