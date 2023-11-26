const ActionType = {
    IS_ERROR: 'IS_ERROR',
    ISNT_ERROR: 'ISNT_ERROR'
}

function IsErrorAction(title, message) {
    return {
        type: ActionType.IS_ERROR,
        payload: {
            status: true,
            title: title,
            message: message
        }
    }
}

function IsntErrorAction() {
    return {
        type: ActionType.ISNT_ERROR,
    }
}

export { ActionType, IsErrorAction, IsntErrorAction }