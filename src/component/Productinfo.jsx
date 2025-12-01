

import { StarIcon } from '@heroicons/react/20/solid'
import Header from './Header'
import Footer from './Footer'
import { useContext, useEffect, useState } from 'react'
import { productcontext } from './Context'
import Notifcart from './Notifcart'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom'

function Productinfo() {
  const {selectpr,setCart,cart}= useContext(productcontext)
   const [OpenNotifcart,setOpenNotifcart]=useState(false)
   const [datapro,setDatapro]=useState('')
   const {user,selectproduct}=useContext(productcontext)
   console.log(user)
   const dataurl=useParams()
   console.log(dataurl)
   const [Alldatacomment,setAllDatacomment]=useState(selectpr.reviews)
   const navigate=useNavigate()


  
   useEffect(()=>{
    const datapr=cart.find((item)=>item.title==dataurl.title)
    debugger
    setDatapro(datapr)

   },[cart,dataurl.title])

    // useEffect(() => {
    //    if (!selectproduct&& Object.keys(selectpr).length === 0) {
    //      navigate("/Home"); 
    //    }
    //  }, [selectproduct, navigate]);

  let totalrange=datapro.reviews && datapro.reviews.reduce((c,e)=>c + e.rating , 0 )
  let avargerang=datapro.reviews?.length && totalrange/datapro.reviews.length
  console.log(avargerang)
  let fullStars = Math.floor(avargerang);
let halfStar = avargerang - fullStars >= 0.5;

   const carthandler=(e)=>{
      debugger
      const productWithId = { ...e, cartId: uuidv4() };
     setCart((pr)=>{
        const exist=pr.find((pre)=>pre.id===e.id)

      
        if (exist) {
      return pr.map((item) =>
        item.id === e.id
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item
      );
    }
  
    
        
      return  [...pr,{...productWithId ,quantity:1}]
      })
      setOpenNotifcart(true)
      debugger
      console.log(cart)
    }

 
    const hanlercomment=(e)=>{
        
      e.preventDefault();
        
        let dataacomment={
          reviewerName:e.target.name.value,
          reviewerEmail:e.target.email.value,
          comment:e.target.message.value
        }
        
        setAllDatacomment(pr=>[...pr,dataacomment])
     
        
    }
   
    

  return (
    <>
      <Header/>
    {datapro&&
      <div className="bg-gray-100">
        <div className="pt-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb">
            <ol className="mx-auto flex max-w-7xl items-center space-x-2 px-4 sm:px-6 lg:px-8">
              {datapro.tags && datapro.tags.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb}
                    </a>
                    <svg
                      fill="currentColor"
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a className="font-medium text-gray-500 hover:text-gray-600">
                  {datapro.title}
                </a>
              </li>
            </ol>
          </nav>

          {/* MAIN SECTION */}
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* LEFT: Image */}
              <div>
                <img
                  src={datapro.images[0]}
                  alt={datapro.title}
                  className="w-full rounded-xl shadow-xl object-cover hover:scale-[1.05] duration-300"
                />
              </div>

              {/* RIGHT: Info */}
              <div className='sm:mx-5'>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{datapro.title}</h1>

                {/* REVIEWS */}
                <div className="mt-6 flex items-center">
                  {/* {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        averageRating > rating ? 'text-yellow-400' : 'text-gray-200',
                        'h-6 w-6'
                      )}
                    />
                  ))} */}
        {[...Array(5)].map((_, i) => (
    i < fullStars
      ? <i key={i} className="fas fa-star text-yellow-400 text-lg"></i>      // ستاره پر
      : i === fullStars && halfStar
        ? <i key={i} className="fas fa-star-half-alt text-yellow-400 text-lg"></i> // نیم ستاره
        : <i key={i} className="far fa-star text-gray-300 text-lg"></i>        // ستاره خالی
  ))}
                  <span className="ml-3 text-sm font-medium text-indigo-600">{datapro.reviews?.length} reviews</span>
                </div>

                {/* PRODUCT DETAILS */}
                <div className="mt-8 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">Brand: {datapro.brand}</h3>
                  <h2 className="text-lg font-bold text-gray-900">Dimensions:</h2>
                  <p className="text-gray-700">Depth: {datapro.dimensions.depth}</p>
                  <p className="text-gray-700">Height: {datapro.dimensions.height}</p>
                  <p className="text-gray-700">Width: {datapro.dimensions.width}</p>
                </div>

                {/* PRICE */}
                <p className="my-5 text-3xl font-bold text-gray-900">Price: {datapro.price}$</p>

                {/* BUTTON */}
                <button 
                 onClick={(e) =>{
                    e.stopPropagation(); 
                    carthandler(datapro)}}
                  className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-md text-lg font-medium 
                             hover:bg-indigo-700 hover:shadow-lg transition duration-300">
                  Add to bag
                </button>
              </div>
            </div>

            {/* DESCRIPTION & SHIPPING */}
            <div className="mt-20 grid grid-cols-1 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">Description</h3>
                <p className="mt-4 text-gray-700">{datapro.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">Shipping Information</h3>
                <p className="mt-4 text-gray-700">{datapro.shippingInformation}</p>
              </div>
            </div>

            {/* REVIEWS */}
            <div className="mt-20">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">Recent Reviews</h3>
              {Alldatacomment && Alldatacomment.map((e,index)=>(
                <div key={index} className="py-6 px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 border-t border-gray-200 bg-gray-50 rounded-lg my-4">
                  
                  <div className='space-y-2'>
                    <p className='text-sm text-gray-500'>{e.date}</p>
                    <p className="text-md font-semibold text-gray-800">{e.reviewerName}</p>
                    <p className="text-sm text-gray-600">{e.reviewerEmail}</p>
                  </div>

                  <div className='mt-2 lg:mt-0'>
                    <div className="flex space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        i < e.rating
                          ? <i key={i} className="fas fa-star text-yellow-400 text-lg"></i>
                          : <i key={i} className="far fa-star text-gray-300 text-lg"></i>
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{e.comment}</p>
                  </div>

                </div>
              ))}
              <div className="w-full mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
                   <h2 className="text-xl font-semibold mb-4 text-gray-700">Leave a Comment</h2>
  
                   <form onSubmit={hanlercomment} className="space-y-4">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <input
                         type="text"
                         placeholder="Name"
                         name='name'
                         value={user.name}
                         className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                       />
                       <input
                         type="email"
                         name='email'
                         value={user.email}
                         placeholder="Email"
                         className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                       />
                     </div>

                     <textarea
                       id="message"
                       rows="5"
                       name='message'
                       placeholder="Write your message..."
                       className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                     />

                     <button
                     
                       type="submit"
                       className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-200"
                     >
                       Submit
                     </button>
                   </form>
                 </div>

               <Notifcart open={OpenNotifcart} onClose={setOpenNotifcart} />
            </div>
          </div>
        </div>
      </div>
    }
      <Footer/>
    </>
  )
}


export default Productinfo;
