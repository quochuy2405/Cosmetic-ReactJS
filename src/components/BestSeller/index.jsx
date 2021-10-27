import React from "react";
import "./styles.scss";
import Product from "../Product/index";
import { useEffect } from "react";
import { useState } from "react";
const Listproduct = [
  {
    link_img: "https://imagizer.imageshack.com/img923/7854/RmX3bd.jpg",
    title: "Title",
    price: 70,
  },
  {
    link_img: "https://imagizer.imageshack.com/img924/9743/qx2lhC.jpg",
    title: "Title",
    price: 70,
  },
  {
    link_img: "https://imagizer.imageshack.com/img922/9882/qhXgmH.jpg",
    title: "Title",
    price: 70,
  },
  {
    link_img: "https://imagizer.imageshack.com/img924/2301/D5Qpr4.jpg",
    title: "Title",
    price: 70,
  },
  {
    link_img: "https://imagizer.imageshack.com/img923/8624/ssAUCe.jpg",
    title: "Title",
    price: 70,
  },
  {
    link_img: "https://imagizer.imageshack.com/img924/9255/KbBM3Z.jpg",
    title: "Title",
    price: 70,
  },
];
function BestSeller() {

  return (
      <>
       <h2 className="title_BEST">BEST SELLER</h2>
      <div className="BestSeller">
            {Listproduct.map((product, index) => (
              
                     <Product Product={product} key={index} />
            
         
            ))}
      </div>
      <p className="View"><a href="#">View collect</a></p>
     </>
  );
}

export default BestSeller;
