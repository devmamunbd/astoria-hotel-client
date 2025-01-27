import React, { useState } from 'react'
import BlogsSearch from './BlogsSearch'
import { useGetBlogQuery } from '../../redux/features/blogs/blogsApi';
import { Link } from "react-router";

const Blogs = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [query, setQuery] = useState({search: '', category: ''});
    const {data: blogData=[], error, isLoading} = useGetBlogQuery(query);
    const blogs = blogData?.post;
    console.log(blogs)

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
        {
            isLoading && <div>Loading.....</div>
        }
        {
            error && <div>{error.toString()}</div>
        }
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
            {
                blogs?.map((blog)=> (
                    <Link
                    className='bg-white shadow-lg rounded-lg overflow-hidden p-3'
                    key={blog._id} to={`/blogs/${blog._id}`}>
                        <img className='w-96 h-96 rounded-lg' src={blog?.coverImg} alt="" />
                        <div className='mt-2'>
                            <h2 className='text-xl font-normal text-black'>{blog?.title}</h2>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Blogs
