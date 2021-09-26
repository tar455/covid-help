import React, { useState } from 'react'
import Axios from 'axios';
// import validator from 'validator';
import Input from 'react-validation/build/input';
import Form from 'react-validation/build/form';
import Button from 'react-validation/build/button';
import validator from 'validator';
// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
//   }
const required=(value)=>{
    if(!value.toString().trim().length)
    {
        return <span className="must">required</span>;
    }
}
const emailCheck = (value)=>
{
    if(!validator.isEmail(value))
    {
        return <span className="error">{value} is not a valid email.</span>;
    }
}
const passwordCheck=(value, props, components) => {
       if (value !== components['password'][0].value) { // components['password'][0].value !== components['confirm'][0].value
            return <span className="error">Passwords are not equal.</span>
    }
    else if(value.toString().trim().length<8)
    {
        return <span className="error">Must be at least 8 characters.</span>
    }
    // else
    // {
    //     return <span className="success">Password match</span>
    // }
  };
export default function Signup() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const emailUpdate = (event) => {
        setEmail(event.target.value);
    }
    const passwordUpdate = (event) => {
        setPassword(event.target.value);
    }
    const confirmPasswordUpdate = (event) => {
        setConfirmPassword(event.target.value);
    }
    const register = () => {
        Axios.post('/api/login', {
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }).then((response) => {
            return <span className="error">Error</span>;
        });
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 mx-auto">
                        <Form>
                            <label htmlFor="emailId">Email:</label>
                            <Input type="text" id="emailId"
                             name="email" className="form-control"
                              validations={[required,emailCheck]}
                              autoComplete="off" onChange={emailUpdate}  ></Input>
                            <label htmlFor="passwordId">Password:</label>
                            <Input type="password" id="passwordId" onChange={passwordUpdate} className="form-control" name="password" autoComplete="on" />
                            <label htmlFor="confirm_passwordId">confirm password:</label>
                            <Input type="password" id="confirm_passwordId" onChange={confirmPasswordUpdate} 
                            className="form-control"
                             name="confirmPassword"
                             validations={[required,passwordCheck]}
                              autoComplete="on" />  
                            <div>
                                <Button type="submit" name="Register" className="btn btn-art" onClick={register} >Register</Button>
                            </div>
                            <div className="g-signin2" data-onsuccess="onSignIn"></div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
