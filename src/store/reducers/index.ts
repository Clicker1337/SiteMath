import { combineReducers } from "redux";

import authorization from "./authorizationSlice";

export const rootReducer = combineReducers({

	authorization: authorization.reducer,

});

export type RootState = ReturnType<typeof rootReducer>;