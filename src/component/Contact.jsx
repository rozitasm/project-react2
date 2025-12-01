import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

export default function Contact() {
  const [message,setMessage]=useState([])

  const messagehandler=(e)=>{
     e.preventDefault();
    let data={
      Firstname:e.target.firstname.value,
      Lastname:e.target.lastname.value,
      Email:e.target.email.value,
      Phone:e.target.phone.value,
      Message:e.target.message.value,
    }
    debugger
    setMessage(data)
  }
  return (
    <>
    <div className=' px-6   lg:px-8'>
         <h2 className="text-balance text-center mb-4 text-4xl font-semibold tracking-tight  sm:text-5xl">Contact us</h2>
         <p className="text-center max-w-2xl mx-auto text-gray-600 mt-4 leading-relaxed">
  We’re here to help with anything you need — questions about our products, support with your order, 
  or simply guidance in choosing the perfect item.  
  Feel free to reach out and our team will get back to you shortly.
</p>
    
    <div className='grid sm:grid-cols-2 mt-10'>
        
            <div>
                    <div >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
    
      {/* <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 px-8 py-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
         
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white/5 outline outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                 
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow bg-transparent py-1.5 pl-1 pr-3 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                defaultValue={''}
              />
            </div>
          </div>
         
        </div>
        <div className="mt-10 px-8">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Let's talk
          </button>
        </div>
      </form> */}
       <form  onSubmit={messagehandler} className="mx-auto max-w-xl mb-10 rounded-2xl shadow-xl p-8 backdrop-blur-sm border-2 ">
        <div className="mb-8">
  <h3 className="text-xl font-semibold text-gray-800">
    Send us a message
  </h3>

</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className=" block text-gray-700 font-bold mb-1">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name='firstname'
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-gray-700 font-bold mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name='lastname'
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name='email'
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="john@example.com"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-1">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name='phone'
              placeholder="123-456-7890"
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              name='message'
              placeholder="Write your message..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button type='submit' className="mt-6 w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-2 rounded-md shadow-sm transition">
            Let's Talk
          </button>
        </form>

               </div> 
            </div >
            <div className=''>

                <div className='flex flex-row flex-wrap gap-5 ms-5 '>
                    <div className='w-full sm:w-[35%]'>
                            <div  className="mx-auto my-2 max-w-xl rounded-2xl border-2 text-gray-800 shadow-lg p-8 backdrop-blur-sm border ">
                                <h2 className='font-bold'>Address :</h2>
                                <p>tehran</p>
                            </div >
                            <div  className="mx-auto max-w-xl rounded-2xl  border-2 text-gray-800 shadow-lg p-8 backdrop-blur-sm border ">
                                <h2 className='font-bold'>Email :</h2>
                                <p>roz.sama99@gmail.com</p>
                            </div>
                    </div>
                    <div className='w-full sm:w-[35%]' >
                        <div  className="mx-auto max-w-xl my-2 rounded-2xl text-gray-800 border-2 shadow-lg p-8 backdrop-blur-sm border ">
                            <h2 className='font-bold'>
                                Phone :
                            </h2>
                            <p>
                                021-2222
                            </p>
                        </div>
                        <div  className="mx-auto max-w-xl rounded-2xl text-gray-800 border-2 shadow-lg p-8 backdrop-blur-sm border ">
                            <h2 className='font-bold'>
                                Hours :
                            </h2>
                            <p>
                                mon-fri:8am -17pm
                            </p>

                        </div>
                        
                    </div>
                </div>
                {<iframe
                 src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10163.120051055075!2d51.415568861125955!3d35.72771717874453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1763886454315!5m2!1sfa!2s"
                 width="75%"
                 height="300"
                 style={{ border: 0 }}
                 allowFullScreen=""
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 className='my-8 mx-2'
               />}

            </div>
    </div>
    </div>
    
    </>
  )
}
