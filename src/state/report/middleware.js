import { GetReportAction } from "./action";
import api from "../../utils/api";

import { showLoading, hideLoading } from "react-redux-loading-bar";


function AsyncGetReport(year, month) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const response = await api.ReportPerMonth(year, month);
            dispatch(GetReportAction(response.data));
        } catch (err) {
            console.error(err);
            dispatch(GetReportAction({
                bulan: year,
                details: [],
                tahun: month,
                top_percentage_rank: [],
                top_revanue_rank: [],
                top_unit_rank: [],
                total_revanue: 0,
                total_unit: 0
            }));
        }
        dispatch(hideLoading());
    }
}


export { AsyncGetReport }