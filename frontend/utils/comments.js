export const createComment = (comment) => (
    $.ajax({
        url: '/api/comments',
        method: 'POST',    
        data: { comment }, 
    })
);

export const fetchAllComments = () => {
    return $.ajax({
      method: "GET",
      url: "/api/comments"
    })
}
  
  
export const fetchComment = (id) => {
    return $.ajax({
      method: "GET",
      url: `/api/comments/${id}`
    })
}

export const deleteComment = (id) => {
    return $.ajax({
      method: "DELETE",
      url: `/api/comments/${id}`
    })
}
