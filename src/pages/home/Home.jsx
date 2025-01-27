import React from 'react'
import Hero from './Hero'
import Blogs from '../blogs/Blogs'

const Home = () => {
  return (
    <div className='bg-white container mx-auto mt-6 p-8'>
        <Hero></Hero>
        <Blogs></Blogs>
    </div>
  )
}

export default Home
