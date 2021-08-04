import {
  GET_EDIT_USER,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
} from '../types';
import clientAxios from "../config/axios";

// Get product to edit
export function getEditUserAction (user) {
  return async (dispatch) => {
    dispatch(getEditUser(user));
  }
}
const getEditUser = (user) => ({
  type: GET_EDIT_USER,
  payload: user
})

export function editUserAction(user) {
  return async (dispatch) => {
    dispatch(editUser(user));

    try {
      await clientAxios.put(`/users/${user.id}`, user);

      dispatch(editUserSuccess(user))
    } catch (error) {
      console.log(error);

      dispatch(editUserError());
    }
  }
}

const editUser = () => ({
  type: EDIT_USER,
})

// Edit from database
const editUserSuccess = (user) => ({
  type: EDIT_USER_SUCCESS,
  payload: user
})

// If there are an error
const editUserError = () => ({
  type: EDIT_USER_ERROR,
  payload: true
})