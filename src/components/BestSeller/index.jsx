import React from "react";
import Product from "../Product/index";
import "./styles.scss";

function BestSeller(props) {
  const {Listproduct}=props
  return (
      <>

      <div className="BestSeller">
            {Listproduct.map((product, index) => (
              
                     <Product Product={product} key={index} />
            
         
            ))}
      </div>
     </>
  );
}

export default BestSeller;
