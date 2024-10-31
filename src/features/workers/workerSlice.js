import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import workerService from '../workers/workerService';
import { getToken } from '../../utils/getToken';

const initialState = {
    workers: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//Get All Workers
export const allworkers = createAsyncThunk('admin/workers', async (pageno, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await workerService.getAllWorkers(token, pageno);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get Worker Details / Profile
export const profileId = createAsyncThunk('admin/worker/profile', async (id, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await workerService.getWorkersProfile(token, id);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//  Worker Toggle Status
export const toggleStatus = createAsyncThunk('worker/status', async (data, thunkAPI) => {
    const user_id = data.user_id
    const pageno = data.pageno
    const token = getToken()
    
    try {
        if (token) {
            return await workerService.toggleStatus(getToken(), user_id, pageno);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const toggleApproved = createAsyncThunk('worker/approved', async (data, thunkAPI) => {
    try {
        const user_id = data.user_id
        const pageno = data.pageno
        const token = getToken()
        if (token) {
            return await workerService.toggleApproved(getToken(), user_id, pageno);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const workerAvailibility = createAsyncThunk('admin/worker/availability', async (id, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await workerService.getWorkerAvailibility(token, id);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const workerJobs = createAsyncThunk('admin/worker/worker_id/jobs', async (params, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await workerService.getWorkerJobs(token, params);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const workerSlice = createSlice({
    name: "worker",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(allworkers.pending, (state) => { // all workers
            state.isLoading = true;
        }).addCase(allworkers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.workers = action.payload;
        }).addCase(allworkers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.workers = [];
        }).addCase(toggleStatus.pending, (state) => { // toggle status
            state.isLoading = false;
        }).addCase(toggleStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.workers = action.payload;
        }).addCase(toggleStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.workers = null;
        }).addCase(toggleApproved.pending, (state) => { //toggle approved status
            state.isLoading = false;
        }).addCase(toggleApproved.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.workers = action.payload;
        }).addCase(toggleApproved.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.workers = null;
        }).addCase(profileId.pending, (state) => { //profile Id
            state.isLoading = true;
        }).addCase(profileId.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.workers = action.payload;
        }).addCase(profileId.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.workers = {};
        }).addCase(workerAvailibility.pending, (state) => { //worker Availibility
            state.isLoading = true;
        }).addCase(workerAvailibility.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.workerAvail = action.payload.data;
        }).addCase(workerAvailibility.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.workerAvail = {};
        }).addCase(workerJobs.pending, (state) => { //worker Jobs
            state.isLoading = true;
        }).addCase(workerJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.workerJob = action.payload.data;
        }).addCase(workerJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.workerJob = {};
        })
    }
})
export const { reset } = workerSlice.actions;


export default workerSlice.reducer