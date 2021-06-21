import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../reduxAction/LoginAction';
// https://bezkoder.com/react-node-mongodb-auth/

const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};
const email = (value) => {
  if (!validator.isEmail(value)) {
    return <span className="error"> {value} is not a valid email.</span>;
  }
};
const password1 = (value) => {
  if (value.toString().trim().length < 8) {
    return <span className="error">Password is less than 8 characters</span>
  }
};
export default function LoginPage(props) {
  const [username, setUsername] = useState('');
  const [password2, setPassword] = useState('');
  const dispatch = useDispatch();
  const redirect=props.location.search?props.location.search.split('=')[1]:'/';
  const User = useSelector((state) => state.UserLogin);
  const { loading, error, userInfo } = User;
  
  
   
  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(LoginAction(username,password2));
  }
  useEffect(() => {
    if(userInfo)
    {
      props.history.push(redirect);
    }
  },[props.history,redirect,userInfo]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 mx-auto">
            <h1 className=""> Log In</h1>
            <Form onSubmit={handleSubmit}>
              <label htmlFor="email">Email
              </label>
              <Input type="text" id="email" className="form-control" name="email" onChange={e => setUsername(e.target.value)} validations={[required, email]} autoComplete="on" />
              <label htmlFor="password">Password</label>
              <Input type="password" className="form-control" id="password" name="password" onChange={e => setPassword(e.target.value)} validations={[required, password1]} autoComplete="on" />
              <div>
                <Button type="submit" className="btn btn-art" >Login</Button>
              </div>
              <div>
                If not have an Account<Link to="/signup">Signup</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

LoginPage.propsTypes = {
  setToken: PropTypes.func.isRequired
}