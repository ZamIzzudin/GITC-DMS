const ActionType = {
    LOGIN_USER: 'LOGIN_USER',
    REGISTER_USER: 'REGISTER_USER',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
    LOGOUT_USER: 'LOGOUT_USER',
}

function LoginAction(authUser) {
    return {
        type: ActionType.LOGIN_USER,
        payload: {
            authUser
        }
    }
}

function RegisterAction(authUser) {
    return {
        type: ActionType.REGISTER_USER,
        payload: {
            authUser
        }
    }
}

function RefreshTokenAction(token) {
    return {
        type: ActionType.REFRESH_TOKEN,
        payload: {
            token
        }
    }
}

function LogoutAction() {
    return {
        type: ActionType.LOGOUT_USER,
        payload: {
            authUser: {}
        }
    }
}

export { ActionType, LoginAction, RegisterAction, RefreshTokenAction, LogoutAction }
