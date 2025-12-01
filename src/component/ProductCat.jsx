import { useContext, useEffect, useState } from "react"
import Header from "./Header"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ChevronDownIcon, ChevronUpIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Quickviews from "./Quickviews";
import Filter from "./Filter";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { productcontext } from "./Context";
import Notifcart from "./Notifcart";
import Footer from "./Footer";
import { v4 as uuidv4 } from 'uuid';

function ProductCat(){
    const [products,setProducts]=useState('')
    const [data,setData]=useState('')
    const [value, setValue] = useState(500);
    const [open ,setOpen]=useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [category,setCategory]=useState([])
    const [selectcategory,setSelectcategory]=useState([])
    const [prcategory,setPrcategory]=useState('')
    const [filterpro,setFilterpro]=useState([])
    const [OpenNotifcart,setOpenNotifcart]=useState(false)

    const {cart,setCart,setSelectpr,selectedCategory,setSelectproduct,Selectproduct }=useContext(productcontext)
    const navigate=useNavigate()
 
  //   useEffect(() => {
  //   if (!selectedCategory) {
  //     navigate("/Home"); // هدایت به Home اگر دستی URL وارد شد
  //   }
  // }, [selectedCategory, navigate]);

  const handleOpenModal = (products) => {
    setSelectedProduct(products);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setOpenModal(false);
  };

    const {item}=useParams()
    console.log(item)

    useEffect(()=>{
        if(item){
            setSelectcategory([item])
        }
    },[item])

    // useEffect(()=>{

    //     fetch(`https://dummyjson.com/products/category/${item}`).then((res)=>res.json()).then((resp)=>setProducts(resp.products))
    // },[item])
    useEffect(()=>{
        fetch('https://dummyjson.com/products/category-list').then((res)=>res.json()).then((resp)=>setCategory(resp))
    
    },[])

    const categoryhandler=(e)=>{
        const valuee=e.target.value

        if(e.target.checked){
             setSelectcategory ((e)=>[...e,valuee])
             console.log(selectcategory)
        }else{
            setSelectcategory( (re)=>re.filter((e)=>e !==valuee))
        }
    

     
    }

    useEffect(()=>{
          if (selectcategory.length === 0){
            setFilterpro([]);
            return;
          } 
             const promises = selectcategory.map(element =>
                 fetch(`https://dummyjson.com/products/category/${element}`)
                   .then(res => res.json())
               );

               Promise.all(promises).then(results => {
                 const merged = results.flatMap(r => r.products);
                 setFilterpro(merged);
               });


    },[selectcategory])

    let arry= filterpro
    
    const filterpr=arry ? arry.filter((e)=>e.price<value):[];


    const dataprhandler=(e)=>{
      
        console.log(e)
        
        setSelectpr(e)
       setSelectproduct(e); // ست کردن state
      navigate(`/products/${e.id}`);
        
        
    }

    const carthandler=(e)=>{
      
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
      console.log(cart)
    }
 
    return(
        <>
        <Header/>
        
             <div className="bg-gray-100 min-h-screen py-10">
             <div className="text-center mb-10">
                  <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 tracking-tight">
                    {item} Products
                  </h1>

                  <p className="text-gray-500 text-sm sm:text-base mt-2">
                    Browse our curated selection of high-quality items.
                  </p>

                  <div className="w-12 h-[2px] bg-gray-300 mx-auto mt-4"></div>
                </div>

            <div>
                <div className="sm:w-full sm:flex">
                    <div className="lg:w-1/5 md:w-1/5 sm:w-full mb-2
                    ">
                     <form className=" lg:block ms-5">
                     
                          <Disclosure as="div" className="border-b mb-2 border-gray-200 bg-white py-4 mx-3 shodow-lg rounded-lg p-2   ">
                            
  
    
                                <DisclosureButton className="group flex w-full items-center justify-between text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-900 p-2">Filter</span>
                                    <span className="ml-6 flex items-center">
                                    {open ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                                    </span>
                                </DisclosureButton>
                                <DisclosurePanel className="pt-6">
                                    <label className="block my-3 font-medium text-gray-800 mx-3">
                                    Price up to: <span className="text-blue-600">${value}</span>
                                    </label>
                                    <input
                                    type="range"
                                    min="50"
                                    max="1000"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    className="w-full p-2 h-4 mb-5 rounded-lg cursor-pointer appearance-none bg-gray-200"
                                    style={{
                                        background: `linear-gradient(to right, #84b9e9ff ${((value - 50) / 950) * 100}%, #e5e7eb ${((value - 50) / 950) * 100}%)`
                                    }}
                                    />
                                </DisclosurePanel>
                                
                        
                            </Disclosure>
                        
                       
                
               

               
                  <Disclosure defaultOpen={true} as="div" className="border-b border-gray-200 bg-white py-4 mx-3 shodow-lg rounded-lg p-2   ">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between   py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900 p-2">Category</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-[:not([data-open])]:hidden" />
                        </span>
                      </DisclosureButton>
                      
                    </h3>
                    <DisclosurePanel className="pt-6 bg-white mx-3">
                      <div className="space-y-4 flex-col h-[80vh]  overflow-y-auto ">
                        {category && category.map((option) => (
                          <div  className="flex gap-3 ">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="flex-1 group grid size-4 grid-cols-1 ">
                                
                                 <input
                                    type="checkbox"
                                    value={option}
                                    name="category"
                                    checked={selectcategory.includes(option)}
                                    onClick={categoryhandler}
                                  />
                                  
                               
                              </div>
                            </div>
                          <label className="text-sm text-gray-600">{option}</label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  
                
              </form>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        
              

           
            </div>
                    </div>
                    <div className="sm:w-4/5 w-full">
                        

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {filterpr && filterpr.map((item) => (
            
          <div
               key={item.id}
              //  onClick={() => handleOpenModal(item)}
               className="bg-white shadow-md hover:shadow-xl rounded-2xl p-4 hover:-translate-y-2 transform transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
             >
               <img
                 src={item.images[0]}
                 alt={item.title}
                 className="w-40 h-40 object-contain mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
               />
               <h2 className="text-md font-semibold mb-1 line-clamp-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                 {item.title}
               </h2>
               <p className="text-gray-500 text-sm mb-2 line-clamp-2">{item.category}</p>
               <p className="text-lg font-bold text-green-600 mb-3">price: {item.price}$</p>
               <div className="flex gap-3 mb-5">
                 <button
                   onClick={(e) =>{
                   
                    carthandler(item)}}
                   className="bg-gray-700 text-white px-4 mx-2 py-2 rounded-xl hover:bg-blue-800 transition-colors duration-300"
                 >
                   Add to Cart
                 </button>
                 <button
                   onClick={() => dataprhandler(item)}
                   className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-300 transition-colors duration-300"
                 >
                   Info
                 </button>
           </div>
         </div>

      
      
        ))}

        <Notifcart  open={OpenNotifcart} onClose={setOpenNotifcart} />
            {/* <Quickviews
        product={selectedProduct}
        isOpen={openModal}
        onClose={handleCloseModal}
      /> */}
      </div>
    </div>
                    </div>
                    
                </div>
                
            </div>
            <Footer/>
     
        </>
    )
}

export default ProductCat