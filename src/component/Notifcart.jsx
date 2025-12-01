

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function Notifcart({ open, onClose}) {
    
  

  return (
    <div>
      
      <Dialog open={open} onClose={onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center sm:justify-end  p-3 text-center mt-10 me-1 sm:items-start sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl outline outline-1 -outline-offset-1 outline-white/10 transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <button
               type="button"
                   onClick={() => onClose(false)}
                   className="absolute right-3 top-3 rounded-md p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                 >
                   <XMarkIcon className="h-5 w-5" />
                 </button>
              <div className="bg-white px-4 pb-4 pt-5 sm:py-9 sm:p-6 ">
                <div className="sm:flex sm:items-start">
                  {/* <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-400" />
                  </div> */}
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-green-500/10 sm:mx-0 sm:size-10">
                      <ShoppingCartIcon aria-hidden="true" className="size-6 text-green-500" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold ">
                      Added to Cart
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-800">
                        Item successfully added to your cart!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}


export default Notifcart