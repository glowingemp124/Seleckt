import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jobroleService from '../jobroles/jobroleService';
import { getToken } from '../../utils/getToken';

const initialState = {
    jobroles: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//Get All Job Roles
export const alljobroles = createAsyncThunk('admin/job-role', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await jobroleService.getAllJobroles(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


//Toggle Industries Status
export const toggleStatus = createAsyncThunk('admin/jobrole/status', async (data, thunkAPI) => {
    const token = getToken()
    const { jobrole_id, pageno } = data;
    try {
        if (token) {
            return await jobroleService.toggleStatus(token, jobrole_id, pageno);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Add Job Role
export const createJobrole = createAsyncThunk('admin/jobrole', async (data, thunkAPI) => {
    const token = getToken()
    const { pageno, title, icon, price } = data;
    const createObj = {
        title, image: icon, price
    }
    try {
        if (token) {
            return await jobroleService.createJobrole(token, createObj, pageno);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


//Update Job Role
export const updateJobrole = createAsyncThunk('admin/jobrole/update', async (data, thunkAPI) => {
    const token = getToken()
    const { pageno, title, icon, price, _id } = data;
    const updateObj = {
        title, image: icon, price, _id
    }
    try {
        if (token) {
            return await jobroleService.updateJobrole(token, updateObj, pageno);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const jobroleSlice = createSlice({
    name: "jobroles",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(alljobroles.pending, (state) => {
            state.isLoading = true;
        }).addCase(alljobroles.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.jobroles = action.payload;
        }).addCase(alljobroles.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.jobroles = null;
        }).addCase(toggleStatus.pending, (state) => {
            state.isLoading = false;
        }).addCase(toggleStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.jobroles = action.payload;
        }).addCase(toggleStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.jobroles = null;
        }).addCase(createJobrole.pending, (state) => {
            state.isLoading = false;
        }).addCase(createJobrole.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.jobroles = action.payload;
            // state.jobroles.body.jobroles.push(action.payload);
        }).addCase(createJobrole.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.jobroles = null;
        }).addCase(updateJobrole.pending, (state) => {
            state.isLoading = false;
        }).addCase(updateJobrole.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.jobroles = action.payload;
            // state.jobroles.body.jobroles.push(action.payload);
        }).addCase(updateJobrole.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.jobroles = null;
        })

    }
})
export const { reset } = jobroleSlice.actions;


export default jobroleSlice.reducer