import { Needs_From_Failure, Needs_From_Request, Needs_From_Success } from "../reduxConstant/NeedsConstant"
import Axios from 'axios';

export const NeedsAction = () => async (dispatch) => {
    dispatch({
        type: Needs_From_Request,
    });
    try {
        const {Needs} = await Axios.get('/data_needs/api');
        dispatch({
            type: Needs_From_Success,
            payload: Needs,
        });
    } catch (error) {
        dispatch({
            type: Needs_From_Failure,
            payload: error.massage
        });
    }
}

