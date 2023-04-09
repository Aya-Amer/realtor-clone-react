import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export default function Header() {
    const [pageState, setPageState] = useState("Sign In");
    const auth = getAuth();
    const navigate = useNavigate();
    const location = useLocation();
    function pathMatchRoute (route){       
        if (route === location.pathname)
        return true;
    }  
    useEffect(() =>{
      onAuthStateChanged(auth,(user)=>{
        if (user){
          setPageState("Profile")
        }
        else{
          setPageState("Sign In")
        }
      })
    }, [auth])   
  return (
    <div className='bg-white shadow-sm border-b top-0 sticky z-40'>    
    <header className='max-w-6xl flex justify-between items-center px-3 mx-auto'>
      <div><img className="h-5 cursor-pointer" src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
       alt="logo" 
      onClick={()=> navigate("/")}/></div>
      <div>
        <ul className='flex space-x-10'>
            <li to="./" className={`py-3 font-semibold text-sm
            cursor-pointer border-b-[3px] whitespace-nowrap 
            ${pathMatchRoute("/") ? "border-b-red-500 text-black":
            " text-gray-400 border-b-transparent"}`} 
            onClick={()=> navigate("/")} >Home</li>
            <li to="./offers" className={`py-3 font-semibold  text-sm 
            cursor-pointer whitespace-nowrap  border-b-[3px] 
            ${pathMatchRoute("/offers") ? "border-b-red-500 text-black"
            :"text-gray-400 border-b-transparent"}`} 
            onClick={()=> navigate("/offers")}>Offers</li>             
            <li  to="./sign-in" className={`py-3 font-semibold text-gray-400 text-sm 
            whitespace-nowrap cursor-pointer border-b-[3px] 
            ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) ? "border-b-red-500 text-black"
            :"text-gray-400 border-b-transparent"}`} 
            onClick={()=> navigate("/profile")}>{pageState}</li> 
        </ul>
      </div>
    </header>
    </div>
  )
}
