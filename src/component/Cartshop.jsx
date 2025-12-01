import { useContext, useState } from "react";
import { productcontext } from "./Context";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Cartshop() {
  const {selectpr, cart ,setCart} = useContext(productcontext);
  
  console.log(cart)
  const [data, setData] = useState("");
  const [datacart,srtDatacart]=useState(cart)
  console.log(datacart)
 const navigate=useNavigate()

  
  const removehandler=(e)=>{
    
    setCart(pr=>pr.filter((item)=>item!==e))
      
  }
  const dataprhandlerr=(e)=>{
    const productdata=datacart.filter((item)=>item.title==e.title)
    debugger
    navigate(`/productinfo/${e.title}`)
    
  }
  const increaseQuantity = (id) => {
  setCart(prev => prev.map(item =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  ));
};

const decreaseQuantity = (id) => {
  setCart(prev => prev.map(item =>
    item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
  ));
};

  return (
    <>
      <Header />
     

      <div className="p-4 bg-gray-100 ">
        <div className="mb-8 py-2">
             <h3 className=" w-[90%] text-3xl m-auto font-bold mb-6 border-b border-gray-200 pb-2">Shopping Cart</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[50%_30%] gap-6 justify-center">
          
          {/* ستون محصولات */}
          <div className="flex flex-col gap-4">
            {cart &&
              cart.map((item) => (
                <div
                  key={item.id}
                
                  className="bg-white shadow-md hover:shadow-xl rounded-2xl p-4
                             transform transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 cursor-pointer"
                >
                  {/* تصویر */}
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                  />

                  {/* بخش متن و دکمه‌ها */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 line-clamp-1 hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h2>
                      <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                        {item.category}
                      </p>
                    </div>
                       {/* قیمت */}
                     <div>
                        <p className="text-2xl font-bold flex justify-end text-green-600 sm:ml-4 mt-2 mx-5 mb-3  sm:mt-0 whitespace-nowrap">
                         Price : {(item.quantity*item.price).toFixed(2)} $
                     </p>
                     
                     </div>
                     <div className="flex items-center gap-2 mt-2">
                           <button
                             onClick={() => decreaseQuantity(item.id)}
                             className="w-8 h-8 flex justify-center items-center bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                           >
                             -
                           </button>
                         
                           <span className="w-8 text-center font-medium">{item.quantity}</span>

                           <button
                             onClick={() => increaseQuantity(item.id)}
                             className="w-8 h-8 flex justify-center items-center bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                           >
                             +
                           </button>
                         </div>

                    <div className="flex gap-3 mt-3 justify-end">
                        
                      <button onClick={()=>removehandler(item)} className="bg-gray-700 text-white px-4 py-2 rounded-xl hover:bg-gray-900 transition-colors duration-300">
                        Remove
                      </button>
                      <button
                        onClick={() => dataprhandlerr(item)}
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-300 transition-colors duration-300"
                      >
                        Info
                      </button>

                    </div>
                    
                  </div>

               
                </div>
              ))}
          </div>

          {/* ستون سمت راست - جمع سفارشات */}
         <div className="bg-white shadow-md rounded-2xl p-6 sticky top-4 h-fit">
           <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
           <p className="text-gray-600 font-bold mb-2">Items: {cart.reduce((sum,item)=>sum+item.quantity , 0)}</p>
           <p className="text-gray-600 font-bold mb-2">
              Total Price: $
              {cart.reduce((sum, item) => sum + parseFloat( item.price * item.quantity), 0).toFixed(2)}
           </p>
            <button className="bg-blue-600 text-white w-full py-2 rounded-xl mt-3 hover:bg-blue-700 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>

      
      <Footer/>
    </>
  );
}

export default Cartshop;
