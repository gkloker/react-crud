import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//actions from redux
import { createNewProductAction } from '../actions/newUserActions';
import { showAlertAction, hideAlertAction } from '../actions/alertActions';

const NewUser = ({history}) => {

  // state from component
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [dni, setDni] = useState(0);

  // use useDispatch and create a function
  const dispatch = useDispatch();

  // Access to state from store
  const reload = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const alert = useSelector(state => state.alert.alert);

  // call the action from prooductAction
  const addProduct = (user) => dispatch(createNewProductAction(user));

  // When user do submit
  const submitNewProduct = (e) => {
    e.preventDefault();

    // Validate form
    if (firstName.trim === '' || lastName.trim === '' || birthday.trim === '' || dni <= 0) {

      const alert = {
        msg: 'Both fields are required',
        classes: 'alert alert-danger text-center text-uppercase p3'
      }

      dispatch(showAlertAction(alert));

      return;
    }

    // If there are not errors
    dispatch(hideAlertAction());

    // create a new product
    addProduct({
      firstName,
      lastName,
      birthday,
      dni
    });

    // Redirect
    history.push('/');
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add User
            </h2>

            { alert && <p className={alert.classes}>{alert.msg}</p> }

            <form
              onSubmit={submitNewProduct}
            >
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Birthday</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Birthday"
                  name="birthday"
                  value={birthday}
                  onChange={e => setBirthday(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>DNI</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="DNI"
                  name="dni"
                  value={dni}
                  onChange={e => setDni(Number(e.target.value))}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Add</button>
            </form>

            { reload && <p>Reload...</p> }
            { error && <p className="alert alert-danger p2 mt-4 text-center">There are an error</p> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;