import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import settingsService from './settingsService';
import { getToken } from '../../utils/getToken';

const initialState = {
    data: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

// Get All Privacy 
export const getPrivacy = createAsyncThunk('admin/privacy/get', async (_, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await settingsService.getPrivacy(token, _);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get All TAC 
export const getTAC = createAsyncThunk('admin/tac/get', async (_, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await settingsService.getTAC(token, _);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get All ABOUT 
export const getAbout = createAsyncThunk('admin/about/get', async (_, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await settingsService.getAbout(token, _);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Create ABOUT 
export const createAbout = createAsyncThunk('admin/about/put', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await settingsService.createABOUT(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Create Privacy 
export const createPrivacy = createAsyncThunk('admin/privacy/put', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await settingsService.createPrivacy(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Create TAC 
export const createTAC = createAsyncThunk('admin/TAC/put', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await settingsService.createTAC(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getSettings = createAsyncThunk('admin/settings/get', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await settingsService.getSettings(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const putSettings = createAsyncThunk('admin/settings/put', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await settingsService.updateSettings(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const SettingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(getPrivacy.pending, (state) => {
            state.isLoading = true;
        }).addCase(getPrivacy.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.data = action.payload;
        }).addCase(getPrivacy.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.data = null;
        }).addCase(getAbout.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAbout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.data = action.payload;
        }).addCase(getAbout.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.data = null;
        }).addCase(getTAC.pending, (state) => {
            state.isLoading = true;
        }).addCase(getTAC.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.data = action.payload;
        }).addCase(getTAC.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.data = null;
        }).addCase(getSettings.pending, (state) => {
            state.isLoading = true;
        }).addCase(getSettings.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.data = action.payload;
        }).addCase(getSettings.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.data = null;
        }).addCase(putSettings.pending, (state) => {
            state.isLoading = false;
        }).addCase(putSettings.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.data = action.payload;
        }).addCase(putSettings.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.data = null;
        }).addCase(createPrivacy.pending, (state) => {
            state.isLoading = false;
        }).addCase(createPrivacy.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.data = action.payload;
        }).addCase(createPrivacy.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.data = null;
        }).addCase(createTAC.pending, (state) => {
            state.isLoading = false;
        }).addCase(createTAC.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.data = action.payload;
        }).addCase(createTAC.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.data = null;
        }).addCase(createAbout.pending, (state) => {
            state.isLoading = false;
        }).addCase(createAbout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.data = action.payload;
        }).addCase(createAbout.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.data = null;
        })
    }
})
export const { reset } = SettingsSlice.actions;


export default SettingsSlice.reducer