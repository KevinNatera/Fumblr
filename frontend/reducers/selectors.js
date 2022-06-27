export const selectAllPosts = (state) => {
    let arr = Object.values(state.entities.posts)
    // console.log(arr)
    // console.log(arr.sort((a,b ) => a - b))
    return arr.reverse()
    //sort
}

export const selectUserPosts = (state,id) => {
    return Object.values(state.entities.posts).filter(post => post.author_id === id).reverse()
}

export const selectAllUsers = (state) => {
    return Object.values(state.entities.users)
}
