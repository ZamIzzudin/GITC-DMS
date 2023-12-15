import { ActionType } from "./action"

export default function ConfirmReducer(confirms = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_CONFIRM_LETTER:
            return confirms = action.payload.letters
        default:
            return confirms;
    }
}