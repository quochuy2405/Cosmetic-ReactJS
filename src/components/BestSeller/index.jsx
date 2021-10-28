import React from "react";
import "./styles.scss";
import Product from "../Product/index";

function BestSeller(props) {
  const {Listproduct}=props
  return (
      <>

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
