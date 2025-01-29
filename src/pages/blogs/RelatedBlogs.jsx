import React from 'react'
import { useGetRelatedBlogsByIdQuery } from '../../redux/features/blogs/blogsApi';
import { useParams } from 'react-router';

const RelatedBlogs = () => {
    const {id} = useParams()
    const {data: Blogs = [], error, isLoading} = useGetRelatedBlogsByIdQuery(id)
    const blogs = Blogs;
    console.log(blogs)

  return (
    <div className='mt-4'>
        <div>
            
        </div>
    </div>
  )
}

export default RelatedBlogs
