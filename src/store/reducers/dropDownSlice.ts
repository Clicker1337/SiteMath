import {createSlice} from '@reduxjs/toolkit';
import {IDropDownSlice} from '../../types/states/IDropDownState';

const initialState: IDropDownSlice = {
    addOption: true,
    editOption: false,
    removeOption: false,
};

export const dropDownSlice = createSlice({
    name: 'dropDown',
    initialState,
    reducers: {
        addOptionActive: (state) => {
            state.addOption = true;
            state.editOption = false;
            state.removeOption = false;
        },
        editOptionActive: (state) => {
            state.addOption = false;
            state.editOption = true;
            state.removeOption = false;
        },
        removeOptionActive: (state) => {
            state.addOption = false;
            state.editOption = false;
            state.removeOption = true;
        },
    },
});

export default dropDownSlice;
