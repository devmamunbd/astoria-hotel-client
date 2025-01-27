import React from 'react'

const BlogsSearch = ({search, handleSearchChange, handleSearch}) => {

    const handleKeyPress =(event)=> {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }

  return (
    <div className='flex w-full gap-5'>
        <input
        value={search}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        className='w-full border border-gray-300 p-2 rounded-md outline-none'
        type="search" name="" id=""
        placeholder='Search Hotel Rooms'/>

        <button className='bg-green-500 px-12 py-2 text-white rounded-md font-semibold cursor-pointer'>Search</button>
    </div>
  )
}

export default BlogsSearch
