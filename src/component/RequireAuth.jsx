import { useContext } from "react"
import { productcontext } from "./Context"
import { Navigate } from "react-router-dom"

function RequireAuth({children }){
    const {user}=useContext(productcontext)

    if(!user||user==''||user==null){
       return <Navigate to='/'/>
    }else{
      return  children 
    }

   
}

export default RequireAuth