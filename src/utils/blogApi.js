
let posts = [
    {
      id: 1,
      title: "Welcome to the blog",
      content: "This is the first post!"
    }
  ];

  //simulate GET / posts
  export const fetchPosts = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve([...posts])
        }, 1000);
    })
  }

  // simulate POST /posts
  export const addPost=(newPost)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            const postWithId = {...newPost, id: Date.now()};
            posts.push(postWithId);
            resolve(postWithId)
        }, 500);
    })
  }

  // simulate DELETE
  export const deletePost=(id)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            posts = posts.filter(post=>post.id !==id);
            resolve(posts)
        }, 500);
    })
  }