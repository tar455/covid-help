import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <>
                <Link to="/login">
                    <button className="btn btn-outline-success" >
                        Login
                    </button>
                </Link>
            </>
        );
    }
}
export default Login;