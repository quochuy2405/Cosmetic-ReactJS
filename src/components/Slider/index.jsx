import React, { useEffect, useState } from "react";
import "./styles.scss";

function Slider(props) {
  const {List_Img}=props
  const [count, setCount] = useState(1);
  useEffect(() => {
    const dot_Active = document.querySelector(".dot.active");
    const sliders = document.querySelector(".sliders");
    const Img_sliders = document.querySelectorAll(".img_slider");
    const dots = document.querySelectorAll(".dot");
    var flag = true;
    dots.forEach((dot, index) => {
      dot.addEventListener("click", function () {
        const dot_Active = document.querySelector(".dot.active");
        if (dot_Active !== undefined) {
          dot_Active.classList.remove("active");
        }
        dot.classList.add("active");
        setCount(index);
        sliders.style.transform = `translateX(-${
          (index * 100) / Img_sliders.length
        }%)`;
      });
    });
    const interval = setInterval(() => {
      if (flag) {
        if (dot_Active !== undefined) {
          dot_Active.classList.remove("active");
        }
        if (count === Img_sliders.length - 1) {
          setCount(0);
        } else {
          setCount(count + 1);
        }
        sliders.style.transform = `translateX(-${
          (count * 100) / Img_sliders.length
        }%)`;
        dots[count].classList.add("active");
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <>
      <div className="Slider">
        <div className="sliders" style={{ width: List_Img.length * 100 + "%" }}>
          {List_Img.map((item, index) => (
            <div className="img_slider" key={index}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
        <div className="dots">
          {List_Img.map((item, index) => (
            <div
              className={`dot ${index === 0 ? "active" : ""}`}
              key={index}
            ></div>
          ))}
        </div>
      </div>
      <div className="content_slider">
        <li>
          <p className="title">Essential Oils</p>
          <p className="description">Harness the power of aromatherapy</p>
        </li>
        <li>
          {" "}
          <p className="title">Magnesium</p>
          <p className="description">Release yourself from stress</p>
        </li>
        <li>
          {" "}
          <p className="title">Coconut Oil</p>
          <p className="description">Retain skin softness after your bath</p>
        </li>
      </div>
    </>
  );
}

export default Slider;
