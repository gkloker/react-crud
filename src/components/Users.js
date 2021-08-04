import React, { Fragment, useEffect } from 'react';
import User from "./User";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../actions/getUserAction";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Consult database
    const getUsers = () => dispatch(getUserAction());
    getUsers();
    // eslint-disable-next-line
  }, []);

  // Get state
  const users = useSelector((state) => state.users.users);
  const error = useSelector((state) => state.users.error);
  const loading = useSelector((state) => state.users.loading);

  return (
    <Fragment>
      <h2 className="text-center my-5">Invitations List</h2>

      { error && <p className="font-weight-bold alert alert-danger text-center">There are an error</p> }
      { loading && <p className="text-center">Loading...</p> }
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Birthday</th>
            <th scope="col">DNI</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          { users.length === 0 ? 'No users' : (
            users.map(user => (
              <User key={user.id} user={user}/>
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
}

export default Users;