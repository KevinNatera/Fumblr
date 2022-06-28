export const fetchAllUsers = () => {
    return $.ajax({
      method: "GET",
      url: "/api/users"
    })
}
  
  
export const fetchUser = (id) => {
    return $.ajax({
      method: "GET",
      url: `/api/users/${id}`
    })
}

export const updateUser = (id, formData) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${id}`,
    processData: false,
    contentType: false,
    cache: false,
    data: formData
  })
}

