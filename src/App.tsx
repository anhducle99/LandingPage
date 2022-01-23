import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header/Header';
import { Home } from './component/Body/Home/Home'
import { Features } from './component/Body/Features/Features'
import { ProductDemo } from './component/Body/ProductDemo/ProductDemo'
import { OurProduct } from './component/Body/OurProduct/OurProduct'
import { Product } from './component/Body/Product/Product'
import { Subcrible } from './component/Body/Subcrible/Subcrible';
import { FAQ } from './component/Body/FAQ/FAQ';
import { Footer } from './component/Footer/Footer';
import { Contact } from './component/Body/Contact/Contact';
import { Review } from './component/Body/Review/Review';
import { HomeAbout } from './component/Body/HomeAbout/HomeAbout';
function App() {
  return (
    <>
      <div className='banner'>
        <Header />
        <Home />
      </div>
      <HomeAbout />
      <Features />
      <ProductDemo />
      <OurProduct />
      <Product />
      <Subcrible />
      <FAQ />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
