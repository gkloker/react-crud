import React from 'react';
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

// Redux
import { useDispatch } from "react-redux";
import { deleteUserAction } from "../actions/deleteUserAction";
import { getEditUserAction } from "../actions/editUserAction";

const User = ({user}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Confirm delete user
  const confirmDeleteUser = (id) => {
    // Ask user
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Action
        dispatch(deleteUserAction(id));
      }
    })
  }

  // Method to redirect edit
  const redirectEdition = (user) => {
    dispatch(getEditUserAction(user));

    history.push(`/users/edit/${user.id}`);
  }

  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.birthday}</td>
      <td><span className="font-weight-bold">{user.dni}</span></td>
      <td className="acciones">
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={() => redirectEdition(user)}
        >Edit</button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmDeleteUser(user.id)}
        >Delete</button>
      </td>
    </tr>
  );
}

export default User;