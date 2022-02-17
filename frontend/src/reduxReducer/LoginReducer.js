import { Logout } from "../reduxConstant/LoginConst";
import { Login_Failure, Login_Request, Login_Success } from "../reduxConstant/NeedsConstant";


export const LoginReducer = (
    state = {},
    action
) => {
    switch (action.type) {
        case Login_Request:
            return {loading:true};
        case Login_Success:
            return {loading:false,userInfo:action.payload};
        case Login_Failure:
            return {loading:false,error:action.payload};
        case Logout:
            return {};
        default:
            return state;
    }
}