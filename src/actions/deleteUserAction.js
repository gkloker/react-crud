import {
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR
} from '../types';
import clientAxios from "../config/axios";
import Swal from "sweetalert2";

// Delete products
export function deleteUserAction (id) {
  return async (dispatch) => {
    dispatch(deleteUser(id));
    try {
      await clientAxios.delete(`/users/${id}`);

      dispatch(deleteUserSuccess());

      // Alert
      Swal.fire({
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        icon: 'success'
      })

    } catch (error) {
      console.log(error);

      dispatch(deleteUserError(error));
    }
  }
}

const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id
})

// Delete product from database
const deleteUserSuccess = () => ({
  type: DELETE_USER_SUCCESS
})

// If there are an error
const deleteUserError = () => ({
  type: DELETE_USER_ERROR,
  payload: true
})
