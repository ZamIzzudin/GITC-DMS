import { GetUsersActions } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

function AsyncGetUsers(type, search) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.GetUsers(type, search);
            dispatch(GetUsersActions(data));
        } catch (err) {
            console.error(err);
            dispatch(GetUsersActions([]));
        }
        dispatch(hideLoading());
    }
}

export { AsyncGetUsers }