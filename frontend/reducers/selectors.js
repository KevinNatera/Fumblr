export const selectAllPosts = (state) => {
    let arr = Object.values(state.entities.posts)
    return arr.reverse()
}

export const selectUserPosts = (state,id) => {
    return Object.values(state.entities.posts).filter(post => post.author_id === id).reverse()
}

export const selectUserLikedPosts = (state,id) => {

    let likes = Object.values(state.entities.likes);
    let posts = Object.values(state.entities.posts);

    let likedPosts = [];

    for (let i = 0; i < likes.length; i++) {


        for (let j = 0; j < posts.length; j++) {
        
            if (likes[i].liker_id === state.session.id && likes[i].post_id === posts[j].id)

            likedPosts.push(posts[j])

        }

    }

    return likedPosts.reverse()
}

export const selectAllUsers = (state) => {
    return Object.values(state.entities.users)
}
export const selectAllLikes = (state) => {
    return Object.values(state.entities.likes)
}

export const selectAllComments = (state) => {
    let arr = Object.values(state.entities.comments)
    return arr.reverse()
}