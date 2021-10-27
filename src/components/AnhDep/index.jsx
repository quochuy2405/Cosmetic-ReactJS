import React from "react";
import "./styles.scss";
const List_Anh = [
  { img: "https://imagizer.imageshack.com/img922/5717/i7Lcq7.jpg",
  title:"MAKUP"
},
  { img: "https://imagizer.imageshack.com/img922/9736/mN3g2c.jpg",
  title:"MAKUP"
},
  { img: "https://imagizer.imageshack.com/img923/7546/0haVbp.jpg",
  title:"MAKUP"
},
  { img: "https://imagizer.imageshack.com/img922/4732/R0aCZq.jpg",
  title:"MAKUP"
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
                         <p><a href="#" className="Shop_now">shop now</a></p>
                   </div>
          </div>
   
        
      ))}
    </div>
  );
}

export default Anhdep;
