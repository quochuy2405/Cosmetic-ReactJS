import React from "react";
import "./styles.scss";
import Product from "../Product/index";
import { useEffect } from "react";
import { useState } from "react";
const Listproduct = [
  {
    link_img: "https://imagizer.imageshack.com/img923/7854/RmX3bd.jpg",
    title: "Augustinus Bader the Rich Cream",
    price: 170,
  },
  {
    link_img: "https://imagizer.imageshack.com/img924/9743/qx2lhC.jpg",
    title: "Moisture Co-Wash Whipped Cleansing Conditioner",
    price: 307,
  },
  {
    link_img: "https://imagizer.imageshack.com/img922/9882/qhXgmH.jpg",
    title: "Royal Oils Deep Moisture Masque",
    price: 339,
  },
  {
    link_img: "https://imagizer.imageshack.com/img924/2301/D5Qpr4.jpg",
    title: "Inforcer Brush Proof Anti-Breakage Detangling ",
    price: 80,
  },
  {
    link_img: "https://imagizer.imageshack.com/img923/8624/ssAUCe.jpg",
    title: "Bain Densifique Shampoo and Conditioner",
    price: 310,
  },
  {
    link_img: "https://imagizer.imageshack.com/img924/9255/KbBM3Z.jpg",
    title: "Keratin Smooth Color Shampoo and Conditioner",
    price: 99,
  },
];
function ProductSlider() {
  const [count, SetCount] = useState(1);
  const [flag, SetFlag] = useState(true);
  const handle_Slide = (flag) => {
    var temp;
    if (flag) {
      temp = count + 1;
    } else {
      temp = count - 1;
    }

    if (temp < 0) {
      temp = Listproduct.length / 2 - 1;
    }
    if (temp > Listproduct.length / 2 - 1) {
      temp = 0;
    }
    document.querySelector(".Products").style.transform = `translateX(-${
      temp * 17
    }%)`;
    SetCount(temp);
    SetFlag(true);
  };
  useEffect(() => {
    if (flag) {
      var time = setInterval(() => {
        handle_Slide(flag);
      }, 4000);
    }
    return () => clearInterval(time);
  }, [count]);
  return (
    <>
      <div className="ProductSlider">
        <div
          onClick={() => {
            SetFlag(true);
            handle_Slide(true);
          }}
          className="btnh btn_next"
        >
          <i className="fas fa-chevron-circle-right"></i>
        </div>
        <div
          onClick={() => {
            SetFlag(false);
            handle_Slide(false);
          }}
          className="btnh btn_prev"
        >
          <i className="fas fa-chevron-circle-left"></i>
        </div>
        <div
          className="Products"
          style={{ width: Listproduct.length * 25 + "%" }}
        >
          {Listproduct.map((product, index) => (
            <Product Product={product} key={index} />
          ))}
        </div>
      </div>
      <p className="View">
        <a href="#">View collect</a>
      </p>
    </>
  );
}

export default ProductSlider;
