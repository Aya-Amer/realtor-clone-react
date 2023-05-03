import { getAuth, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { FcHome } from 'react-icons/fc';

export default function Profile() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [editMode,setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name:auth.currentUser.displayName,
    email: auth.currentUser.email,
    
  })
const {name,email} = formData;
  function onSignOut(){
      auth.signOut();
      navigate("/");
  }
  function editClicked() {
    setEditMode((preValue) => !preValue);
  }
  async function ApplyChange(e){
    setEditMode((preValue) => !preValue);
    try {
      if(auth.currentUser.displayName != name){
        // update profile data in Authentication
      await  updateProfile(auth.currentUser,{
          displayName:name
      })
      // update profile data in fire store
      const docRef = doc(db,"users",auth.currentUser.uid);
      await updateDoc(docRef, {
        name,
      })
      toast.success("complete updated successful")
      }
      
    } catch (error) {
      toast.error("Could not update the profile details")
    }
   
  }
  function onChangeName (e){
    setFormData((preValue)=>({
      ...preValue,
      [e.target.id]:e.target.value,
    }))
  }
  function onSellOrRentHouse(){

  }
  return (
    <>
    <section className='mx-auto max-w-6xl flex justify-center items-center flex-col'>
      <h1 className='text-center font-bold text-3xl mt-6'>My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
      <form  >
        <input placeholder='Full Name' type='text' id='name' onChange={onChangeName} value={name} disabled={!editMode}
        className={ ` w-full border-gray-300 border py-2 px-3 rounded text-gray-700 
        ${editMode && "bg-red-200 focus:bg-red-200"}`} 
         />
        <input className='bg-white w-full mb-6 py-2 px-4 border-gray-300 border 
         rounded text-gray-700 my-5' value={email} id="email" disabled/>
        <div className='flex justify-between align-middle flex-nowrap'>
          <div><p>Do want to change your name?
            <button type="button" className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer' 
            onClick={editMode ? ApplyChange :
               editClicked}>{editMode ? 'Apply Change' : 'edit'}</button>
          </p></div>
          <button type="button"  onClick={onSignOut}
          className='text-blue-600  hover:text-blue-700 transition ease-in-out duration-200 cursor-pointer'>Sign out</button>
        </div>
        
        <button type='submit' onClick={onSellOrRentHouse}
        className=' w-full flex justify-center items-center py-3 px-7 text-sm font-medium shadow-md
         text-white hover:shadow-lg active:bg-blue-800 bg-blue-600 hover:bg-blue-700 border rounded 
         transition ease-in-out duration-200 cursor-pointer uppercase'>
          <Link to="/create-listing" className="flex justify-center items-center">
          <FcHome className='mr-2 text-3xl bg-red-200 p-1 rounded-full border-2'/>sell or rent your house </Link>
        </button>
        
      </form>
      </div>
    </section>
    </>
  )
}
