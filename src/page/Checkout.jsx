import { useEffect, useRef } from "react";
import "./style/styleCheckout.css";
import { useStore, Dispath } from "../useHook/useStore";
import { useNavigate } from "react-router-dom";
import { addorder } from "../linkPage/linkPage";

//============= trang check out ============================================
export function Checkout() {
  const { selectState } = useStore((x) => x);
  const nv = useNavigate();
  const refAddress = useRef("");

  useEffect(() => {
    if (!selectState.loged) {
      nv("/clientapp/login");
    }
  }, []);
  console.log("gggggg", selectState);

  function evSubmit() {
    const obj = {
      user: selectState.loged,
      products: selectState.cart.cartProducts,
      total: selectState.cart.cartTotal,
      address: refAddress.current.value,
    };
    fetch(addorder, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((x) => x.json())
      .then((y) => {
        alert(y.msg);
      })
      .catch((er) => console.log(er));
  }

  return (
    <>
      <div className="banner2">
        <span style={{ fontSize: "25px", fontWeight: "500" }}>CHECKOUT</span>
        <span style={{ color: "#666" }}>
          <span style={{ color: "black" }}> HOME / CART /</span> CHECKOUT
        </span>
      </div>
      <h3>BILLING DETAILS</h3>
      <div className="body">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (selectState.cart.cartProducts.length <= 0)
              alert("❌ Order faile! You don't select on a product! ");
            else {
              evSubmit();
              Dispath("clearCart");
              nv("/clientapp");
            }
          }}
        >
          <label htmlFor="">FULL NAME</label>
          <input
            type="text"
            placeholder="Enter your Full Name here!"
            value={selectState.loged && selectState.loged.fullname}
            required
          />
          <label htmlFor="">EMAIL</label>
          <input
            type="text"
            placeholder="Enter your Email here!"
            value={selectState.loged && selectState.loged.email}
            required
          />
          <label htmlFor="">PHONE NUMBER</label>
          <input
            type="text"
            placeholder="Enter your Phone Number here!"
            value={selectState.loged && selectState.loged.phone}
            required
          />
          <label htmlFor="">ADDRESS</label>
          <input
            type="text"
            placeholder="Enter your Address here!"
            required
            ref={refAddress}
          />
          <button type="submit">Place order</button>
        </form>
        <div className="order">
          <h4>YOUR ORDER</h4>
          <div>
            {selectState.cart.cartProducts.map((x) => (
              <>
                <span>{x.name}</span>
                <span>
                  {String(x.price).replace(/(.)(?=(\d{3})+$)/g, "$1,")} VND x{" "}
                  {x.quantity}
                </span>
              </>
            ))}
            <span>TOTAL</span>
            <span>
              {String(selectState.cart.cartTotal).replace(
                /(.)(?=(\d{3})+$)/g,
                "$1,"
              )}{" "}
              VND
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
