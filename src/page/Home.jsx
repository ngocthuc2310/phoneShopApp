import { Link } from "react-router-dom";
import "./style/styleHome.css";
import { useAPI } from "../useHook/useAPI";
import { useEffect, useState } from "react";
import { linkProduce } from "../linkPage/linkPage";
import { Product } from "../components/Product";
import dm1 from "../assets/danhmuc/product_1.png";
import dm2 from "../assets/danhmuc/product_2.png";
import dm3 from "../assets/danhmuc/product_3.png";
import dm4 from "../assets/danhmuc/product_4.png";
import dm5 from "../assets/danhmuc/product_5.png";

//============= trang chủ Home =============================================
export function Home() {
  return (
    <div className="home">
      <Banner />
      <Category />
      <ProductTop />
      <Other />
    </div>
  );
}

function Banner() {
  return (
    <div className="banner">
      <div className="bn-content">
        <h5>NEW INSPIRATION 2020</h5>
        <h1>20% OFF ON NEW SEASON</h1>
        <Link to={"/shop"} className="button">
          Browse collections
        </Link>
      </div>
    </div>
  );
}

function Category() {
  return (
    <div className="category">
      <div className="text">
        <h4>CAREFULLY CREATED COLLECTIONS</h4>
        <h3 style={{ textAlign: "center" }}>BROWSE OUR CATEGORIES</h3>
      </div>
      <div className="image">
        <div className="image1">
          <Link to={"/clientapp/shop/iphone"}>
            <img src={dm1} alt="" />
          </Link>
          <Link to={"/clientapp/shop/macbook"}>
            <img src={dm2} alt="" />
          </Link>
        </div>
        <div className="image2">
          <Link to={"/clientapp/shop/ipad"}>
            <img src={dm3} alt="" />
          </Link>
          <Link to={"/clientapp/shop/watch"}>
            {" "}
            <img src={dm4} alt="" />
          </Link>
          <Link to={"/clientapp/shop/airpod"}>
            <img src={dm5} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

//========= phần list sản phẩm trong trang Home =================================
function ProductTop() {
  const [data, run] = useAPI();
  const [listProuductsDefault, setlistProuductsDefault] = useState(null);

  useEffect(() => {
    run(linkProduce);
  }, []);

  useEffect(() => {
    //---------------------------- list Sản phẩm chỉ lấy 8 sản phẩm----------//
    const tt = data && [...data].slice(0, 8);
    setlistProuductsDefault(tt);
  }, [data]);

  return (
    <>
      <div className="text2">
        <h4>MADE THE HARD WAY</h4>
        <h3>TOP TRENDING PRODUCTS</h3>
      </div>
      <div className="produces">
        {listProuductsDefault &&
          listProuductsDefault.map((x) => Product({ ...x }))}
      </div>
    </>
  );
}

//=========== phần thông tin phụ ================================================
function Other() {
  return (
    <div className="other">
      <div className="free">
        <div style={{ display: "inline-block" }}>
          <h4>FREE SHIPPING</h4>
          <h5>Free shipping worlwide</h5>
        </div>
        <div style={{ display: "inline-block" }}>
          <h4>24 X 7 SERVICE</h4>
          <h5>Free shipping worlwide</h5>
        </div>
        <div style={{ display: "inline-block" }}>
          <h4>FESTIVAL OFFER</h4>
          <h5>Free shipping worlwide</h5>
        </div>
      </div>
      <div className="form">
        <div>
          <h4>LET'S BE FRIENDS!</h4>
          <h5>Nisi nisi tempor consequat laboris nisi</h5>
        </div>
        <div className="gr-input">
          <input type="text" placeholder="Enter your email address" />
          <a href="">Subscribe</a>
        </div>
      </div>
    </div>
  );
}
