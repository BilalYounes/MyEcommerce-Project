import React from 'react'
import Announcement from '../components/Announcement'
import Categoris from '../components/Categories/Categories'
import Footer from '../components/Footer'

import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products/Products'
import Slider from '../components/Slide/Slider'

const Home = () => {
  return (
    <div>
        <Announcement/>
        {/* <Navbar count={count}/> */}
        <Slider/>
        <Categoris/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home