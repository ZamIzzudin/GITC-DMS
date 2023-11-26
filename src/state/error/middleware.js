import { IsErrorAction, IsntErrorAction } from './action'

function ShowError(title, message) {
    return dispatch => {
        dispatch(IsErrorAction(title, message))
    }
}

function HideError() {
    return dispatch => {
        dispatch(IsntErrorAction())
    }
}

export { ShowError, HideError }