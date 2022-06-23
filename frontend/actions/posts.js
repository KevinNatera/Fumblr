import * as PostUtil from '../utils/posts';

export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const REMOVE_POST = "REMOVE_POST";

export const receiveAllPosts = (posts) => ({
    type: RECEIVE_ALL_POSTS,
    posts
  })
  
  export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
  })

  export const removePost = (postId) => ({
    type: REMOVE_POST,
    postId,
  });
  
  export const requestAllPosts = () => (dispatch) => (
    PostUtil.fetchAllPosts()
      .then(posts => dispatch(receiveAllPosts(posts)))
  )
  
  export const requestSinglePost = (postId) => (dispatch) => (
    PostUtil.fetchPost(postId)
      .then(post => dispatch(receivePost(post)))
  )

  export const deletePost = (postId) => (dispatch) =>
    PostUtil.deletePost(postId).then(() =>
    dispatch(removePost(postId))
  );

