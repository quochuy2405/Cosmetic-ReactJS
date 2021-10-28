import React from "react";
import BestSeller from "../../components/BestSeller";
import Header from "./../../components/Header/index";
import Slider from "./../../components/Slider/index";
import Anhdep from "./../../components/AnhDep/index";
const skinCare = [
  {
    link_img:
      "https://assets.vogue.com/photos/60e44ea0cd2d1c05db4c9d80/master/w_1280,c_limit/slide_9.jpg",
    title: "Augustinus Bader the Rich Cream",
    price: 170,
  },
  {
    link_img:
      "https://assets.vogue.com/photos/5ff5d1d667b8c1050b8ab3cd/master/w_1280,c_limit/slide.jpg",
    title: "Joanna Vargas Super Nova Serum",
    price: 307,
  },
  {
    link_img:
      "https://assets.vogue.com/photos/5ea9ee2804839000081fcf98/master/w_1280,c_limit/03.jpg",
    title: "NuFace Trinity Facial Toning Device",
    price: 339,
  },
  {
    link_img:
      "https://assets.vogue.com/photos/5ea9ed9dbd7f01000884abbb/master/w_1280,c_limit/02.jpg",
    title: "Lumity Skin Nutrients Facial Oil",
    price: 80,
  },
  {
    link_img:
      "https://assets.vogue.com/photos/5ea9ef3bdf30db0008ae88ae/master/w_1280,c_limit/07.jpg",
    title: "Dr. Barbara Sturm Brightening Serum",
    price: 310,
  },
  {
    link_img:
      "https://assets.vogue.com/photos/5ff3981a439cffbebd9a6dd7/master/w_1280,c_limit/1.jpg",
    title: "SK-II Facial Treatment Essence",
    price: 99,
  },
];
const List_Img = [
  {
    img: "https://media.allure.com/photos/60512685fdf3d7fd0e2ef100/2:1/w_3500,h_1750,c_limit/asian-owned%20skin%20care%20lede.jpg",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0059/0056/6597/products/photo-id-6571435229253-attractive-woman-kissing-a-natural-skincare-product.jpg?v=1618162858",
  },
  {
    img: "https://images.pexels.com/photos/5938255/pexels-photo-5938255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040",
  },
];
function SkinCare() {
  return (
    <div className="SkinCare">
      <Header />
      <div className="body_Page">
        <Slider List_Img={List_Img} />
        <h2 className="title_pro">SKIN CARE</h2>
        <BestSeller Listproduct={skinCare} />
        <Anhdep />
      </div>
    </div>
  );
}

export default SkinCare;
