import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// https://bezkoder.com/react-node-mongodb-auth/


export default function LoginPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
  }
  return (
    <div>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)} autoComplete="on" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} autoComplete="on" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          If not have an Account<Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  )
}

LoginPage.propsTypes = {
  setToken: PropTypes.func.isRequired
}