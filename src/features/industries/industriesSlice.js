import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import industriesService from '../industries/industriesService';
import { getToken } from '../../utils/getToken';

const initialState = {
    industries: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//Get All Industries
export const allindustries = createAsyncThunk('admin/industries', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await industriesService.getAllIndustries(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


//Toggle Industries Status
export const toggleStatus = createAsyncThunk('admin/industry', async (data, thunkAPI) => {
    const { industry_id, pageno } = data;
    const token = getToken()
    try {
        if (token) {
            return await industriesService.toggleStatus(token, industry_id, pageno);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const industriesSlice = createSlice({
    name: "industries",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(allindustries.pending, (state) => {
            state.isLoading = true;
        }).addCase(allindustries.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.industries = action.payload;
        }).addCase(allindustries.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.industries = null;
        }).addCase(toggleStatus.pending, (state) => {
            state.isLoading = false;
        }).addCase(toggleStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.industries = action.payload;
        }).addCase(toggleStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.industries = null;
        })
    }
})
export const { reset } = industriesSlice.actions;


export default industriesSlice.reducer