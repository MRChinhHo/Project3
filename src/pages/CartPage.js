import { useContext } from "react";
import CartContext from "../store/CartContext";
import { Link } from "react-router-dom";
import classes from "./CartPage.module.css";
const CartPage = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);
  // xoa 1 món
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  // them item
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  // xóa món hàng đó
  const RemoveHandler = (id) => {
    cartCtx.remove(id);
  };
  return (
    <div>
      <div className={classes.shop}>
        <h2>CART</h2>
        <p>CART</p>
      </div>
      <h3>SHOPPING CART</h3>
      <div className={classes.list}>
        <div className={classes.itemList}>
          <h2 className={classes.itemList1}>IMAGE</h2>
          <h2 className={classes.itemList1}>PRODUCT</h2>
          <h2 className={classes.itemList1}>PRICE</h2>
          <h2 className={classes.itemList1}>QUANTITY</h2>
          <h2 className={classes.itemList1}>TOTAL</h2>
          <h2 className={classes.itemList1}>REMOVE</h2>

          {cartCtx.items.map((item) => {
            // xu ly tien Number(item.price).toLocaleString()
            return (
              <>
                <img src={item.img}></img>
                <h6>{item.name}</h6>
                <p className={classes.amount11}>
                  {Number(item.price).toLocaleString()} VND
                </p>
                <div className={classes.arrow}>
                  <svg
                    onClick={cartItemRemoveHandler.bind(null, item.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                    />
                  </svg>
                  <p>{item.amount}</p>
                  <svg
                    onClick={cartItemAddHandler.bind(null, item)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
                <p className={classes.amount11}>
                  {Number(item.amount * item.price).toLocaleString()} VND
                </p>
                <svg
                  onClick={RemoveHandler.bind(null, item.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </>
            );
          })}
        </div>
        <div className={classes.cart_total}>
          <h3>CART TOTAL</h3>

          <div className={classes.amount1}>
            <h4>SUBTOTAL</h4>
            <p className={classes.amount11}>
              {Number(cartCtx.totalAmount).toLocaleString()} VND
            </p>
          </div>
          <div className={classes.amount2}>
            <h4>TOTAL</h4>
            <p className={classes.amount22}>
              {Number(cartCtx.totalAmount).toLocaleString()} VND
            </p>
          </div>
          <input placeholder="Enter your coupon"></input>
          <button>
            <i class="fa-solid fa-gift"></i> Apply Coupon
          </button>
        </div>
      </div>
      <div className={classes.link}>
        <Link className={classes.linkShop} to="/shop">
          <svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span>Continue shopping</span>
        </Link>
        <Link className={classes.linkCheckout} to="/checkout">
          Proceed to checkout
          <svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
export default CartPage;
