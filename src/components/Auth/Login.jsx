import React, { useState } from 'react'

const Login = ({HandleLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    // prevent the default behaviour
    const submitHandler = (e)=>{
        e.preventDefault();
        // empty the input fields after submitting
        HandleLogin(email,password);
        setEmail("");
        setPassword("");
    }

  return <>
    <div className='bg-zinc-900 h-screen w-screen flex flex-col items-center justify-center  gap-5'>
        <h1 className='text-white font-bold text-4xl'>Login</h1>
        <div className="loginCard h-1/2 w-full ">
            <form 
            onSubmit={(e)=>{
                submitHandler(e);
            }} 
            className='flex flex-col items-center justify-center gap-4'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                className='text-white bg-transparent border border-red-600 px-6 py-2 w-[90%] rounded-full outline-none shadow-lg focus:shadow-red-900 ' type="email" placeholder='Email' />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                className='text-white bg-transparent border border-red-600 px-6 py-2 w-[90%] rounded-full outline-none shadow-lg focus:shadow-red-900 ' type="password" placeholder='Password' />
                <div className="loginFeatures flex items-center justify-between w-[80%]">
                    <div className="checkbox flex items-center justify-center gap-2">
                        <input className='h-4 w-4 text-red-500' type="radio" name="" id="" />
                        <h1 className='text-white font-medium '>Remember me</h1>
                    </div>
                    <span className='text-red-600'>Forget password?</span>
                </div>
                <button className='w-[90%] rounded-full py-2 bg-red-600 text-white font-bold'>Login</button>
            </form>
        </div>
    </div>
  </>
}

export default Login