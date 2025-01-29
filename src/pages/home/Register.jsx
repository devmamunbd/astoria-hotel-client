import React, { useState } from 'react'
import { Link } from 'react-router'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
  return (
    <div className='bg-white p-8 shadow-md rounded-md max-w-sm mx-auto mt-10'>
        <h2 className='text-xl text-black font-semibold'>Register Please</h2>
        <form
        className='space-y-5 mt-5 max-w-sm mx-auto'>
                      <input type="name" name="" id=""
                    placeholder='Enter Name'
                    value={name}
                    className='w-full focus:outline-none px-5 py-3 bg-gray-100 rounded-md'
                    />
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
                    {/* {
                        message && <p className='text-red-500'>{message}</p>
                    } */}
                    <button type="submit"
                    className='w-full bg-black text-white font-semibold px-5 py-3 rounded-md'
                    >Register</button>
        </form>
        <p className='mt-2'>Already have an account? <Link to="/login" className='text-blue-500 underline'>Please Login</Link></p>

    </div>
  )
}

export default Register
