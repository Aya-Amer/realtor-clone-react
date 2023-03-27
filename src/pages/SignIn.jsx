import  { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
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
    <section className='max-w-6xl mx-auto'>
        <h4 className='text-center font-bold text-3xl mt-6'>Sign In</h4>
        <div className='flex justify-center items-center h-full g-6 flex-wrap'>
            <div className='md:w-8/12 lg:w-6/12'>
            <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className='rounded-xl'/>
            </div>
            <div className='w-full md:w-8/12 lg:w-5/12'>
                <form>
                    <input className='w-full pl-3 py-2 font-medium text-xl border rounded bg-white'                     
                    type="text" id="email" placeholder='Email address' onChange={changeForm}
                    value={email}/>
                    <div className='relative mt-5'>
                    <input className=' w-full pl-3 py-2 font-medium text-xl border rounded bg-white ' 
                    type={showPassword ? "text": "password"}
                    id ="password" placeholder='Password' onChange={changeForm}
                    value={password}/>
                    {showPassword ?
                    <AiFillEyeInvisible className='absolute right-3 top-4'
                    onClick={()=>setShowPassword(!showPassword)}/>:
                    <AiFillEye className='absolute right-3 top-4' 
                    onClick={()=>setShowPassword(!showPassword)}/>           
                    }
                    <div className='flex justify-between items-center flex-nowrap mt-5'>
                        <div className='w-2/3 text-l'><p>Don't have an account?
                        <Link to="/sign-up" className='text-red-400'>Register</Link></p></div>
                            <div><Link to="/forgot-password" className='text-blue-500'>Forgot password?</Link></div>
                        </div>
                    </div>
                    <button type="submit" onSubmit={signInSubmit}
                    className='uppercase bg-blue-600 rounded w-full py-3 text-center mt-5 text-white'>
                    sign in</button>
                </form>
                
            </div>
        </div>
      
    </section>
  )
}
