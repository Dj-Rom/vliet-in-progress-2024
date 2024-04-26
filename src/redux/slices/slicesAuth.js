
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    inputWithAuthPage_login: '',
    inputWithAuthPage_password: '',
    submit: false

};

const authSlices = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        changeInputLogin: (state, action) => {

            state.inputWithAuthPage_login = action.payload

        },
        changeInputPassword: (state, action) => {
            state.inputWithAuthPage_password = action.payload

        }, submitLoginAndPasswords: (state, action) => {
            state.submit = true;
        },
        submitLoginAndPasswordsCleanInput: (state, action) => {
            state.inputWithAuthPage_password = ''
            state.inputWithAuthPage_login = ''
        },
        afterSubmitLoginAndPasswords: (state, action) => {
            state.submit = false;
        }
    },

});

export const selecterInputWithAuthPage_login = (state) => state.authUser.inputWithAuthPage_login
export const selecterInputWithAuthPage_password = (state) => state.authUser.inputWithAuthPage_password
export const selecterSubmitAuth = (state) => state.authUser.submit
export const { changeInputPassword, changeInputLogin, submitLoginAndPasswords, afterSubmitLoginAndPasswords, submitLoginAndPasswordsCleanInput } = authSlices.actions
export default authSlices.reducer;
