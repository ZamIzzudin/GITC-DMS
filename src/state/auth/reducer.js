import { ActionType } from "./action"

export default function AuthReducer(auth = {}, action = {}) {
    switch (action.type) {
        case ActionType.LOGIN_USER:
            return auth = action.payload.authUser
        default:
            return auth;
    }
}