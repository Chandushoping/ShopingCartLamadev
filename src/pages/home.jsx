
import React from 'react';
import Announcements from '../components/Announcements';
import Categories from '../components/Categories';
import Navbar from '../components/navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';
const Home=()=>
{
    return (
        <div>
            <Announcements/>
           <Navbar></Navbar>
           <Slider/>
           <Categories/>
           <Products/>
        </div>
    )

}
export default Home;