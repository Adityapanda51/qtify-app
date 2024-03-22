import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./Layout.css";
import Hero from './components/Hero/Hero';
import TopAlbum from './components/topAlbum/TopAlbum';
import NewAlbum from './components/newAlbum/NewAlbum';
import SongsPage from './components/Songs/SongsPage';




const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <Hero />
      <TopAlbum />
      <NewAlbum />
      <SongsPage />
    </div>
  )
}

export default Layout;