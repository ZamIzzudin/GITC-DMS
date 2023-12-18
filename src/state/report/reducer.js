import { ActionType } from "./action"

const setup = {
    bulan: "Unset",
    details: [],
    tahun: "Unset",
    top_percentage_rank: [],
    top_revanue_rank: [],
    top_unit_rank: [],
    total_revanue: 0,
    total_unit: 0
}

export default function ReportReducer(report = setup, action = {}) {
    switch (action.type) {
        case ActionType.GET_REPORT:
            return report = action.payload.data
        default:
            return report;
    }
}