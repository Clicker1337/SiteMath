import {AppDispatch} from '..';
import {dropDownIdOption} from '../../types/enums/dropDownOptions';

import dropDownSlice from '../reducers/dropDownSlice';

export const option = (id: any) => async (dispatch: AppDispatch) => {
    switch (id) {
        case dropDownIdOption.ADD:
            dispatch(
                dropDownSlice.actions.addOptionActive(),
            );
            break;
        case dropDownIdOption.EDIT:
            dispatch(
                dropDownSlice.actions.editOptionActive(),
            );
            break;
        case dropDownIdOption.REMOVE:
            dispatch(
                dropDownSlice.actions.removeOptionActive(),
            );
            break;

        default:
            alert(id);
    }
};

export type dropDownType = ReturnType<typeof option>;
