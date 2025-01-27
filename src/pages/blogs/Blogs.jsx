import React, { useState } from 'react'
import BlogsSearch from './BlogsSearch'

const Blogs = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [query, setQuery] = useState({search: '', category: ''});

    const handleSearchChange =(e)=> {
        e.preventDefault();
        setSearch(e.target.value)
    }
    console.log(search)

    const handleSearch =()=> {
        setQuery({search: search, category: category})
    }

  return (
    <div className='mt-16 container mx-auto'>
        <div>
            <BlogsSearch
            search={search}
            handleSearchChange={handleSearchChange}
            handleSearch={handleSearch}
            ></BlogsSearch>
        </div>
        <div>
            Blogs Card
        </div>
    </div>
  )
}

export default Blogs
