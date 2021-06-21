import Axios from "axios";
import {
    Login_Failure,
    Login_Request,
    Login_Success
}
    from "../reduxConstant/NeedsConstant"


export const LoginAction = (email,password) => async (dispatch) => {
    dispatch(
        {
            type: Login_Request,
            payload:{email,password}
        }
    );
    try {
        const { Login_data } = await Axios.post('/auth/security_login',{email,password});
        dispatch(
            {
                type: Login_Success,
                payload: Login_data,
            }
        )
        localStorage.setItem('userInfo',JSON.stringify(Login_data));
    } catch (error) {
        dispatch(
            {
                type: Login_Failure,
                payload:error.response
                //  error.response && error.response.Login_data.massage 
                // ?error.response.Login_data.massage
                // :error.massage
            });
    }
}