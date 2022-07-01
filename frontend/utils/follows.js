export const createFollow = (follow) => (
    $.ajax({
        url: '/api/follows',
        method: 'POST',    
        data: { follow }, 
    })
);

export const fetchAllFollows = () => {
    return $.ajax({
      method: "GET",
      url: "/api/follows"
    })
}

export const deleteFollow = (id) => {
    return $.ajax({
      method: "DELETE",
      url: `/api/follows/${id}`
    })
}
