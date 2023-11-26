const ActionType = {
    IS_LOADING: 'IS_LOADING',
    ISNT_LOADING: 'ISNT_LOADING'
}

function IsLoadingAction() {
    return {
        type: ActionType.IS_LOADING,
        payload: {
            status: true
        }
    }
}
function IsntLoadingAction() {
    return {
        type: ActionType.ISNT_LOADING,
    }
}

export { ActionType, IsLoadingAction, IsntLoadingAction }