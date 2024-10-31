import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import uniformsService from '../uniforms/uniformsService';
import { getToken } from '../../utils/getToken';

const initialState = {
    uniforms: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

// Get All Uniforms 
export const alluniforms = createAsyncThunk('admin/uniforms', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await uniformsService.getAllUniforms(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Uniform Toggle Status
export const toggleStatus = createAsyncThunk('admin/uniform/status', async (data, thunkAPI) => {
    const { uniform_id, pageno } = data;
    const token = getToken()
    try {
        if (token) {
            return await uniformsService.toggleStatus(token, uniform_id, pageno);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//  Create Uniform
export const createUniform = createAsyncThunk('admin/uniform', async (data, thunkAPI) => {
    const token = getToken()
    const { jobrole, pageno, description, icon } = data;
    const createObj = {
        jobrole_id: jobrole, description, image: icon
    }
    try {
        if(token) {
            return await uniformsService.createUniform(token, createObj, pageno);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const uniformsSlice = createSlice({
    name: "unifrom",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(alluniforms.pending, (state) => {
            state.isLoading = true;
        }).addCase(alluniforms.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.uniforms = action.payload;
        }).addCase(alluniforms.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.uniforms = null;
        }).addCase(toggleStatus.pending, (state) => {
            state.isLoading = false;
        }).addCase(toggleStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.uniforms = action.payload;
        }).addCase(toggleStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.uniforms = null;
        }).addCase(createUniform.pending, (state) => {
            state.isLoading = false;
        }).addCase(createUniform.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.uniforms = action.payload;
        }).addCase(createUniform.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.uniforms = null;
        })
    }
})

export const { reset } = uniformsSlice.actions;

export default uniformsSlice.reducer