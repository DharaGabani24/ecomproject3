import React from "react";
import "./Collection.css";

const Collection = () => {
  return (
    <>
      <div className="container">
        <div className="grid-collection grid-two-coloums-collection ">
          <div className="collection-section">
            <h3>Men Collection</h3>
            <p>
              There are many variations of passages of Lorem Ipsum availale, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised There are many variations
            </p>
          </div>
          <div className="collection-section">
            <h3>Women Collection</h3>
            <p>
              There are many variations of passages of Lorem Ipsum availale, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised There are many variations
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid-collection grid-two-coloums-collection ">
          <div className="collection-img img_hover effect_1">
            <img src="./image/single01.jpg" alt="" />
          </div>
          <div className="collection-img img_hover effect_1">
          <img src="./image/single02.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
