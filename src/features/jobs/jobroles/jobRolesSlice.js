import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jobRolesService from './jobRolesService';

const initialState = {
    employerJobRoles: {},
    isError: false,
    isSuccess: false,
    loadingJobroles: false,
    message: ""
}

//get all jobs 
export const allJobRoles = createAsyncThunk('jobs/jobrole', async (token, thunkAPI) => {
    try {
        if(token) {
            return await jobRolesService.getAllJobRoles(token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const jobRolesSlice = createSlice({
    name: "employerJobRoles",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(allJobRoles.pending, (state) => {
            state.loadingJobroles = true;
        }).addCase(allJobRoles.fulfilled, (state, action) => {
            state.loadingJobroles = false;
            state.isSuccess = true;
            state.employerJobRoles = action.payload;
        }).addCase(allJobRoles.rejected, (state, action) => {
            state.loadingJobroles = false;
            state.isError = true;
            state.message = action.payload;
            state.employerJobRoles = null;
        })
    }
})
export const { reset } = jobRolesSlice.actions;


export default jobRolesSlice.reducer