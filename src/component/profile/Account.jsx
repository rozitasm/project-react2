import { useContext } from "react"
import { productcontext } from "../Context"

function Account(){
    const {user}=useContext(productcontext)
    console.log(user)

    return(
        <>
        <section className="mt-10">
           
           <form className="mx-auto max-w-xl mb-10 rounded-2xl  backdrop-blur-sm ">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className=" block text-gray-700 font-bold mb-1">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="John"
                value={user.name}
                disabled
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-gray-700 font-bold mb-1">
                role
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Doe"
                disabled
                value={user.role}
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
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="john@example.com"
              disabled
              value={user.email}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-1">
              password
            </label>
            <input
              type="text"
              disabled
              value={user.password}
              id="phone"
              placeholder="123-456-7890"
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          
         
        </form>
        </section>
        
        </>
    )
}

export default Account