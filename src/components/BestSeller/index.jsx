import React from "react";
import "./styles.scss";
import Product from "../Product/index";
import { useEffect } from "react";
import { useState } from "react";
const Listproduct = [
{ link_img:"https://imagizer.imageshack.com/img922/9026/2Ard7C.jpg",
   title:"Tiêu đề sản phầm",
    price:70 
},
{ link_img:"https://imagizer.imageshack.com/img924/6235/zAXQb0.jpg",
  title:"Tiêu đề sản phầm",
price:70 
},
{ link_img:"https://imagizer.imageshack.com/img923/6209/oFXGdJ.jpg",
  title:"Tiêu đề sản phầm",
price:70 
},
{ link_img:"https://imagizer.imageshack.com/img924/2526/ElgKqg.jpg",
  title:"Tiêu đề sản phầm",
price:70 
},
{ link_img:"https://imagizer.imageshack.com/img922/9476/40c4fx.jpg",
  title:"Tiêu đề sản phầm",
price:70 
},
{ link_img:"https://imagizer.imageshack.com/img924/767/Q5vQni.jpg",
  title:"Tiêu đề sản phầm",
price:70 
},
{ link_img:"https://imagizer.imageshack.com/img922/1010/kl2FCt.jpg",
  title:"Tiêu đề sản phầm",
price:70 
},
{ link_img:"https://imagizer.imageshack.com/img923/8149/j3QrOu.jpg",
  title:"Tiêu đề sản phầm",
price:70 
},
{ link_img:"https://imagizer.imageshack.com/img924/2653/7rpjHK.jpg",
  title:"Tiêu đề sản phầm",
price:70 
},
{ link_img:"https://imagizer.imageshack.com/img922/6167/OKaNwH.jpg",
  title:"Tiêu đề sản phầm",
price:70 
},
{ link_img:"https://imagizer.imageshack.com/img924/3264/dOI89U.jpg",
  title:"Tiêu đề sản phầm",
price:70 
},
{ link_img:"https://imagizer.imageshack.com/img923/8898/5DF40f.jpg",
  title:"Tiêu đề sản phầm",
price:70 
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
