import { Link, useParams } from "react-router-dom";
import "./style/styleShop.css";
import { Product } from "../components/Product";
import { useAPI } from "../useHook/useAPI";
import { useEffect } from "react";
import { linkProduce } from "../linkPage/linkPage";
import { useStore, Dispath } from "../useHook/useStore";

//================ trang shop ================================================
export function Shop() {
  const category = useParams().category;
  const [data, run] = useAPI();
  const { selectState } = useStore((x) => x);

  function loadProductByCategory(dt = null, cg = null) {
    Dispath("productWithCategory", { data: dt, category: cg });
  }

  useEffect(() => {
    run(linkProduce);
  }, []);

  useEffect(() => {
    if (category) loadProductByCategory(data, category);
    else loadProductByCategory(data);
  }, [data]);

  return (
    <>
      <div className="banner2">
        <span style={{ fontSize: "25px", fontWeight: "500" }}>SHOP</span>
        <span style={{ color: "#666" }}>SHOP</span>
      </div>
      <div className="body">
        <div className="category1">
          <h3>CATEGORIES</h3>
          <h4>APPle</h4>
          <Link
            onClick={() => {
              loadProductByCategory(data);
            }}
          >
            All
          </Link>
          <h4>IPHONE & MAC</h4>
          <Link
            onClick={() => {
              loadProductByCategory(data, "iphone");
            }}
          >
            IPhone
          </Link>
          <Link
            onClick={() => {
              loadProductByCategory(data, "ipad");
            }}
          >
            Ipad
          </Link>
          <Link
            onClick={() => {
              loadProductByCategory(data, "macbook");
            }}
          >
            Macbook
          </Link>
          <h4>WIRELESS</h4>
          <Link
            onClick={() => {
              loadProductByCategory(data, "airpod");
            }}
          >
            Airpod
          </Link>
          <Link
            onClick={() => {
              loadProductByCategory(data, "watch");
            }}
          >
            Watch
          </Link>
          <h4>OTHER</h4>
          <Link
            onClick={() => {
              loadProductByCategory(data, "mouse");
            }}
          >
            Mouse
          </Link>
          <Link
            onClick={() => {
              loadProductByCategory(data, "keybooad");
            }}
          >
            Keyboard
          </Link>
          <Link
            onClick={() => {
              loadProductByCategory(data, "other");
            }}
          >
            Other
          </Link>
        </div>
        <div className="right">
          <div className="search">
            <input type="text" placeholder="Enter Search Here!" />
            <select name="" id="">
              <option value="">Default sortting</option>
              <option value="">Desc</option>
              <option value="">Asc</option>
            </select>
          </div>
          {selectState.productList && selectState.productList.length <= 0 && (
            <h1
              style={{ color: "#ddd", fontStyle: "italic", fontWeight: "200" }}
            >
              None product
            </h1>
          )}
          <div className="list-product">
            {selectState &&
              selectState.productList &&
              selectState.productList.map((x) => Product({ ...x }))}
          </div>
        </div>
      </div>
    </>
  );
}
