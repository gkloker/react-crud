import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to={'/'} className="text-light">
            CRUD - React & SpringBoot
          </Link>
        </h1>
      </div>

      <Link
        to="/users/new"
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
      >Add User &#43;</Link>
    </nav>
  )
}

export default Header;