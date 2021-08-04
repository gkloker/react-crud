import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  GET_EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR
} from '../types';

// Any redurcer has its own state
const initialState = {
  users: [],
  error: null,
  loading: false,
  userDelete: null,
  userEdit: null
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_USER:
    case GET_USERS:
      return {
        ...state,
        loading: true
      }
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload]
      }
    case ADD_USER_ERROR:
    case GET_USERS_ERROR:
    case DELETE_USER_ERROR:
    case EDIT_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      }
    case DELETE_USER:
      return {
        ...state,
        userDelete: action.payload
      }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter( user => user.id !== state.userDelete),
        userDelete: null
      }
    case GET_EDIT_USER:
      return {
        ...state,
        userEdit: action.payload
      }
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        userEdit: null,
        users: state.users.map( user =>
          user.id === action.payload.id ?
            user = action.payload :
            user
         )
      }
    default:
      return state;
  }
}