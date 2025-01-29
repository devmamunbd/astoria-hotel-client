import React from 'react'
import { formateDate } from './../../../utilis/formateDate';
import PostAComment from './PostAComment';

const CommentsCard = ({comments}) => {
  return (
    <div className='bg-white w-full p-4 rounded-md shadow-md'>
     <div>
     {
            comments?.length > 0 ?
            <div>
            <h3 className='text-xl font-normal'>All Comments</h3>
            <div>
                {
                    comments?.map((comment, index)=> (
                        <div key={index} className=''>
                          <div>
                          <img src="" alt="" />
                            <div>
                                <p>{comment?.username}</p>
                                <p>{formateDate(comment?.createdAd)}</p>
                            </div>
                          </div>
                        {/* comment-details */}
                        <div>
                            <p>{comment?.comment}</p>
                        </div>


                        </div>
                    ))
                }
            </div>
            </div> : (
                <div>
                    <p className='text-xl font-bold text-red-500'>No Comments Found</p>
                </div>
            )
        }
     </div>

        {/* comment-input-here */}
       <PostAComment/>

     </div>
  )
}

export default CommentsCard
