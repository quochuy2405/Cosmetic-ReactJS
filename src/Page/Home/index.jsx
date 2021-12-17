import React, { useEffect } from 'react'
import Anhdep from '../../components/AnhDep'
import BestSeller from '../../components/BestSeller'
import Header from '../../components/Header'
import ProductSlider from '../../components/ProductSlider'
import Slider from '../../components/Slider'
import Data from './../../data';
const bestSeller=Data.bestSeller;
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
                 <div className="latest">
                     <h2 className="title_pro ">LATEST PRODUCT</h2>
                        <ProductSlider />
                 </div>
                 
                 <h2 className="title_pro">BEST SELLER</h2>
                 <BestSeller Listproduct={bestSeller}/>
                 <Anhdep/>
            </div>
           
        </div>
    )
}

export default Home
