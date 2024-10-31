import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import temlpateService from '../templates/templateService';
import { getToken } from '../../utils/getToken';

const initialState = {
    templates: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

// Get All Templates
export const alltemplates = createAsyncThunk('admin/templates', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await temlpateService.getAllTemplates(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Toggle Approved
export const toggleStatus = createAsyncThunk('admin/employers/approved', async (data, thunkAPI) => {
    const { template_id, pageno } = data
    const token = getToken()
    try {
        if (token) {
            return await temlpateService.toggleStatus(token, pageno, template_id);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const templateSlice = createSlice({
    name: "templates",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(alltemplates.pending, (state) => {
            state.isLoading = true;
        }).addCase(alltemplates.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.templates = action.payload;
        }).addCase(alltemplates.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.templates = null;
        }).addCase(toggleStatus.pending, (state) => {
            state.isLoading = false;
        }).addCase(toggleStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.templates = action.payload;
        }).addCase(toggleStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.templates = null;
        })
    }
})
export const { reset } = templateSlice.actions;


export default templateSlice.reducer