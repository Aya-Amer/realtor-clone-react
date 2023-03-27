import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    function pathMathRoute (route){       
        if (route === location.pathname)
        return true;
    }      
  return (
    <div className='bg-white shadow-sm border-b top-0 sticky z-50'>
    <header className='max-w-6xl flex justify-between items-center px-3 mx-auto'>
      <div><img className="h-5 cursor-pointer" src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
       alt="logo" 
      onClick={()=> navigate("/")}/></div>
      <div>
        <ul className='flex space-x-10'>
            <li to="./" className={`py-3 font-semibold text-sm
            cursor-pointer border-b-[3px] whitespace-nowrap 
            ${pathMathRoute("/") ? "border-b-red-500 text-black":
            " text-gray-400 border-b-transparent"}`} 
            onClick={()=> navigate("/")} >Home</li>
            <li to="./offers" className={`py-3 font-semibold  text-sm 
            cursor-pointer whitespace-nowrap  border-b-[3px] 
            ${pathMathRoute("/offers") ? "border-b-red-500 text-black"
            :"text-gray-400 border-b-transparent"}`} 
            onClick={()=> navigate("/offers")}>Offers</li>
            <li to="./sign-in" className={`py-3 font-semibold text-gray-400 text-sm 
            whitespace-nowrap cursor-pointer border-b-[3px] 
            ${pathMathRoute("/sign-in") ? "border-b-red-500 text-black"
            :"text-gray-400 border-b-transparent"}`} 
            onClick={()=> navigate("/sign-in")}>Sign in</li>
        </ul>
      </div>
    </header>
    </div>
  )
}
