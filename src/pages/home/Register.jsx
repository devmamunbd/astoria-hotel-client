import React, { useState } from 'react'
import { Link } from 'react-router'
import { useForm } from "react-hook-form"



const Register = () => {
    const [name, setName] = useState('')
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
        // setMessage('Registered successfully')
      }

  return (
    <div className='bg-white p-8 shadow-md rounded-md max-w-sm mx-auto mt-10'>
        <h2 className='text-xl text-black font-semibold'>Register Please</h2>
        <form onSubmit={handleSubmit(onSubmit)}
        className='space-y-5 mt-5 max-w-sm mx-auto'>
                      <input type="fullname" name="fullname" id="fullname"
                    placeholder='Enter Name'
                    // value={name}
                    {...register('fullname', {required: true})}
                    className='w-full focus:outline-none px-5 py-3 bg-gray-100 rounded-md'
                    />
                     <input type="email" name="email" id="email"
                    placeholder='Enter Email'
                    // value={email}
                    {...register('email', {required: true})}
                    className='w-full focus:outline-none px-5 py-3 bg-gray-100 rounded-md'
                    />
                    <input type="password" name="password" id="password"
                    placeholder='Enter Password'
                    // value={password}
                    {...register("password", {required: true})}
                    className='w-full focus:outline-none px-5 py-3 bg-gray-100 rounded-md'
                    />
                    {/* {
                        message && <p className='text-red-500'>{message}</p>
                    } */}
                    <button type="submit"
                    className='w-full bg-black text-white font-semibold px-5 py-3 rounded-md cursor-pointer'
                    >Register</button>
        </form>
        <p className='mt-2'>Already have an account? <Link to="/login" className='text-blue-500 underline'>Please Login</Link></p>

    </div>
  )
}

export default Register
