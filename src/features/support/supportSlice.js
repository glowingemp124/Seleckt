import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import supportService from './supportService';
import { getToken } from '../../utils/getToken';

const initialState = {
    support: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

// Get All Support 
export const allsupport = createAsyncThunk('admin/suport', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if(token) {
            return await supportService.getAllSupportRequests(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const supportSlice = createSlice({
    name: "support",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(allsupport.pending, (state) => {
            state.isLoading = true;
        }).addCase(allsupport.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.support = action.payload;
        }).addCase(allsupport.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.support = null;
        })
    }
})
export const { reset } = supportSlice.actions;


export default supportSlice.reducer