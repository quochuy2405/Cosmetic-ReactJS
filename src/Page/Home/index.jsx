import React from 'react'
import Anhdep from '../../components/AnhDep'
import BestSeller from '../../components/BestSeller'
import Header from '../../components/Header'
import ProductSlider from '../../components/ProductSlider'
import Slider from '../../components/Slider'
const bestSeller = [
    
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
    const List_Img = [
        { img: "https://imagizer.imageshack.com/img922/2549/B2zMSB.jpg" },
        { img: "https://imagizer.imageshack.com/img923/9061/9ZFZH7.jpg" },
        { img: "https://imagizer.imageshack.com/img924/6814/H2oqYZ.jpg" },
      ];
function Home() {
    return (
        <div className="Home">
            <Header/>
            <div className="body_Page">
                 <Slider List_Img={List_Img}/>
                 <h2 className="title_pro">LATEST PRODUCT</h2>
                 <ProductSlider/>
                 <h2 className="title_pro">BEST SELLER</h2>
                 <BestSeller Listproduct={bestSeller}/>
                 <Anhdep/>
            </div>
           
        </div>
    )
}

export default Home
