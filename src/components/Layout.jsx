import "./style/styleLayout.css";
import { Link, Outlet } from "react-router-dom";
import { IconCart, IconAcount, IconHistory } from "../icon/icon";
import { InitStore, useStore, Dispath } from "../useHook/useStore";
import { DetailPopup } from "./DetailPopup";
import { IconMessage } from "../icon/IconMessage";

//== phần khai báo biến state và function của useStore cho toàn bộ web page  =======
InitStore(
  {
    productList: null,
    display: "hiden",
    product: null,
    productRelated: null,
    loged: JSON.parse(localStorage.getItem("login"))
      ? JSON.parse(localStorage.getItem("login"))
      : null,
    cart: JSON.parse(
      localStorage.getItem("cart")
        ? localStorage.getItem("cart")
        : '{"cartProducts": [],"cartTotal": 0}'
    ),
  },
  {
    clearCart: () => {
      sessionStorage.removeItem("cart");
      return {
        cart: {
          cartProducts: [],
          cartTotal: 0,
        },
      };
    },
    deleteCartProduct: (g, payload) => {
      console.log("rrrr", payload);
      const kq = [...g.cart.cartProducts];
      const rs = kq.filter((x) => x._id !== payload);
      return {
        cart: {
          cartProducts: rs,
          cartTotal: rs.reduce((k, x) => {
            return k + x.price * x.quantity;
          }, 0),
        },
      };
    },
    editQuantity: (g, payload) => {
      const kq = [...g.cart.cartProducts];
      const sp = kq.filter((x) => x._id == payload._id);
      sp[0].quantity += payload.sohan;
      return {
        cart: {
          cartProducts: kq,
          cartTotal: kq.reduce((k, x) => {
            return k + x.price * x.quantity;
          }, 0),
        },
      };
    },
    addcart: (g, payload) => {
      const kq = [...g.cart.cartProducts];
      if (
        kq.length <= 0 ||
        (kq.length > 0 && kq.findIndex((x) => x._id == payload._id) < 0)
      )
        kq.push(payload);
      else
        kq[kq.findIndex((x) => x.id == payload.id)].quantity +=
          payload.quantity;
      return {
        cart: {
          cartProducts: kq,
          cartTotal: kq.reduce((k, x) => {
            return k + x.price * x.quantity;
          }, 0),
        },
      };
    },
    setCartStorage: (g) => {
      localStorage.setItem("cart", JSON.stringify(g.cart));
    },
    productWithCategory: (globalState, payload) => {
      return {
        productList: payload.data
          ? payload.category
            ? payload.data.filter((x) => x.category == payload.category)
            : payload.data
          : null,
      };
    },
    close: () => {
      return { display: "hiden" };
    },
    productDetail: (globalState, payload) => {
      return {
        display: "display",
        product: payload.product,
        productRelated:
          globalState.productList && payload.product
            ? globalState.productList.filter(
                (x) =>
                  x.category == payload.product.category &&
                  x._id.$oid !== payload.product._id.$oid
              )
            : null,
      };
    },
    login: (t, user) => {
      localStorage.setItem("login", JSON.stringify(user));
      return {
        loged: user,
      };
    },
    logout: () => {
      localStorage.removeItem("login");
      return {
        loged: null,
      };
    },
  }
);

//=============== phần layout duy nhất cho web app này ==========================
export function Layout() {
  const { selectState } = useStore((x) => x);
  return (
    <>
      <div className="layout">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
      <DetailPopup className={selectState.display} />
    </>
  );
}

//================ phần navbar cho layout =========================================
function NavBar() {
  const { selectState, dispath } = useStore((x) => x.loged);

  return (
    <div className="navbar">
      <span>
        <Link to={"/clientapp"}>Home</Link>
        <Link to={"/clientapp/shop"}>Shop</Link>
      </span>
      <span className="head1">BOUTIQUE</span>
      <span>
        <Link to={"/clientapp/cart"}>
          <IconCart />
          Cart
        </Link>
        {selectState ? (
          <>
            <Link to={"/clientapp/history"}>
              <IconHistory /> History
            </Link>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                dispath("clearCart");
                dispath("logout");
              }}
            >
              <IconAcount />
              {selectState.fullname + " (Logout)"}
            </a>
          </>
        ) : (
          <Link to={"/clientapp/login"}>
            <IconAcount />
            Login
          </Link>
        )}
      </span>
    </div>
  );
}

//============= phần footer cho layout ======================================
function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <div>
            <div>CUSTOMER SERVICES</div>
            <div>Help & Contact Us</div>
            <div>Returns & Retunds</div>
            <div>Online Stores</div>
            <div>Terns & Conditions</div>
          </div>
          <div>
            <div>COMPANY</div>
            <div>What We Do</div>
            <div>Available Service</div>
            <div>Latest Posts</div>
            <div>FAQs</div>
          </div>
          <div>
            <div>SOCIAL MEDIA</div>
            <div>Twitter</div>
            <div>Intergram</div>
            <div>Facebook</div>
            <div>Pinterest</div>
          </div>
        </div>
      </div>
      <div>
        <IconMessage />
      </div>
    </>
  );
}
