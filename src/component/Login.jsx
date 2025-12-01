

import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { useContext, useEffect, useState } from "react";
import { productcontext } from "./Context";

function Login() {
 const [username,setUsername]=useState('')
 const [password ,setPassword]=useState('')
//  const [users,setUsers]=useState('')
 const {user,setUser}=useContext(productcontext)

 const navigate = useNavigate('')

    const userhandler=(e)=>{
        let val=e.target.value
            setUsername(val)
        
    }

    const passwordhandler=(e)=>{
        let value=e.target.value
            setPassword(value)
    }
   

    const clickhandler=(e)=>{
         e.preventDefault()
         
        
                fetch('https://api.escuelajs.co/api/v1/users').then((res)=>res.json())
                .then((resp)=>{
                      const founduser=resp.find((e)=>e.name==username )
                
                if(founduser){
                    setUser(founduser)
                    navigate('/Home')
                }else{
                    alert('حساب کاربری وجود ندارد ')
                    navigate('/')
                }})
    }

     useEffect(() => {
    setUser(null);
    localStorage.removeItem("datauser");
   }, []);

  return (
    
    <div className="bg-[#142044]  w-full h-screen flex items-center justify-center">
      <div className="sm:w-[80%] md:w-[70%] lg:w-[60%] h-[550px] flex rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl bg-white/90 backdrop-blur-xl">
        
        {/* سمت چپ عکس */}
        <div className="lg:w-1/2 lg:block hidden h-full relative   ">
        <h2 className=" test1 absolute top-[25%] left-[32%] -translate-x-1/2 -translate-y-1/2 font-story text-5xl font-bold drop-shadow-lg tracking-wide">Welcome </h2>
        <h3 className=" test1 absolute top-[37%] left-[37%] -translate-x-1/2 -translate-y-1/2 font-story text-4xl font-bold drop-shadow-lg tracking-wide">to my page!</h3>
          <img
            src="/img/9.png"  
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* سمت راست فرم */}
        <div className="lg:w-1/2 sm:w-full flex flex-col justify-center items-center p-10">
        <form onSubmit={clickhandler}>
          <h1 className="tfont text-4xl font-bold text-center text-gray-800 mb-10">Login</h1>

          <div className="flex flex-col gap-4 w-full max-w-xs">
            <input
              type="text"
              placeholder="Username = Admin"
            
              onChange={userhandler}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5AC1F0]"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={passwordhandler}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5AC1F0]"
            />
            {/* <button className="mt-4 bg-[#5AC1F0] text-white py-2 rounded-lg hover:bg-[#4b9187] transition-all">
              Send
            </button> */}
         
         
                      <button
                   
                  name="login"
                  id="submit_btn"
                  type="submit"
                  className="group relative text-center overflow-hidden rounded-xl bg-gradient-to-br from-[#5AC1F0] to-blue-600 my-2 py-2 font-medium text-white shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="relative z-10 cursor-pointer">Sign in</span>
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition group-hover:translate-x-0 cursor-pointer" />
                  
                </button>
                  
                  <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                  <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    or
                  </span>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="cursor-pointer rounded-xl border border-slate-300 bg-white/70 px-3 py-1 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-white hover:shadow hover:text-indigo-950 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200"
                  >
                    Continue with Google
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer rounded-xl border border-slate-300 bg-white/70 px-3 py-1 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-white hover:shadow hover:text-indigo-950 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200"
                  >
                    Continue with GitHub
                  </button>
                </div>
                <div className="px-4 py-1 text-center ">
              <p className="text-sm ">
                Don’t have an account?
                <Link
                  to={'/signup'}
                  className="mx-1 font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Create one
                </Link>
                it’s free
              </p>
            </div>
               </div>
               </form>
            </div>


        
    
        

      </div>
    </div>
  );
}

export default Login;


