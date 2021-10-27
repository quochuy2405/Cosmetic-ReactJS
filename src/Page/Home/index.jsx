import React from 'react'
import Anhdep from '../../components/AnhDep'
import BestSeller from '../../components/BestSeller'
import Header from '../../components/Header'
import ProductSlider from '../../components/ProductSlider'
import Slider from '../../components/Slider'

function Home() {
    return (
        <div className="Home">
            <Header/>
            <div className="body_Page">
                 <Slider/>
                 <ProductSlider/>
                 <BestSeller/>
                 <Anhdep/>
            </div>
           
        </div>
    )
}

export default Home
