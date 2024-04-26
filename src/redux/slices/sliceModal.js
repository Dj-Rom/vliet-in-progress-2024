
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    inputWithAuthPage_login: 'empty',
    inputWithAuthPage_password: 'empty',
};

const modalSlices = createSlice({
    name: 'modal',
    initialState,
    reducers: {

    },

});

export default modalSlices.reducer;
