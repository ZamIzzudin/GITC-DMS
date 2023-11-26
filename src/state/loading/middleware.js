import { IsLoadingAction, IsntLoadingAction } from './action'

function IsLoading() {
    return dispatch => {
        dispatch(IsLoadingAction())
    }
}

function IsntLoading() {
    return dispatch => {
        dispatch(IsntLoadingAction())
    }
}

export { IsLoading, IsntLoading }