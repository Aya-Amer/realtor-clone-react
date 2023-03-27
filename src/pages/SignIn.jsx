import  { useState } from 'react'

export default function SignIn() {
    const [formData, setFormData] = useState({
email:"",
password:""
    })
    const {email,password} = formData ;
    function changeForm(e){
    setFormData({...formData,[e.target.id]:e.target.value})
    }
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
                    <input className='w-full pl-3 py-2 font-medium text-xl border rounded bg-white mt-5' 
                    id ="password" placeholder='Password' onChange={changeForm}
                    value={password}/>
                </form>
                
            </div>
        </div>
      
    </section>
  )
}
