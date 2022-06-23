import * as PostUtil from '../utils/posts';

export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'

export const receiveAllPosts = (posts) => ({
    type: RECEIVE_ALL_POSTS,
    posts
  })
  
  export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
  })
  
  export const requestAllPosts = () => (dispatch) => (
    PostUtil.fetchAllPosts()
      .then(posts => dispatch(receiveAllPosts(posts)))
  )
  
  export const requestSinglePost = (id) => (dispatch) => (
    PostUtil.fetchPost(id)
      .then(post => dispatch(receivePost(post)))
  )