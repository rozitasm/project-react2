
import { useContext, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { productcontext } from './Context'
import { Link } from 'react-router-dom'



export default function Showcart({ open, setOpen, products }) {

  const {cart,setCart}=useContext(productcontext)

  const removehandler=(e)=>{
    setCart(pr=>pr.filter((item)=>item.cartId!==e.cartId))
      
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
    <div>
      
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {cart.map((product) => (
                            <li key={product.id} className="flex py-6">
                              <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img src={product.images[0]} className="size-full object-cover" />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    {/* <h3>
                                      <a href={product.href}>{product.name}</a>
                                    </h3> */}
                                    <p className="ml-4">price: {(product.price*product.quantity).toFixed(2)}$</p>
                                  </div>
                               
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                           <button
                             onClick={() => decreaseQuantity(product.id)}
                             className="w-8 h-8 flex justify-center items-center bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                           >
                             -
                           </button>
                         
                           <span className="w-8 text-center font-medium">{product.quantity}</span>

                           <button
                             onClick={() => increaseQuantity(product.id)}
                             className="w-8 h-8 flex justify-center items-center bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                           >
                             +
                           </button>
                         </div>
                                
                                <div className="flex flex-1 items-end justify-end text-sm">
                                 

                                  <div className="flex">
                                    <button onClick={()=>removehandler(product)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{cart.reduce((sum, item) => sum + parseFloat( item.price * item.quantity), 0).toFixed(2)}$</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <Link
                        to={'/Cartshop'}
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Checkout
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
