import {createSlice} from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name:"auth",
    initialState: {
        value: null
    },
    reducers: {
        loginDispatch: (state, action) => {
            state.value = {
                email: action.payload.email,
                token: action.payload.token
            }
        },
        logout: state => {
            state.value = null
        }
    }
})

export const { loginDispatch, logout } = authSlice.actions
export default authSlice.reducer