import { configureStore } from "@reduxjs/toolkit"
import { loadingBarReducer } from "react-redux-loading-bar";

import AuthReducer from "./auth/reducer";
import ErrorReducer from "./error/reducer";
import LoadingReducer from "./loading/reducer";

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        loadingBar: loadingBarReducer,
        error: ErrorReducer,
        loading: LoadingReducer
    }
});

export { store }