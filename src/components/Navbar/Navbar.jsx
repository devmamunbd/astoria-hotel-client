import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToggle = ()=> {
        setIsMenuOpen(!isMenuOpen)
    }



  return (
    <>
    <header className='bg-[#FBFBFB] py-6 border-b-amber-50'>
        <nav className='container mx-auto flex justify-between items-center px-10'>
            <Link to="/" className='text-xl md:text-2xl text-black font-bold'>Astoria <span className='text-green-500'> Hotel</span></Link>
            <ul className='md:flex hidden gap-5 lg:gap-10 items-center'>
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

                <button className='md:hidden block'>
                    {
                        isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleToggle}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleToggle}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )
                    }
                </button>
        </nav>

                {/* Mobile Menu */}
                {
                    isMenuOpen && (
                        <ul className='fixed top-[75px] left-0 w-full h-auto pb-8 bg-white shadow-sm z-50 space-y-2 px-10'>
                            <li><NavLink onClick={()=>setIsMenuOpen(false)} to="/" className={({isActive})=>
                            isActive ? "text-sm font-semibold text-green-500" : "text-sm font-semibold"
                            }>Home</NavLink></li>
                            <li><NavLink onClick={()=>setIsMenuOpen(false)} to="/about" className={({isActive})=>
                            isActive ? "text-sm font-semibold text-green-500" : "text-sm font-semibold"
                            }>About</NavLink></li>
                            <li><NavLink onClick={()=>setIsMenuOpen(false)} to="/service" className={({isActive})=>
                            isActive ? "text-sm font-semibold text-green-500" : "text-sm font-semibold"
                            }>Service</NavLink></li>
                            <li><NavLink onClick={()=>setIsMenuOpen(false)} to="/contact" className={({isActive})=>
                            isActive ? "text-sm font-semibold text-green-500" : "text-sm font-semibold"
                            }>Contact Us</NavLink></li>
                            <li><NavLink onClick={()=>setIsMenuOpen(false)} to="/privacy" className={({isActive})=>
                            isActive ? "text-sm font-semibold text-green-500" : "text-sm font-semibold"
                            }>Privacy Policy</NavLink></li>
                            <li><NavLink onClick={()=>setIsMenuOpen(false)} to="/login" className={({isActive})=>
                            isActive ? "text-sm font-semibold text-green-500" : "text-sm font-semibold"
                            }>Login</NavLink></li>
                        </ul>
                    )
                }

    </header>

    </>
  )
}

export default Navbar
