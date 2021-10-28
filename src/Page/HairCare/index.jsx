import React from "react";
import Header from "./../../components/Header/index";
import Anhdep from "./../../components/AnhDep/index";
import Slider from "./../../components/Slider/index";
import BestSeller from "./../../components/BestSeller/index";
const hairCare = [
  {
    link_img:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566583879-51Igm3zPBRL.jpg?crop=1xw:1.00xh;center,top&resize=768:*",
    title: "Augustinus Bader the Rich Cream",
    price: 170,
  },
  {
    link_img:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566585034-11275423-9544396449654738.jpg?crop=1xw:1xh;center,top&resize=768:*",
    title: "Moisture Co-Wash Whipped Cleansing Conditioner",
    price: 307,
  },
  {
    link_img:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566582493-large-95ef36d2-9bc7-407b-b318-0804114b5618-1566582458.jpg?crop=1xw:1xh;center,top&resize=768:*",
    title: "Royal Oils Deep Moisture Masque",
    price: 339,
  },
  {
    link_img:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566586237-inforcer-brushproof-1566586197.jpg?crop=0.827xw:0.886xh;0.113xw,0.0595xh&resize=768:*",
    title: "Inforcer Brush Proof Anti-Breakage Detangling Spray",
    price: 80,
  },
  {
    link_img:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566584356-kerastase-densifique-bain-densite-shampoo.jpg?crop=0.758xw:0.758xh;0.146xw,0.199xh&resize=768:*",
    title: "Bain Densifique Shampoo and Conditioner",
    price: 310,
  },
  {
    link_img:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566854276-71kbb2hyo3l-sl1500-1566854261.jpg?crop=0.886xw:1xh;center,top&resize=768:*",
    title: "Keratin Smooth Color Shampoo and Conditioner",
    price: 99,
  },
];
const List_Img = [
  {    img: "https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040"},
  {
    img: "https://images.pexels.com/photos/7262483/pexels-photo-7262483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040",
  },
  {
    img: "https://images.pexels.com/photos/7262990/pexels-photo-7262990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040",
  },
];
function HairCare() {
  return (
    <div className="HairCare">
      <Header />
      <div className="body_Page">
        <Slider List_Img={List_Img} />
        <h2 className="title_pro">HAIR CARE</h2>
        <BestSeller Listproduct={hairCare} />
        <Anhdep />
      </div>
    </div>
  );
}

export default HairCare;
