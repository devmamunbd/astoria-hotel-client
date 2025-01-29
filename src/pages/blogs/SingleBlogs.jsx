import React from 'react'
import { useParams } from 'react-router'
import { useGetSingleBlogByIdQuery } from '../../redux/features/blogs/blogsApi';
import SingleBlogsCard from './SingleBlogsCard';
import CommentsCard from './comments/CommentsCard';

const SingleBlogs = () => {
    const {id} = useParams();
    const {data: singleData =[], error, isLoading} = useGetSingleBlogByIdQuery(id)
    const Blogs = singleData?.post;
    console.log(Blogs)
  return (
    <div className='container mx-auto mt-8 p-8'>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong</h1>}

        {
            Blogs && (
                <div className='flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8'>
                    <div className='w-full lg:w-2/3 flex flex-col gap-4'>
                        <SingleBlogsCard Blogs={Blogs} />
                        <CommentsCard comments={Blogs?.comments}/>
                    </div>
                    <div className='bg-white w-full lg:w-1/3 p-4 rounded-md shadow-md'>
                    <h3 className='text-black text-xl md:text-2xl font-semibold'>Related Blogs</h3>
                    <hr />
                    <div>

                    </div>
                    </div>
                </div>
            )
        }

    </div>
  )
}

export default SingleBlogs
