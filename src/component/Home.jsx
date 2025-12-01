import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../assets/css/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Header from './Header';
import Product from './Product';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Aboutus from './Aboutus';
import Contact from './Contact';

 function Home() {
const [category,setCategory]=useState('')
const {hash}=useLocation()

  useEffect(()=>{

    fetch('https://fakestoreapi.com/products/categories').then((res)=>res.json()).then((resp)=>{
        setCategory(resp)
    })
  },[])
  useEffect(()=>{

   
   if(hash){
    const element= document.getElementById(hash.replace('#',''))
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }
   }
  },[hash])

  return (
    <>
    <Header/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="/img/1-.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
             <img src="/img/2-.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
             <img src="/img/3-.png" alt="" />
        </SwiperSlide>

      </Swiper>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {category && category.map((e, index) => {
              const items = {
                          "electronics": { img: "/img/elec.jpg", text: "Electronics",src:'/smartphones' },
                "jewelery": { img: "/img/jw2.jpg", text: "Jewelery" , src:'/womens-jewellery' },
                "men's clothing": { img: "/img/men.jpg", text: "Men's Clothing" ,src:'/mens-shirts' },
                "women's clothing": { img: "/img/woman.jpg", text: "Women's Clothing" ,src:'/womens-dresses'},
              };

              if (!items[e]) return null;

              return (
                <Link to={items[e].src} key={index} className="relative flex-1 sm:h-48 mt-3 overflow-hidden rounded-lg cursor-pointer group">
               
    
                  <img 
                    src={items[e].img} 
                    alt={e} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                  />

      
                  <div className="absolute inset-0 bg-black bg-opacity-50 duration-300 hover:bg-opacity-0"></div>

       
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center py-2 font-bold">
                    {items[e].text}
                  </div>
                  
                </Link>
              );
            })}
                  </div>
                <div id='aboutus'>
                  
                  <Aboutus/>
                </div>
             
                  <div id='contact'>
                    <Contact/>
                  </div>
                  <Footer/>
              
              </>
            );
          }

export default Home