import "./style/styleProduct.css";
import { Dispath } from "../useHook/useStore";

//============= phần ô sản phẩm show trong các list sản phẩm ========================
export function Product(prop) {
  return (
    <div className="produce">
      <img
        src={prop.img1}
        alt=""
        className="image-product"
        onClick={(e) => {
          e.preventDefault();
          Dispath("productDetail", { product: prop });
        }}
      />
      <p className="name">{prop.name}</p>
      <p className="price">
        {String(prop.price).replace(/(.)(?=(\d{3})+$)/g, "$1,")}
      </p>
    </div>
  );
}
