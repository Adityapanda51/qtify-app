import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./Layout.css";
import Hero from './components/Hero/Hero';
import TopAlbum from './components/topAlbum/TopAlbum';



const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <Hero />
      <TopAlbum />
    </div>
  )
}

export default Layout;