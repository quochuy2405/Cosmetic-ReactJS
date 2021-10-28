import React, { useEffect } from 'react'
import Anhdep from '../../components/AnhDep'
import BestSeller from '../../components/BestSeller'
import Header from '../../components/Header'
import ProductSlider from '../../components/ProductSlider'
import Slider from '../../components/Slider'
const bestSeller = [
    
    { link_img:"https://imagizer.imageshack.com/img922/1010/kl2FCt.jpg",
    title: "Augustinus Bader the Rich Cream",
    price: 170,
    },
    { link_img:"https://imagizer.imageshack.com/img923/8149/j3QrOu.jpg",
    title: "Moisture Co-Wash Whipped Cleansing Conditioner",
    price: 307,
    },
    { link_img:"https://imagizer.imageshack.com/img924/2653/7rpjHK.jpg",
    title: "Royal Oils Deep Moisture Masque",
    price: 339,
    },
    { link_img:"https://imagizer.imageshack.com/img922/6167/OKaNwH.jpg",
    title: "Inforcer Brush Proof Anti-Breakage Detangling Spray",
    price: 80,
    },
    { link_img:"https://imagizer.imageshack.com/img924/3264/dOI89U.jpg",
    title: "Bain Densifique Shampoo and Conditioner",
    price: 310,
    },
    { link_img:"https://imagizer.imageshack.com/img923/8898/5DF40f.jpg",
    title: "Keratin Smooth Color Shampoo and Conditioner",
    price: 99,
    },
    ];
    const List_Img = [
        { img: "https://imagizer.imageshack.com/img922/2549/B2zMSB.jpg" },
        { img: "https://imagizer.imageshack.com/img923/9061/9ZFZH7.jpg" },
        { img: "https://imagizer.imageshack.com/img924/6814/H2oqYZ.jpg" },
      ];
function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="Home">
            <Header/>
            <div className="body_Page">
                 <Slider List_Img={List_Img}/>
                 <h2 className="title_pro">LATEST PRODUCT</h2>
                 <ProductSlider />
                 <h2 className="title_pro">BEST SELLER</h2>
                 <BestSeller Listproduct={bestSeller}/>
                 <Anhdep/>
            </div>
           
        </div>
    )
}

export default Home
