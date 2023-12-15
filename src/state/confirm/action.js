const ActionType = {
    GET_CONFIRM_LETTER: 'GET_CONFIRM_LETTER',
}

function GetConfirmsAction(letters) {
    return {
        type: ActionType.GET_CONFIRM_LETTER,
        payload: {
            letters
        }
    }
}


export { ActionType, GetConfirmsAction }