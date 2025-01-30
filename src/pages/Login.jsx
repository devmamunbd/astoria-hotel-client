import React, { useState } from 'react'
import { Link } from 'react-router';
import { useForm } from "react-hook-form"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        // setMessage('Logged in successfully')
      }
  return (
    <div className='bg-white p-8 shadow-md rounded-md max-w-sm mx-auto mt-20'>
        <h2 className='text-xl font-semibold text-black'>Login Please</h2>
        <div className='mt-5'>
            <form onSubmit={handleSubmit(onSubmit)}
            className='space-y-5 max-w-sm mx-auto'
            >
                    <input type="email" name="email" id="email"
                    placeholder='Enter Email'
                    // value={email}
                    // onChange={(e)=> setEmail(e.target.value)}
                    {...register('email', {required: true})}
                    className='w-full focus:outline-none px-5 py-3 bg-gray-100 rounded-md'
                    />
                    <input type="password" name="password" id="password"
                    placeholder='Enter Password'
                    // value={password}
                    // onChange={(e)=> setPassword(e.target.value)}
                    {...register("password", {required: true})}
                    className='w-full focus:outline-none px-5 py-3 bg-gray-100 rounded-md'
                    />
                    {
                        message && <p className='text-red-500'>{message}</p>
                    }
                    <button type="submit"
                    className='w-full bg-black text-white font-semibold px-5 py-3 rounded-md cursor-pointer'
                    >Login</button>
            </form>
            <p className='mt-2'>Don't have an account? <Link to="/register" className='text-blue-500 underline'>Please Register</Link></p>
        </div>
    </div>
  )
}

export default Login
