export const selectAllPosts = (state) => {
    return Object.values(state.entities.posts).reverse()
}

export const selectUserPosts = (state,id) => {
    return Object.values(state.entities.posts).filter(post => post.author_id === id).reverse()
}

export const selectAllUsers = (state) => {
    return Object.values(state.entities.users)
}
