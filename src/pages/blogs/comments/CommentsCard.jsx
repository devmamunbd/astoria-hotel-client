import React from 'react'

const CommentsCard = ({comments}) => {
  return (
    <div className='bg-white w-full p-4 rounded-md shadow-md'>
        {
            comments?.length > 0 ? (
                <div>
                    <p className='text-xl font-normal'>Comments</p>
                </div>
            ) : (
                <div>
                    <p className='text-xl font-normal'>No Comments Found</p>
                </div>
            )
        }
         </div>
  )
}

export default CommentsCard
