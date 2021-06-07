import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
// https://bezkoder.com/react-node-mongodb-auth/

const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};
const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};
const password1 = (value) => {
    if(value.toString().trim().length<8) {
        return <span className="error">Password is less than 8 characters</span>
    }
};
export default function LoginPage() {
  const [username, setUsername] = useState();
  const [password2, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
  }
  return (
    <div>
      <h1> Log In</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <Input type="text" name="email" onChange={e => setUsername(e.target.value)} validations={[required, email]} autoComplete="on" />
        </label>
        <label>
          <p>Password</p>
          <Input type="password" onChange={e => setPassword(e.target.value)} validations={[required, password1]} autoComplete="on" />
        </label>
        <div>
          <Button type="submit">Login</Button>
        </div>
        <div>
          If not have an Account<Link to="/signup">Signup</Link>
        </div>
      </Form>
    </div>
  )
}

LoginPage.propsTypes = {
  setToken: PropTypes.func.isRequired
}