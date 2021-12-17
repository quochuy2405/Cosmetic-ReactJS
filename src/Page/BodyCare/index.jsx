import React, { useEffect } from "react";
import Header from "./../../components/Header/index";
import Anhdep from "./../../components/AnhDep/index";
import Slider from './../../components/Slider/index';
import BestSeller from './../../components/BestSeller/index';
import Data from './../../data';
const bodyCare = Data.BodyCare;
  const List_Img = [
    {    img: "https://nylonpink.tv/wp-content/uploads/2017/03/The-Best-Korean-Body-skincare-Products.jpg "},
    {
      img: "https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040",
    },
    {
      img: "https://images.pexels.com/photos/7262986/pexels-photo-7262986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000",
    },
  ];
function BodyCare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="BodyCare">
       <Header />
      <div className="body_Page">
        <Slider List_Img={List_Img} />
        <h2 className="title_pro">BODY CARE</h2>
        <BestSeller Listproduct={bodyCare} />
        <Anhdep />
      </div>
    </div>
  );
}

export default BodyCare;
