import * as CommentUtil from '../utils/comments';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS'
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveAllComments = (comments) => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
  })
  
  export const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
  })

  export const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId,
  });

  export const receiveErrors = (errors) => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

  export const createComment = (formComment) => dispatch => 
   CommentUtil.createComment(formComment)
    .then(comment => dispatch(receiveComment(comment)),
     err => dispatch(receiveErrors(err))
  )

  export const requestAllComments = () => dispatch => 
    CommentUtil.fetchAllComments()
      .then(comments => dispatch(receiveAllComments(comments)),
      err => dispatch(receiveErrors(err))
  )
  
  export const requestSingleComment = (commentId) => (dispatch) => 
    CommentUtil.fetchComment(commentId)
      .then(comment => dispatch(receiveComment(comment)),
      err => dispatch(receiveErrors(err))
  )

  export const deleteComment = (commentId) => (dispatch) =>
    CommentUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)),
    err => dispatch(receiveErrors(err)) 
  );