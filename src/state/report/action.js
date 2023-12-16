const ActionType = {
    GET_REPORT: 'GET_REPORT',
}

function GetReportAction(data) {
    return {
        type: ActionType.GET_REPORT,
        payload: {
            data
        }
    }
}


export { ActionType, GetReportAction }