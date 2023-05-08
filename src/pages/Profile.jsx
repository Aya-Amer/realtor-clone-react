import { getAuth, updateProfile } from 'firebase/auth';
import { getDocs, collection, doc, orderBy, query, updateDoc, where, deleteDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { FcHome } from 'react-icons/fc';
import ListingItem from '../components/ListingItem';

export default function Profile() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [editMode,setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);
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
 
 useEffect(()=>{
  async function fetchUserListings() {
    const listingRef = collection(db, "listings");
    const q = query(
      listingRef,
      where("userRef", "==", auth.currentUser.uid),
      orderBy("timestamp", "desc")
    );
    const querySnap = await getDocs(q);
    let listings = [];
    querySnap.forEach((doc) => {
      return listings.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    setListings(listings);
    setLoading(false);
  }
  fetchUserListings();
 },[auth.currentUser.uid])
 function onEdit(listingID){
  navigate(`/edit-listing/${listingID}`)
 }
 async function onDelete(listingID){
   if(window.confirm("Are you sure you want to delete?")) {
    await deleteDoc(doc(db,"listings",listingID));
    const listingsUpdated = listings.filter((listing)=>
      listing.id !== listingID
    )
    setListings(listingsUpdated);
    toast.success("Successfully deleted the listing");
   }
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
        
        <button type='submit' 
        className=' w-full flex justify-center items-center py-3 px-7 text-sm font-medium shadow-md mt-2
         text-white hover:shadow-lg active:bg-blue-800 bg-blue-600 hover:bg-blue-700 border rounded 
         transition ease-in-out duration-200 cursor-pointer uppercase'>
          <Link to="/create-listing" className="flex justify-center items-center">
          <FcHome className='mr-2 text-3xl bg-red-200 p-1 rounded-full border-2'/>sell or rent your house </Link>
        </button>
        
      </form>
      </div>
      
    </section>
    <div className="max-w-6xl px-3 mt-6 mx-auto">
        {!loading && listings.length > 0 && (
          <>
            <h2 className="text-2xl text-center font-semibold mb-6">
              My Listings
            </h2>
            <ul className='grid md:grid-cols-2  sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-5'>
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data}
                  onEdit={()=>onEdit(listing.id)}
                  onDelete={()=>onDelete(listing.id)}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  )
}
