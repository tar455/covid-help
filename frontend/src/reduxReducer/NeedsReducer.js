import { Needs_From_Failure, Needs_From_Request, Needs_From_Success } from "../reduxConstant/NeedsConstant";


export const NeedsReducer = (
    state = {patients: [] },
    action
) => {
    switch (action.type) {
        case Needs_From_Request:
            return { loading: true };
        case Needs_From_Success:
            return { loading: false, patients: action.payload };
        case Needs_From_Failure:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
