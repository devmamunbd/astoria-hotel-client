import React from 'react'
import { useParams } from 'react-router'
import { useGetSingleBlogByIdQuery } from '../../redux/features/blogs/blogsApi';

const SingleBlogs = () => {
    const {id} = useParams();
    const {data: singleData, error, isLoading} = useGetSingleBlogByIdQuery(id)
    const singleBlog = singleData?.post;
    console.log(singleBlog)
  return (
    <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong</h1>}

    </div>
  )
}

export default SingleBlogs
