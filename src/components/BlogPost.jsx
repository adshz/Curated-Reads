import React from 'react'

const BlogPost = ({id,title,content,onDelete}) => {
  return (
    <div className='post'>
        <h2 className='post-title'>{title}</h2>
        <p className="post-content">{content}</p>
        {/* onDelete,从App -> BlogList -> BlogPost一层层传递
        child component在惦记删除按钮的时候，调用这个onDelete通知父组件app，体现了事件子传父的模式
         */}
        <button className='post-delete-button' onClick={()=>onDelete(id)}>Delete</button>
    </div>
  )
}

export default BlogPost