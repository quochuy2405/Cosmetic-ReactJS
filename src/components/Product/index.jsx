import React from 'react'
import './styles.scss'

function Product(props) {
    const {Product}=props;
    return (
        <div className="Product">
            <div className="pro_img">
              <img src={Product.link_img} alt="" className="Product_img" />
            </div>
    
            <div className="Product_content">
                <p className="Product_Title">
               {Product.title}
                </p>
                <p className="Product_price">
                ${Product.price}
                </p>
            </div>
         
        </div>
    )
}

export default Product;
