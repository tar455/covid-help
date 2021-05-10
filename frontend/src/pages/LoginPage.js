import React, { useState } from 'react'
import PropTypes from 'prop-types';

// https://bezkoder.com/react-node-mongodb-auth/

async function loginUser(credentials) {
    return fetch('/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}
export default function LoginPage({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
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
          If not have an Account<a href="/signup">Signup</a>
        </div>
      </form>
    </div>
  )
}

LoginPage.propsTypes = {
  setToken: PropTypes.func.isRequired
}