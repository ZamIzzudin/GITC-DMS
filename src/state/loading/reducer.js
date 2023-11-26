import { ActionType } from "./action";

export default function LoadingReducer(loading = { status: false }, action = {}) {
    switch (action.type) {
        case ActionType.IS_LOADING:
            return loading = action.payload
        case ActionType.ISNT_LOADING:
            return loading = { status: false }
        default:
            return loading;
    }
}