import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import employerService from '../employers/employerService';
import { getToken } from '../../utils/getToken';

const initialState = {
    employers: {},
    isError: false,
    isSuccess: false,
    accesstoken: "",
    isLoading: false,
    employerDetails: {},
    venues: {},
    message: ""
}

//get all employers
export const allemployers = createAsyncThunk('admin/employers', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await employerService.getAllEmployers(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// get employer profile/details
export const employerProfileId = createAsyncThunk('admin/worker/profile', async (id, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await employerService.getEmployersProfile(token, id);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//toggle Status
export const toggleStatus = createAsyncThunk('admin/employers/status', async (data, thunkAPI) => {
    const { user_id, pageno } = data
    const token = getToken()
    try {
        if (token) {
            return await employerService.toggleStatus(token, pageno, user_id);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


//toggle Approved
export const toggleApproved = createAsyncThunk('admin/employers/approved', async (data, thunkAPI) => {
    const { user_id, pageno } = data
    const token = getToken()
    try {
        if (token) {
            return await employerService.toggleApproved(token, pageno, user_id);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const toggleAdminInput = createAsyncThunk('admin/employers/admininput', async (data, thunkAPI) => {
    const { user_id, pageno } = data
    const token = getToken()
    try {
        if (token) {
            return await employerService.toggleAdminInput(token, pageno, user_id);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const employerJobs = createAsyncThunk('admin/employer/employer_id/jobs', async (params, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await employerService.getEmployerJobs(token, params);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//  get job template
export const getAllVenues = createAsyncThunk('employer/venue', async (token, thunkAPI) => {
    try {
        if (token) {
            return await employerService.getVenues(token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const employerSlice = createSlice({
    name: "employers",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(allemployers.pending, (state) => {
            state.isLoading = true;
        }).addCase(allemployers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.employers = action.payload;
        }).addCase(allemployers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.employers = null;
        }).addCase(toggleStatus.pending, (state) => {
            state.isLoading = false;
        }).addCase(toggleStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.employers = action.payload;
        }).addCase(toggleStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.employers = null;
        }).addCase(toggleApproved.pending, (state) => {
            state.isLoading = false;
        }).addCase(toggleApproved.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.employers = action.payload;
        }).addCase(toggleApproved.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.employers = null;
        }).addCase(toggleAdminInput.pending, (state) => {
            state.isLoading = false;
        }).addCase(toggleAdminInput.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.employers = action.payload;
        }).addCase(toggleAdminInput.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.employers = null;
        }).addCase(employerProfileId.pending, (state) => {  // Employer Detail
            state.isLoading = true;
        }).addCase(employerProfileId.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.employerDetails = action.payload;
            state.accesstoken = action.payload.body.accesstoken;
        }).addCase(employerProfileId.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.employerDetails = {};
        }).addCase(employerJobs.pending, (state) => { //employer Jobs
            state.isLoading = true;
        }).addCase(employerJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.employrJob = action.payload.data;
        }).addCase(employerJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.employrJob = {};
        }).addCase(getAllVenues.pending, (state) => { //get All Venues
            state.isLoading = false;
        }).addCase(getAllVenues.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.venues = action.payload.data;
        }).addCase(getAllVenues.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.venues = {};
        })
    }
})
export const { reset } = employerSlice.actions;
export default employerSlice.reducer