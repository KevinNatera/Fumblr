export const selectAllPosts = (state) => {
    return Object.values(state.entities.posts)
}

export const selectUserPosts = (state,id) => {
    return Object.values(state.entities.posts).filter(post => post.author_id === id)
}