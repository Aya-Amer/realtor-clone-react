import React, { useState } from 'react'
export default function CreateListing() {
    const [formData,setFormData] = useState({
        type:"rent",
        name:"",
        bedRoom:1,
        bathRoom:1,
        parkingSpot:false,
        furnished:false,
        address:"",
        description:"",
        offer:false,
        regularPrice:0,
        discountPrice:0,
    });
    const {type, name, bedRoom, bathRoom, parkingSpot, furnished, address, description, offer, regularPrice, discountPrice} = formData;
    function  onChange (e){
        debugger;
    setFormData((prevData)=>({
        ...prevData,
        [e.target.id]:e.target.value, 
    }))
    }
  return (
    <main className="mx-auto max-w-md px-2">
        <h1 className="text-center w-full font-bold text-3xl">Create a Listing</h1>
        <form>            
            <p className="text-lg mt-6 font-semibold">Sell/Rent</p>
            <div className='flex justify-around w-full gap-5'>
                <button type="button" id="type" value="sell" onClick={onChange} className=
                {`uppercase py-2 font-semibold border rounded w-full text-md shadow-md ${type === "rent" ? "bg-white text-black" : "bg-gray-700 text-white"}`}>sell</button>
                <button type="button" id="type" value="rent" onClick={onChange} className=
                {`uppercase py-2 font-semibold border rounded w-full text-md shadow-md ${type === "sell" ? "bg-white text-black" : "bg-gray-700 text-white"}`}>rent</button>
            </div>             
            <p className="text-lg mt-6 font-semibold">Name</p>     
            <input placeholder='Name' type='text' id="name" value={name} onChange={onChange} maxLength="32" minLength="10" required
            className='focus:border-slate-600 focus:text-gray-700 focus:bg-white w-full px-4 py-2 text-xl
                text-gray-700 bg-white transition ease-in-out duration-150 border border-gray-300 rounded'/>
            <div className='flex space-x-6'>
                <div>
                    <p className="text-lg mt-6 font-semibold">Beds</p>     
                    <input id="bedRoom" value={bedRoom} onChange={onChange} type="number" required min="1" max="50"
                    className='focus:border-slate-600 focus:text-gray-700 focus:bg-white px-4 py-1 text-xl w-full
                    text-gray-700 bg-white transition ease-in-out duration-150 border border-gray-300 rounded text-center'/>
                </div>
                <div>
                    <p className="text-lg mt-6 font-semibold">Baths</p>     
                    <input id="bathRoom" value={bathRoom} onChange={onChange} type="number" required min="1" max="50"
                    className='focus:border-slate-600 focus:text-gray-700 focus:bg-white px-4 py-1 text-xl w-full
                    text-gray-700 bg-white transition ease-in-out duration-150 border border-gray-300 rounded text-center'/>
                </div>
            </div> 
            <p className="text-lg mt-6 font-semibold">Parking Spot</p>     
            <div className='flex justify-around w-full gap-5'>
                <button type="button" id="parkingSpot" value={true} onClick={onChange} className=
                {`uppercase py-2 font-semibold border rounded w-full text-md shadow-md ${!parkingSpot ? "bg-white text-black" : "bg-slate-600  text-white"}`}>yes</button>
                <button type="button" id="parkingSpot" value={false} onClick={onChange} className=
                {`uppercase py-2 font-semibold border rounded w-full text-md shadow-md ${parkingSpot ? "bg-white text-black" : "bg-slate-600  text-white"}`}>no</button>
            </div>  
            <p className="text-lg mt-6 font-semibold">Furnished</p>     
            <div className='flex justify-around w-full gap-5'>
                <button type="button" id="furnished" value={true} onClick={onChange} className=
                {`uppercase py-2 font-semibold border rounded w-full text-md shadow-md ${!furnished  ? "bg-white text-black" : "bg-gray-700 text-white"}`}>yes</button>
                <button type="button" id="furnished" value={false} onClick={onChange} className=
                {`uppercase py-2 font-semibold border rounded w-full text-md shadow-md ${furnished  ? "bg-white text-black" : "bg-gray-700 text-white"}`}>no</button>
            </div>    
            <p className="text-lg mt-6 font-semibold">Address</p> 
            <textarea type='text' maxLength="250" id="address" value={address} onChange={onChange} placeholder='Address'
            className="w-full text-md shadow-md font-semibold border rounded py-2 bg-white text-black px-4
             focus:border-slate-600 focus:text-gray-700 focus:bg-white border-gray-300 transition ease-in-out 
             duration-150 "/>   
             <p className="text-lg mt-6 font-semibold">Description</p> 
            <textarea type='text' maxLength="250" id="description" value={description} onChange={onChange} placeholder='Description'
            className="w-full text-md shadow-md font-semibold border rounded py-2 bg-white text-black px-4
             focus:border-slate-600 focus:text-gray-700 focus:bg-white border-gray-300 transition ease-in-out 
             duration-150 "/>    
             <p className="text-lg mt-6 font-semibold">Offer</p>     
            <div className='flex justify-around w-full gap-5'>
                <button type="button" id="offer" value={true} onClick={onChange} className=
                {`uppercase py-2 font-semibold border rounded w-full text-md shadow-md ${!offer ? "bg-white text-black" : "bg-gray-700 text-white"}`}>yes</button>
                <button type="button" id="offer" value={false} onClick={onChange} className=
                {`uppercase py-2 font-semibold border rounded w-full text-md shadow-md ${offer ? "bg-white text-black" : "bg-gray-700 text-white"}`}>no</button>
            </div>              
            <div>
            <p className="text-lg mt-6 font-semibold">Regular Price</p>    
            <div className='flex items-center'> 
            <input id="regularPrice" value={regularPrice} onChange={onChange} type="number" required min="50" 
            max="400000000" className='focus:border-slate-600 focus:text-gray-700 focus:bg-white 
            px-4 py-1 text-xl text-gray-700 bg-white transition ease-in-out duration-150 border
                border-gray-300 rounded text-center'/>                
                { type=== "rent" && (
                    <p className='text-center pl-1'>$ / Month</p>
                )}
                </div>
                </div>
               {offer && (
                <div>
               <p className="text-lg mt-6 font-semibold">Discount Price</p>    
               <div className='flex items-center'>  
            <input id="discountPrice" value={discountPrice} onChange={onChange} type="number" required min="50" 
            max="400000000" className='focus:border-slate-600 focus:text-gray-700 focus:bg-white 
            px-4 py-1 text-xl text-gray-700 bg-white transition ease-in-out duration-150 border
                border-gray-300 rounded text-center'/>
                { type=== "rent" && (
                    <p className='text-center pl-1'>$ / Month</p>
                )}                
                </div>
                </div>)}  
            <p className="text-lg mt-6 font-semibold">Images</p>  
            <p className='text-md font-normal text-gray-600'>The first image will be the cover (max 6)</p>
            <div className='w-full py-1 px-2 bg-white border border-gray-300'>
            <input type="file" id="images"
            onChange={onChange} multiple required accept=".png, .gif, .jpeg"/></div>
            <button type="submit" className='uppercase w-full py-2 px-4 text-white bg-blue-600 focus:bg-blue-700
            focus:text-white transition duration-150 ease-in-out border rounded my-6 text-center'>Create Listing</button>            
        </form>
    </main>
  )
}
