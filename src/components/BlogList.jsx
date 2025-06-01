import React from 'react'
import BlogPost from './BlogPost'

const BlogList = ({posts,onDelete}) => {
    if(posts.length === 0) return <p className='no-posts'>No posts yet.</p>
  return (
    <div className='blog-list'>
        {/* list必须设置唯一的key，防止渲染出错 */}
        {posts.map(post=>(
            <BlogPost key={post.id} id={post.id} title ={post.title} content = {post.content} onDelete={onDelete}/>
        ))

        }
    </div>
  )
}

export default BlogList