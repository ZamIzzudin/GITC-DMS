import { ActionType } from "./action"

export default function OfferingReducer(offers = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_OFFERING_LETTER:
            return offers = action.payload.letters
        default:
            return offers;
    }
}