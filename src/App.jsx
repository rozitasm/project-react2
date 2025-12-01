import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Context, { productcontext } from './component/Context'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from './component/Signup.jsx'
import Login from './component/Login.jsx'
import Home from './component/Home.jsx'

import Product from './component/Product.jsx'


import Cartshop from './component/Cartshop.jsx'
import Contact from './component/Contact.jsx'
import Profile from './component/Profile.jsx'
import Productinfo from './component/Productinfo.jsx'
import RequireAuth from './component/RequireAuth.jsx'
import ProductCat from './component/productCat.jsx'

function App() {
  const [count, setCount] = useState(0)
  const {user,selectpr,cart}=useContext(productcontext)

  return (
    <>
    
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/:item'element={<RequireAuth> <ProductCat/> </RequireAuth>}/>
         <Route path='/Home' element={ <RequireAuth> <Home/> </RequireAuth>}/>
         <Route path='/products/:id' element={<RequireAuth> <Product/> </RequireAuth>}/>
         <Route path='/productinfo/:title' element={<RequireAuth> <Productinfo/> </RequireAuth>}/>
         <Route path='/Contact' element={<RequireAuth> <Contact/> </RequireAuth>}/>
         <Route path='/Cartshop' element={<RequireAuth> <Cartshop/> </RequireAuth>}/>
         <Route path='/profile'  element={<RequireAuth> <Profile/> </RequireAuth>}/>
      </Routes>
    </BrowserRouter>
     {/* <Data/> */}
     
  
    </>
  )
}

export default App
