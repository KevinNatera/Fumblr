import * as FollowUtil from '../utils/follows';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW'
export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS'
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const RECEIVE_FOLLOW_ERRORS = "RECEIVE_FOLLOW_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveAllFollows = (follows) => ({
    type: RECEIVE_ALL_FOLLOWS,
    follows
  })
  
  export const receiveFollow = (follow) => ({
    type: RECEIVE_FOLLOW,
    follow
  })

  export const removeFollow = (followId) => ({
    type: REMOVE_FOLLOW,
    followId,
  });

  export const receiveErrors = (errors) => ({
    type: RECEIVE_FOLLOW_ERRORS,
    errors
})

  export const createFollow = (follow) => dispatch => 
   FollowUtil.createFollow(follow)
    .then(follow => dispatch(receiveFollow(follow)),
     err => dispatch(receiveErrors(err))
  )


  export const requestAllFollows = () => dispatch => 
    FollowUtil.fetchAllFollows()
      .then(follows => dispatch(receiveAllFollows(follows)),
      err => dispatch(receiveErrors(err)) 
  )

  export const deleteFollow = (followId) => (dispatch) =>
    FollowUtil.deleteFollow(followId)
    .then(() => dispatch(removeFollow(followId)),
    err => dispatch(receiveErrors(err)) 
  );
