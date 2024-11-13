import "./style/styleDetail.css";
import { IconNext, IconBack } from "../icon/icon3";
import { useEffect, useReducer } from "react";
import { useStore, Dispath } from "../useHook/useStore";
import { Product } from "../components/Product";
import { useNavigate, useParams } from "react-router-dom";

//============= trang Detail sàn phẩm =====================================
export function Detail() {
  const { selectState } = useStore((x) => x);
  const pr = useParams();

  return (
    <>
      <DetailContent product={selectState.product} />
      <Relate
        product={selectState.product}
        productRelated={selectState.productRelated}
      />
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "tang":
      return state + 1;
    case "giam":
      return state > 1 ? state - 1 : state;
    default:
      return state;
  }
}

//============= thành phần của trang Detail ================================
function DetailContent(prop) {
  const [quantity, dispatch] = useReducer(reducer, 1);
  const nv = useNavigate();
  return (
    <div className="detai-content">
      <ImageContent
        listImage={
          prop.product && [
            prop.product.img1,
            prop.product.img2,
            prop.product.img3,
            prop.product.img4,
          ]
        }
      />
      <div className="text-detail">
        <h1>{prop.product && prop.product.name}</h1>
        <h2>
          {prop.product &&
            String(prop.product.price).replace(/(.)(?=(\d{3})+$)/g, "$1,")}{" "}
          VND
        </h2>
        <p>{prop.product && prop.product.short_desc}</p>
        <div>
          <b>CATEGORY:</b>
          <span style={{ color: "#666" }}>
            {" "}
            {prop.product && prop.product.category}
          </span>
        </div>

        <div className="quatity">
          <span style={{ color: "#666" }}>QUANTITY</span>
          <span className="iconbt">
            <IconBack
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: "giam" });
              }}
            />
            <span>{quantity}</span>
            <IconNext
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: "tang" });
              }}
            />
          </span>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              Dispath("addcart", {
                _id: prop.product._id,
                image: prop.product.img1,
                name: prop.product.name,
                quantity,
                price: prop.product.price,
              });
              Dispath("setCartStorage");
              nv("/clientapp/cart");
            }}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

//============ thành phần trong phần DetailContent của trang Detail ================
function ImageContent(prop) {
  return (
    <div className="image-detail">
      <div className="image-list">
        {prop.listImage && prop.listImage.map((x) => <img src={x} alt="tt" />)}
      </div>
      <img
        src={prop.listImage && prop.listImage[0]}
        alt="rr"
        className="image-larg"
      />
    </div>
  );
}

//======== phần sản phẩm liên quan bên dưới của trang product Detail ===============
function Relate(prop) {
  return (
    <div className="relate">
      <div>
        <button>DESCRIPTION</button>
      </div>
      <h2>PRODUCT DESCRIPTION</h2>
      <p style={{ whiteSpace: "pre-wrap" }}>{prop.product.long_desc}</p>
      <RelatedProducts productRelated={prop.productRelated} />
    </div>
  );
}

//======== phần list sản phẩm liên quan của phần relate ============================
function RelatedProducts(prop) {
  return (
    <>
      <h3>RELATED PRODUCTS</h3>
      <div className="related-pro">
        {prop.productRelated &&
          prop.productRelated.map((x) => <Product {...x} />)}
      </div>
    </>
  );
}
