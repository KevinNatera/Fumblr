import * as UserUtil from '../utils/users';

export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'

export const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
})
  
export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const requestAllUsers = () => (dispatch) => (
    UserUtil.fetchAllUsers()
      .then(users => dispatch(receiveAllUsers(users)))
)
  
export const requestSingleUser = (id) => (dispatch) => (
    UserUtil.fetchUser(id)
      .then(user => dispatch(receiveUser(user)))
)

export const updateUser = (id, avatar) => (dispatch) => (
    UserUtil.updateUser(id, avatar)
      .then(user => dispatch(receiveUser(user)))
)

// export const createNewUser = (formUser) => dispatch => postUser(formUser)
//     .then(user => dispatch(receiveCurrentUser(user)),
//          err => dispatch(receiveErrors(err)) );

// export const postUser = (user) => (
//     $.ajax({
//         url: '/api/users',
//         method: 'POST',    //is a post request because data is being sent
//         data: { user },  //nests user object under keyword:user
//     })
// );