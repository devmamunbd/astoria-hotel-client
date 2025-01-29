import React from 'react'
import { formateDate } from '../../utilis/formateDate'
// import EditorJSHTML from 'editorjs-html';

// const editorJSHTML = EditorJSHTML();


const SingleBlogsCard = ({Blogs}) => {
 const {title, description, content, author, coverImg, category, rating, createdAt} = Blogs || {}
//  const htmlContent = editorJSHTML.parse(content).join('')

  return (
    <div className='bg-white p-4 shadow-md rounded-md'>
        {/* blog-header */}
        <div>
            <h2 className='text-xl md:text-2xl font-medium text-black mb-4'>{title}</h2>
            <p>{formateDate(createdAt)} by <span>{author?.name}</span></p>
        </div>
        {/* blog-image */}
        <div className='mt-4'>
            <img src={coverImg} alt="" className='w-full bg-cover rounded-md'/>
        </div>

        {/* blog-details */}
        <div className='mt-4'>
           {/* <div dangerouslySetInnerHTML={{__html: htmlContent}} /> */}
        </div>
    </div>
  )
}

export default SingleBlogsCard
