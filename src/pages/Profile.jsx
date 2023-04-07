import { getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
  function ApplyChange(){
    setEditMode((preValue) => !preValue);
  }
  return (
    <>
    <section className='mx-auto max-w-6xl flex justify-center items-center flex-col'>
      <h1 className='text-center font-bold text-3xl mt-6'>My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
      <form  >
        <input placeholder='Full Name' type='text' id='name' value={name} disabled
        className={ editMode ? 'bg-red-200 w-full c transition ease-in-out border-gray-300 border rounded text-gray-700' 
        : 'bg-white w-full border-gray-300 border py-2 px-3 rounded text-gray-700'} 
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
        
      </form>
      </div>
    </section>
    </>
  )
}
