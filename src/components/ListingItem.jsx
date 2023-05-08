import React from 'react'
import { Link } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {FaPen} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Moment from 'react-moment'

export default function ListingItem({ listing, id, onDelete, onEdit }) {
 
  return (
    <li className='hover:shadow-xl rounded-md bg-white shadow-md relative flex flex-col justify-between 
     overflow-hidden transition-shadow duration-150'>
      <Link to={`/category/${listing.type}/${id}`} className='contents'>
        <img className='h-[170px] object-cover w-full hover:scale-105 transition-scale duration-200 ease-in'  
        src={listing.imgUrls[0]} loading="lazy"/>
      
      <Moment fromNow className='absolute  top-2 left-2 bg-[#3377cc] text-white px-2 rounded-md text-center 
      uppercase shadow-lg'><p>{listing.timestamp?.toDate()}</p></Moment>
      <div className="flex items-center space-x-1 mt-2 ml-2">
        <MdLocationOn className='text-green-600 font-semibold text-lg'/>
        <p className='text-gray-600 text-sm font-medium truncate'>{listing.address}</p>
      </div>
      
      <p className='font-semibold text-xl truncate ml-3'>{listing.name}</p>
      <p className='font-semibold text-lg text-[#457b9d] ml-3'>${listing.offer ? listing.discountPrice.toString()
      .replace(/(\d)(?=(\d{3})+$)/g, '$1,') : listing.regularPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}
      {listing.type === "rent"&&(" / Month")}</p>
      </Link>
      <div className="flex justify-between mx-3 mb-2 ">
        <div className='flex space-x-4  font-bold text-sm'>
            <div>{ listing.bedRoom > 1 ? `${listing.bedRoom} Beds`: "1 Bed"}</div>
            <div>{ listing.bathRoom > 1 ? `${listing.bathRoom} Baths`: "1 Bath"}</div>
        </div>
        <div className="flex space-x-1">
            <FaPen className='text-sm font-thin cursor-pointer' onClick={()=>onEdit(listing.id)}/> 
            <MdDelete className='text-red-500 cursor-pointer' onClick={()=>onDelete(listing.id)}/>
        </div>
      </div>     
    </li>
  )
}
