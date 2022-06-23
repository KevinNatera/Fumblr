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