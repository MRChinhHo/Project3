import CartContext from "../store/CartContext";
import { useContext } from "react";
import classes from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      <div className={classes.checkout}>
        <h2>CHECKOUT</h2>
        <p>
          HOME / CART / <span>CHECKOUT</span>
        </p>
      </div>
      <h2>BILLING DETAILS</h2>
      <div className={classes.infomation}>
        <div>
          <h3>FULL NAME:</h3>
          <input placeholder="Enter you full name here"></input>
          <h3>EMAIL:</h3>
          <input placeholder="Enter your email here"></input>
          <h3>PHONE NUMBER:</h3>
          <input placeholder="Enter your phone number here"></input>
          <h3>ADDRESS:</h3>
          <input placeholder="Enter your address here"></input>
          <button>Place order</button>
        </div>
        <div>
          <div className={classes.cart_total}>
            <h3>YOUR ORDER</h3>
            {cartCtx.items.map((item) => {
              return (
                <div className={classes.item}>
                  <p>{item.name}</p>
                  <p className={classes.item1}>
                    {Number(item.price).toLocaleString()} VND x {item.amount}
                  </p>
                </div>
              );
            })}
            <div className={classes.totalAmount}>
              <h3>TOTAL</h3>
              <p>{Number(cartCtx.totalAmount).toLocaleString()} VND</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
