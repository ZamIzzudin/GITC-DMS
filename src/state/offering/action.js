const ActionType = {
    GET_OFFERING_LETTER: 'GET_OFFERING_LETTER',
}

function GetOffersAction(letters) {
    return {
        type: ActionType.GET_OFFERING_LETTER,
        payload: {
            letters
        }
    }
}


export { ActionType, GetOffersAction }