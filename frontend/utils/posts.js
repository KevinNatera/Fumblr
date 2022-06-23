export const createPost = (post) => (
    $.ajax({
        url: '/api/posts',
        method: 'POST',    
        data: { post }, 
    })
);

export const fetchAllPosts = () => {
    return $.ajax({
      method: "GET",
      url: "/api/posts"
    })
}
  
  
export const fetchPost = (id) => {
    return $.ajax({
      method: "GET",
      url: `/api/posts/${id}`
    })
}

export const updatePost = (post) =>
  $.ajax({
    url: `/api/posts/${post.id}`,
    method: "PATCH",
    data: { post },
  });

export const deletePost = (id) => {
    return $.ajax({
      method: "DELETE",
      url: `/api/posts/${id}`
    })
}
