import { useParams } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import Input from "../Ul/Input";
import classes from "./DetailPage.module.css";
import CartContext from "../store/CartContext";
const DetailPage = () => {
  const cartCtx = useContext(CartContext);
  // lưu data vào context
  const AddToCart = (amount) => {
    cartCtx.addItem({
      id: datadetail._id.$oid,
      name: datadetail.name,
      amount: amount,
      price: datadetail.price,
      img: datadetail.img1,
    });
  };
  const [datadetail, setdatadetail] = useState({});
  const [data, setdata] = useState([]);
  const [datadetail1, setdatadetail1] = useState([]);
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const params = useParams();
  //xu ly
  useEffect(() => {
    if (params.detailId != undefined) {
      console.log("fetch: " + params.detailId);
      fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      )
        .then((res) => res.json())
        .then((items) => {
          setdata(items);
          var a = items.filter((item) => {
            return item._id.$oid == params.detailId;
          });
          if (a.length > 0) {
            setdatadetail(a[0]);
          }
          var b = items.filter((item) => {
            return (
              item.category == a[0].category && item._id.$oid !== a[0]._id.$oid
            );
          });
          if (a.length > 0) {
            setdatadetail1(b);
          }
        });
    }
  }, [params.detailId]);
  //sự kiện thêm sp vào giõ hàng
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    //một lần mua không quá 5 sp
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    AddToCart(enteredAmountNumber);
  };
  const priceformat = datadetail.price
    ? Number(datadetail.price).toLocaleString()
    : "";

  return (
    <div>
      <div className={classes.detail}>
        <div className={classes.dataimg}>
          <img key="1" src={datadetail.img1} />
          <img key="2" src={datadetail.img2} />
          <img key="3" src={datadetail.img3} />
          <img key="4" src={datadetail.img4} />
        </div>
        <div className={classes.dataimg1}>
          <img src={datadetail.img1} />
        </div>
        <div className={classes.title}>
          <h1 className={classes.title1}>{datadetail.name}</h1>
          <p className={classes.title2}>{priceformat} VND</p>
          <p className={classes.title3}>{datadetail.short_desc}</p>
          <p>
            CATEGORY:{" "}
            <span className={classes.title4}>{datadetail.category}</span>
          </p>
          <form className={classes.form} onSubmit={submitHandler}>
            <Input
              ref={amountInputRef}
              input={{
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1",
              }}
            />
            <button>Add to Cart</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
          </form>
        </div>
      </div>
      <div className={classes.title_description}>
        <p className={classes.description}>DESCRIPTION</p>
        <h3>PRODUCTS DESCRIPTION</h3>
        <p>{datadetail.long_desc}</p>
      </div>
      <div className={classes.relate}>
        <h3>RELATED PRODUCTS</h3>
        <div className={classes.relate_img}>
          {datadetail1?.map((item) => {
            return (
              <div>
                <img key={item._id.$oid} src={item.img1} />
                <h5>{item.name}</h5>
                <p>{priceformat} VND</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
