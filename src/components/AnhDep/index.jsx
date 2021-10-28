import React from "react";
import "./styles.scss";
import { Link } from 'react-router-dom';
const List_Anh = [
  { img: "https://imagizer.imageshack.com/img922/5717/i7Lcq7.jpg",
  title:"BODY CARE",
  link:"/bodycare"
},
  { img: "https://imagizer.imageshack.com/img922/9736/mN3g2c.jpg",
  title:"HAIR CARE", 
  link:"/haircare"
},
  { img: "https://imagizer.imageshack.com/img923/7546/0haVbp.jpg",
  title:"SKIN CARE",
  link:"/skincare"
},
  { img: "https://imagizer.imageshack.com/img922/4732/R0aCZq.jpg",
  title:"MAKUP",
  link:"/makeup"
},
];
function Anhdep() {
  return (
    <div className="Anh">
      {List_Anh.map((item) => (
          <div className="img">
                   <img src={item.img} alt="" />
                   <div className="overlay">
                         <p className="title">{item.title}</p>
                         <p><Link to={item.link} className="Shop_now">shop now</Link></p>
                   </div>
          </div>
   
        
      ))}
    </div>
  );
}

export default Anhdep;
