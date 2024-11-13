import { Fragment, useEffect, useState } from "react";
import "./style/styleDetailPopup.css";
import { useStore } from "../useHook/useStore";
import { useNavigate } from "react-router-dom";

//============ thành phần popup về product detail khi hover vào product ==================
export function DetailPopup(prop) {
  const { selectState, dispath } = useStore((x) => x);
  let navigate = useNavigate();

  function evClick() {
    dispath("close");
    navigate(`/clientapp/detail/${selectState.product._id.$oid}`);
  }

  return (
    <div className={prop.className}>
      <div className="background"></div>
      <div className="detailpopup2">
        <div style={{ textAlign: "right" }}>
          <a
            onClick={(e) => {
              e.preventDefault();
              dispath("close");
            }}
            href=""
            style={{ textDecoration: "none", fontSize: "1.5rem" }}
          >
            X
          </a>
        </div>
        <div className="detailpopup">
          <img src={selectState.product && selectState.product.img1} alt="" />
          <div>
            <h1>{selectState.product && selectState.product.name}</h1>
            <h2>
              {selectState.product &&
                selectState.product &&
                String(selectState.product.price).replace(
                  /(.)(?=(\d{3})+$)/g,
                  "$1,"
                )}{" "}
              VND
            </h2>
            <p>{selectState.product && selectState.product.short_desc}</p>
            <div>
              <a
                href=""
                className="button"
                onClick={(e) => {
                  e.preventDefault();
                  evClick();
                }}
              >
                View Detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
