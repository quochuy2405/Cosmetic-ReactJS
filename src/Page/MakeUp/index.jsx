import React from "react";
import Header from "./../../components/Header/index";
import Anhdep from "./../../components/AnhDep/index";
import Slider from './../../components/Slider/index';
import BestSeller from './../../components/BestSeller/index';
const hairCare = [
  {
    link_img:
      "https://media.glamour.com/photos/604ec79645db7998de8873d1/master/w_1920%2Cc_limit/giorgio%2520foundation.jpg",
    title: "Hydromaniac Tinted Glow Hydrator",
    price: 170,
  },
  {
    link_img:
      "https://media.glamour.com/photos/604ec7d4876e6e1af71bc9fb/master/w_1920%2Cc_limit/urban%2520decay%2520marula.jpg",
    title: "Hourglass Vanish Airbrush Concealer",
    price: 307,
  },
  {
    link_img:
      "https://media.glamour.com/photos/604ec83164a71c3bedfa4f60/master/w_1920%2Cc_limit/laura%2520mercier%2520primer.jpg",
    title: "Laura Mercier Pure Canvas Primer Blurring",
    price: 339,
  },
  {
    link_img:
      "https://media.glamour.com/photos/604ec85f39888c1346583223/master/w_1920%2Cc_limit/tatcha%2520silk%2520powder.jpg",
    title: "Tatcha The Silk Powder",
    price: 80,
  },
  {
    link_img:
      "https://media.glamour.com/photos/604ec88645db7998de8873d6/master/w_1920%2Cc_limit/nars%2520blush.jpg",
    title: "Nars Air Matte Blush",
    price: 310,
  },
  {
    link_img:
      "https://media.glamour.com/photos/604ec8b02c59adb53526b6d7/master/w_1920%2Cc_limit/live%2520tinted%2520hueglow.jpg",
    title: "Live Tinted HueGlow",
    price: 99,
  },
];
const List_Img = [
  {    img: "https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1050"},
  {
    img: "https://images.pexels.com/photos/6393/red-woman-girl-brown.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040",
  },
];
function Makeup() {
  return (
    <div className="Makeup">
      <Header />
      <div className="body_Page">
        <Slider List_Img={List_Img} />
        <h2 className="title_pro">MAKE UP </h2>
        <BestSeller Listproduct={hairCare} />
        <Anhdep />
      </div>
    </div>
  );
}

export default Makeup;
