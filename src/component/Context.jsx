import { createContext, useEffect, useState } from "react";

export const productcontext=createContext('')
function Context({children}){
    const [selectpr,setSelectpr]=useState(()=>{
      const dataselectpr=localStorage.getItem('datapr')
      return dataselectpr? JSON.parse(dataselectpr) :[]
    })
    const [cart,setCart]=useState(()=>{
      const datacart=localStorage.getItem('datacart')
      return datacart? JSON.parse(datacart) :[]
    })
    const [user,setUser]=useState(()=>{
      const datauser=localStorage.getItem('datauser')
      debugger
      return datauser? JSON.parse(datauser) :{}
    })
    const [selectedCategory, setSelectedCategory] = useState(()=>{
      const dataselectedCategory=localStorage.getItem('dataselectcat')
      return dataselectedCategory? JSON.parse(dataselectedCategory) :[]
    });
    const [selectproduct,setSelectproduct]=useState(()=>{
      const dataselectproduct=localStorage.getItem('dataselectpr')
      return dataselectproduct? JSON.parse(dataselectproduct) :null
    })


    useEffect(()=>{
      localStorage.setItem('datapr',JSON.stringify(selectpr))
    },[selectpr])

      useEffect(()=>{
      localStorage.setItem('datacart',JSON.stringify(cart))
    },[cart])

      useEffect(()=>{
      localStorage.setItem('datauser',JSON.stringify(user))
    },[user])

      useEffect(()=>{
      localStorage.setItem('dataselectcat',JSON.stringify(selectedCategory))
    },[selectedCategory])

    useEffect(()=>{
      localStorage.setItem('dataselectpr',JSON.stringify(selectproduct))
    },[selectproduct])

    return(
        <>
        <productcontext.Provider value={{selectpr,setSelectpr,setCart,
          cart,user,setUser,selectedCategory,setSelectedCategory,selectproduct,setSelectproduct}}>
          {children}
        </productcontext.Provider>
        </>
    )
}


export default Context;