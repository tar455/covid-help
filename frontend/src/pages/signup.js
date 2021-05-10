import React, { useState } from 'react'
import Axios from 'axios';
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
            console.log(response);
        });
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 mx-auto">
                        <form>
                            <label htmlFor="emailId">Email:</label>
                            <input type="email" id="emailId" className="form-control" autoComplete="off" onChange={emailUpdate} name="email" />
                            <label htmlFor="passwordId">Password:</label>
                            <input type="password" id="passwordId" onChange={passwordUpdate} className="form-control" name="password" autoComplete="on" />
                            <label htmlFor="confirm_passwordId">confirm password:</label>
                            <input type="password" id="confirm_passwordId" onChange={confirmPasswordUpdate} className="form-control" name="confirmPassword" autoComplete="on" />
                            <div>
                                <input type="submit" className="btn btn-art" onClick={register} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
