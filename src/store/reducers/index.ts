import {combineReducers} from 'redux';

import authorization from './authorizationSlice';
import dropDown from './dropDownSlice';

export const rootReducer = combineReducers({

    authorization: authorization.reducer,
    dropDown: dropDown.reducer,

});

export type RootState = ReturnType<typeof rootReducer>;
