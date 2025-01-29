import React, { useState } from 'react'
import { Link } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
  return (
    <div className='bg-white p-8 shadow-md rounded-md max-w-sm mx-auto mt-20'>
        <h2 className='text-xl font-semibold text-black'>Login Please</h2>
        <div className='mt-5'>
            <form
            className='space-y-5 max-w-sm mx-auto'
            >
                    <input type="email" name="" id=""
                    placeholder='Enter Email'
                    value={email}
                    className='w-full focus:outline-none px-5 py-3 bg-gray-100 rounded-md'
                    />
                    <input type="password" name="" id=""
                    placeholder='Enter Password'
                    value={password}
                    className='w-full focus:outline-none px-5 py-3 bg-gray-100 rounded-md'
                    />
                    {
                        message && <p className='text-red-500'>{message}</p>
                    }
                    <button type="submit"
                    className='w-full bg-black text-white font-semibold px-5 py-3 rounded-md'
                    >Login</button>
            </form>
            <p className='mt-2'>Don't have an account? <Link to="/register" className='text-blue-500 underline'>Please Register</Link></p>
        </div>
    </div>
  )
}

export default Login
