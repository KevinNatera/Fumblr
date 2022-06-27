import * as LikeUtil from '../utils/likes';

export const RECEIVE_LIKE = 'RECEIVE_LIKE'
export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES'
export const REMOVE_LIKE = "REMOVE_LIKE";

export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveAllLikes = (likes) => ({
    type: RECEIVE_ALL_LIKES,
    likes
  })
  
  export const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
  })

  export const removeLike = (likeId) => ({
    type: REMOVE_LIKE,
    likeId,
  });

  export const receiveErrors = (errors) => ({
    type: RECEIVE_LIKE_ERRORS,
    errors
})

  export const createLike = (like) => dispatch => 
   LikeUtil.createLike(like)
    .then(like => dispatch(receiveLike(like)),
     err => dispatch(receiveErrors(err))
  )


  export const requestAllLikes = () => dispatch => 
    LikeUtil.fetchAllLikes()
      .then(likes => dispatch(receiveAllLikes(likes)),
      err => dispatch(receiveErrors(err)) 
  )

  export const deleteLike = (likeId) => (dispatch) =>
    LikeUtil.deleteLike(likeId)
    .then(() => dispatch(removeLike(likeId)),
    err => dispatch(receiveErrors(err)) 
  );

