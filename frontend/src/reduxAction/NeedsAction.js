import { Login_Request, Needs_From_Failure, Needs_From_Request, Needs_From_Success } from "../reduxConstant/NeedsConstant"
import axios from 'axios';

export const NeedsAction = () => async (dispatch) => {
    dispatch({
        type: Needs_From_Request
    });
    try {
        const Needs = await axios.get(`http://localhost:5000/data_needs/api`);
        dispatch({
            type: Needs_From_Success,
            payload: Needs
        })
    } catch (error) {
        dispatch({
            type: Needs_From_Failure,
            payload: error.massage
        });
    }
}

export const Login_Action = () => async (dispatch) => {
    dispatch({
        type: Login_Request
    });
}