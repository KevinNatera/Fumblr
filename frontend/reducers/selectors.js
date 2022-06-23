export const selectAllPosts = (state) => {
    return Object.values(state.entities.posts)
}