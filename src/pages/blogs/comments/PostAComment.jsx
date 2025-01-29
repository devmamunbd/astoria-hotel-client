import React, { useState } from 'react'

const PostAComment = () => {
    const [comment, setComment] = useState('')
  return (
    <div>
        <form>
           <div className='mb-2 mt-4'>
            <label htmlFor='comment' className='block text-black font-medium mb-1'>Write Comment</label>
            <textarea
            name="" id="comment"
            className='outline-none w-full h-20 p-2 border border-gray-400'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Write your comment here.......'
            ></textarea>
           </div>
           <div>
            <button type="submit" className='bg-green-500 px-12 p-2 text-white font-medium cursor-pointer'>Comment</button>
           </div>
        </form>
    </div>
  )
}

export default PostAComment
