import { configureStore } from "@reduxjs/toolkit"
import { loadingBarReducer } from "react-redux-loading-bar";

import AuthReducer from "./auth/reducer";
import UsersReducer from "./users/reducer";
import ErrorReducer from "./error/reducer";
import LoadingReducer from "./loading/reducer";
import ConfirmReducer from "./confirm/reducer";
import OfferingReducer from "./offering/reducer";

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        loadingBar: loadingBarReducer,
        error: ErrorReducer,
        loading: LoadingReducer,
        users: UsersReducer,
        confirms: ConfirmReducer,
        offers: OfferingReducer
    }
});

export { store }