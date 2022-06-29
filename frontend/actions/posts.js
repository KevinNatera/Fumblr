import * as PostUtil from '../utils/posts';

export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const REMOVE_POST = "REMOVE_POST";

export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

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

  export const receiveErrors = (errors) => ({
    type: RECEIVE_POST_ERRORS,
    errors
})

  export const createPost = (formPost) => dispatch => 
   PostUtil.createPost(formPost)
    .then(post => dispatch(receivePost(post)),
     err => dispatch(receiveErrors(err))
  )

  export const requestAllPosts = () => dispatch => 
    PostUtil.fetchAllPosts()
      .then(posts => dispatch(receiveAllPosts(posts)),
      err => dispatch(receiveErrors(err))
  )
  
  export const requestSinglePost = (postId) => (dispatch) => 
    PostUtil.fetchPost(postId)
      .then(post => dispatch(receivePost(post)),
      err => dispatch(receiveErrors(err))
  )

  export const updatePost = (post) => (dispatch) => 
    PostUtil.updatePost(post)
      .then(post => dispatch(receivePost(post)),
      err => dispatch(receiveErrors(err))
  );

  export const deletePost = (postId) => (dispatch) =>
    PostUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)),
    err => dispatch(receiveErrors(err)) 
  );

