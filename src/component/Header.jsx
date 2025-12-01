

import { useContext, useEffect, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom'
import Showcart from './Showcart'
import { productcontext } from './Context'


const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [Category,setCategory]=useState('')
   const [openCart, setOpenCart] = useState(false)
   const {cart,setSelectedCategory }=useContext(productcontext)
   const navigate = useNavigate();

  useEffect(()=>{
    fetch('https://dummyjson.com/products/category-list').then((res)=>res.json()).then((resp)=>{
        setCategory(resp)
    })
  },[])

  return (
    <>
    
    <header className="bg-[#142044]">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to={'/Home'} className="-mx-1.5 px-1.5 text-4xl font-bold  text-white ">
            RS
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
             <Link to={'/Home'} className="text-sm/6 font-semibold text-white hover:-translate-y-1 hover:scale-110 duration-300">
            Home
          </Link>
          <Popover className="relative">
            
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white hover:-translate-y-1 hover:scale-110 duration-300">
              Category
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-500" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-6 min-w-[1100px] max-w-md -translate-x-1/2 overflow-hidden rounded-xl bg-gray-200 outline-5 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4 grid grid-cols-4 gap-3">
                {Category && Category.map((item) => (
                  <div
                    key={item}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-black/5 hover:-translate-y-1 hover:scale-140 duration-300"
                  >
                   
                    <div className="flex-auto">
                     <button
                       key={item}
                        onClick={() => {
                          setSelectedCategory(item); 
                          navigate(`/${item}`);
                        }}
                        className="block font-semibold"
                         >
                        {item}
                     </button>
                 
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="grid grid-cols-2 divide-x divide-white/10 bg-gray-700/50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white hover:bg-gray-700/50"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-500" />
                    {item.name}
                  </a>
                ))}
              </div> */}
            </PopoverPanel>
          </Popover>

         
          <button onClick={()=>navigate("/Home#aboutus")} className="text-sm/6 font-semibold text-white hover:-translate-y-1 hover:scale-110 duration-300">
            about us
          </button>
          <button onClick={()=>navigate("/Home#contact")}  className="text-sm/6 font-semibold text-white hover:-translate-y-1 hover:scale-110 duration-300">
            contact
          </button>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1  lg:justify-end">
          {/* <a href="#" className="text-sm/6 font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
           <div id="header-icons" className="hidden lg:flex text-white">
                  
                    <Popover>
                            <PopoverButton>
                    <div 
                        className="flex px-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300"
                    >
                   
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16 5.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm1 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-12.5 14c0-2.143.486-3.732 1.596-4.796C7.212 13.634 9.058 13 12 13c2.942 0 4.788.635 5.904 1.704 1.11 1.064 1.596 2.652 1.596 4.796a.5.5 0 0 0 1 0c0-2.275-.514-4.186-1.904-5.518C17.212 12.656 15.058 12 12 12c-3.058 0-5.212.656-6.596 1.982C4.014 15.314 3.5 17.225 3.5 19.5a.5.5 0 0 0 1 0Z"
                            ></path>
                        </svg>
                        
                        
                                  <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-500" />
                    </div>
                            </PopoverButton>
                        <PopoverPanel  transition
                                 className="absolute right-[15%] z-10 mt-5 w-[12%] max-w-md  overflow-hidden rounded-md bg-gray-200 outline-5 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                                 
                                     
              <div className="p-3">
             
                  <div
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6  ">
                   
                    <div className="flex-auto text-black">
                      <Link to={'/Login'}  className="block font-semibold mb-2 px-1 hover:-translate-y-1 hover:scale-140 duration-300"
                   >
                       Logout
                        <span className="absolute inset-0" />
                      </Link>
                    <Link to={'/profile'} className="block font-semibold py-2 px-1  hover:-translate-y-1 hover:scale-140 duration-300"
                  >
                       Profile
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  </div>
             
              </div>
          
                      </PopoverPanel>      
                    </Popover>
                       <button 
                        onClick={()=>setOpenCart(true)}
                        className="px-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300"
                    >
                      
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="16.75" cy="19.949" r=".75"></circle>
                            <circle cx="9.75" cy="19.949" r=".75"></circle>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18 18.2a.5.5 0 0 0 0-1h-7.99a2.5 2.5 0 0 1-2.46-2.06l-.123-.688h9.16a2.5 2.5 0 0 0 2.355-1.66l1.55-4.34a1.5 1.5 0 0 0-1.413-2.004H5.997l-.065-.364A3.5 3.5 0 0 0 2.488 3.2h-.99a.5.5 0 1 0 0 1h.99a2.5 2.5 0 0 1 2.46 2.06l1.617 9.057a3.5 3.5 0 0 0 3.446 2.884H18ZM6.176 7.45l12.903-.001a.5.5 0 0 1 .47.668l-1.548 4.34a1.5 1.5 0 0 1-1.413.996h-9.34L6.176 7.45Z"
                            ></path>
                        </svg>
                        <div className="absolute">
                           
                                <span className="bg-red-900 text-white text-xs relative bottom-9 left-4 py-0.5 px-1.5 rounded-full">
                                     {cart.reduce((total, item) => total + (item.quantity || 1), 0)}
                                </span>
                           
                        </div>
                   </button>
                   <Showcart open={openCart} setOpen={setOpenCart} products={products} />
                </div>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                       <Link
                  to={'/home'}
                  className="-mx-3 block rounded-lg px-6 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Home
                </Link>
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                    Category
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                        {Category && Category.map((cat) => (
                     <DisclosureButton
                          key={cat}
                          as="a"
                          href={`/${cat}`} 
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                        >
                          {cat}
                        </DisclosureButton>
                      ))}

                      
                    </DisclosurePanel>
                </Disclosure>
             
                <button
                onClick={()=>navigate("/Home#aboutus")}
                
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  about us
                </button>
                <button

                onClick={()=>navigate("/Home#contact")}
                
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  contact
                </button>
              </div>
              <div className="py-6">
                <Link
                  to={'/profile'}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Profile
                </Link>
                 <Link
                  to={'/Cartshop'}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Cart
                </Link>
                <Link
                  to={'/Login'}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Logout
                </Link>
               
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    
    </>
  )
}

export default Header;