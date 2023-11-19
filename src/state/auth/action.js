const ActionType = {
    LOGIN_USER: "LOGIN_USER",
    LOGOUT_USER: "LOGOUT_USER"
}

function LoginAction(authUser) {
    return {
        type: ActionType.LOGIN_USER,
        payload: {
            authUser
        }
    }
}

export { ActionType, LoginAction }
