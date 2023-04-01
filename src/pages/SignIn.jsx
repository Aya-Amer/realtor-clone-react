import  { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';
export default function SignIn() {
    const [formData, setFormData] = useState({
email:"",
password:""
    })
    const {email,password} = formData ;
    function changeForm(e){
    setFormData({...formData,[e.target.id]:e.target.value})
    }
    function signInSubmit(e){
        e.preventDefault();
        
    }
    const [showPassword , setShowPassword] = useState(false)
  return (
    <section className='max-w-6xl mx-auto px-4'>
        <h4 className='text-center font-bold text-3xl mt-6'>Sign In</h4>
        <div className='flex justify-center items-center h-full g-6 flex-wrap px-6 py-12'>
            <div className='md:w-[67%] lg:w-6/12 md:mb-6 mb-12'>
            <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="key" className='w-full rounded-2xl'/>
            </div>
            <div className='w-full md:w-8/12 lg:w-5/12 lg:ml-20'>
                <form>
                    <input className='w-full px-4 py-2 text-gray-700 font-medium text-xl border-gray-300 rounded
                     bg-white transition ease-in-out'                     
                    type="text" id="email" placeholder='Email address' onChange={changeForm}
                    value={email}/>
                    <div className='relative mt-5'>
                    <input className=' w-full pl-3 py-2 font-medium text-xl border-gray-300 rounded bg-white
                     text-gray-700 transition ease-in-out' 
                    type={showPassword ? "text": "password"}
                    id ="password" placeholder='Password' onChange={changeForm}
                    value={password}/>
                    {showPassword ?
                    <AiFillEyeInvisible className='absolute right-3 top-4 cursor-pointer'
                    onClick={()=>setShowPassword((prevState)=>!prevState)}/>:
                    <AiFillEye className='absolute right-3 top-4 cursor-pointer' 
                    onClick={()=>setShowPassword((prevState)=>!prevState)}/>           
                    }
                    <div className='flex justify-between items-center whitespace-nowrap text-sm sm:text-lg mt-4'>
                        <p >Don't have an account?
                        <Link to="/sign-up" className='text-red-600 hover:text-red-700 transition duration-200'>Register</Link></p>
                           <p><Link to="/forgot-password" className='text-blue-600 hover:text-blue-800 transition 
                            duration-200 ease-in-out ml-1'>
                                Forgot password?</Link></p> </div>
                        
                    </div>
                    <button type="submit" onSubmit={signInSubmit}
                    className='uppercase bg-blue-600 rounded w-full py-3 px-7 text-sm font-medium text-center mt-5 text-white'>
                    sign in</button>
                    <div className='flex my-4 items-center before:border-t before:flex-1
                    before:border-gray-300 after:border-t after:flex-1
                    after:border-gray-300'><p className='text-center font-semibold mx-4'>
                        OR</p></div>
                        <button type="button" className='w-full text-center bg-red-500 rounded flex items-center justify-center
                        py-3 mt-5 text-sm font-medium text-white uppercase'><FcGoogle className='bg-white rounded-lg mr-2 text-lg'/>
                        continue with google</button>
                </form>               
            </div>
        </div>      
    </section>
  )
}
