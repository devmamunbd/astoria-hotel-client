import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <>
    <header className='bg-[#FBFBFB] py-6 border-b-amber-50'>
        <nav className='container mx-auto flex justify-between items-center px-10'>
            <Link to="/" className='text-2xl text-black font-bold'>Astoria <span className='text-green-500'> Hotel</span></Link>
            <ul className='sm:flex gap-10 items-center'>
                <li><NavLink to="/" className={({isActive})=>
                isActive ? "text-sm font-semibold text-green-500" : "text-sm font-semibold"
                }>Home</NavLink></li>
                <li><NavLink to="/about" className={({isActive})=>
                isActive ? "text-sm font-semibold text-green-500" : "text-sm font-semibold"
                }>About</NavLink></li>
                <li><NavLink to="/service" className={({isActive})=>
                isActive ? "text-sm font-semibold text-green-500" : "text-sm font-semibold"
                }>Service</NavLink></li>
                <li><NavLink to="/contact" className={({isActive})=>
                isActive ? "text-sm font-semibold text-green-500" : "text-sm font-semibold"
                }>Contact Us</NavLink></li>
                <li><NavLink to="/privacy" className={({isActive})=>
                isActive ? "text-sm font-semibold text-green-500" : "text-sm font-semibold"
                }>Privacy Policy</NavLink></li>
                <li><NavLink to="/login" className={({isActive})=>
                isActive ? "text-sm font-semibold text-green-500" : "text-sm font-semibold"
                }>Login</NavLink></li>
            </ul>
        </nav>
    </header>

    </>
  )
}

export default Navbar
