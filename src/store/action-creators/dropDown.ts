import {AppDispatch} from '..';

import dropDownSlice from '../reducers/dropDownSlice';

import {dropDownOptions} from '../../types/enums/dropDownOptions';

export const option = (label: string) => async (dispatch: AppDispatch) => {
    switch (label) {
        case dropDownOptions.ADD_OPTION:
            dispatch(
                dropDownSlice.actions.addOptionActive(),
            );
            break;
        case dropDownOptions.EDIT_OPTION:
            dispatch(
                dropDownSlice.actions.editOptionActive(),
            );
            break;
        case dropDownOptions.REMOVE_OPTION:
            dispatch(
                dropDownSlice.actions.removeOptionActive(),
            );
            break;

        default:
            alert('Не выбрана опция');
    }
};

export type dropDownType = ReturnType<typeof option>;
