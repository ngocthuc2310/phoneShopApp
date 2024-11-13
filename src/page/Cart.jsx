import "./style/styleCart.css";
import {
  IconBack,
  IconNext,
  IconTrash,
  IconLeft,
  IconRight,
  IconGift,
} from "../icon/icon3";
import { Link, useNavigate } from "react-router-dom";
import { Dispath, useStore } from "../useHook/useStore";

//============ trang giỏ hàng =================================================
export function Cart() {
  const { selectState } = useStore((x) => x.cart);
  const nv = useNavigate();
  return (
    <>
      <div className="banner2">
        <span style={{ fontSize: "25px", fontWeight: "500" }}>CART</span>
        <span style={{ color: "#666" }}>CART</span>
      </div>
      <h3>SHOPPING CART</h3>
      <div className="body">
        <div className="product-cart">
          <div>
            <span>IMAGE</span>
            <span>PRODUCT</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>TOTAL</span>
            <span>REMOVE</span>
          </div>
          {selectState.cartProducts.length <= 0 && (
            <h1
              style={{ color: "#ddd", fontStyle: "italic", fontWeight: "200" }}
            >
              None product in the cart
            </h1>
          )}
          <div className="list-cart">
            {selectState.cartProducts.map((x) => (
              <ItemCart {...x} />
            ))}
          </div>
          <div className="exit">
            <Link to={"/clientapp/shop"}>
              <IconLeft />
              <span>Continue shopping</span>
            </Link>
            <Link to={"/clientapp/checkout"} className="tt">
              <span>Proceed to checkout</span>
              <IconRight />
            </Link>
          </div>
        </div>
        <div className="total-cart">
          <h2>CART TOTAL</h2>
          <div className="subtotal">
            <span>SUBTOTAL</span>
            <span style={{ color: "#666" }}>
              {String(selectState.cartTotal).replace(
                /(.)(?=(\d{3})+$)/g,
                "$1,"
              )}{" "}
              VND
            </span>
          </div>
          <div className="total">
            <span>TOTAL</span>
            <span>
              {String(selectState.cartTotal).replace(
                /(.)(?=(\d{3})+$)/g,
                "$1,"
              )}{" "}
              VND
            </span>
          </div>
          <div style={{ margin: "1rem 0" }} className="input">
            <input placeholder="Enter your coupon" type="text" />
            <button>
              <IconGift /> <span>Apply counpon</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

//============ phần list product có trong cart =====================================
function ItemCart(prop) {
  return (
    <>
      <img src={prop.image} alt="" />
      <span
        style={{
          display: "inline-block",
          height: "3rem",
          overflow: "hidden",
        }}
      >
        {prop.name}
      </span>
      <span>{String(prop.price).replace(/(.)(?=(\d{3})+$)/g, "$1,")} VND</span>
      <span className="quatity-edit">
        <IconBack
          onClick={() => {
            prop.quantity > 1 &&
              Dispath("editQuantity", { _id: prop._id, sohan: -1 });
            Dispath("setCartStorage");
          }}
        />
        <span>{prop.quantity}</span>
        <IconNext
          onClick={() => {
            Dispath("editQuantity", { _id: prop._id, sohan: 1 });
            Dispath("setCartStorage");
          }}
        />
      </span>
      <span>
        {String(prop.price * prop.quantity).replace(/(.)(?=(\d{3})+$)/g, "$1,")}{" "}
        VND
      </span>
      <span className="trash">
        <IconTrash
          onClick={() => {
            Dispath("deleteCartProduct", prop._id);
            Dispath("setCartStorage");
          }}
        />
      </span>
    </>
  );
}
