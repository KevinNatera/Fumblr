export const createLike = (like) => (
    $.ajax({
        url: '/api/likes',
        method: 'POST',    
        data: { like }, 
    })
);

export const fetchAllLikes = () => {
    return $.ajax({
      method: "GET",
      url: "/api/likes"
    })
}

export const deleteLike = (id) => {
    return $.ajax({
      method: "DELETE",
      url: `/api/likes/${id}`
    })
}
