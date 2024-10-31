import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import skillsService from '../skills/skillsService';
import { getToken } from '../../utils/getToken';

const initialState = {
    skills: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//Get All Skills 
export const allskills = createAsyncThunk('admin/skills', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if(token) {
            return await skillsService.getAllSkills(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Skill Toggle Status
export const toggleStatus = createAsyncThunk('admin/skill/status', async (data, thunkAPI) => {
    const { skill_id, pageno } = data;
    const token = getToken()
    try {
        if(token) {
            return await skillsService.toggleStatus(token, skill_id, pageno);
        }
    } catch (error) {
        const message = (error?.response && error?.response?.data && error?.response?.data.message) || error?.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(allskills.pending, (state) => {
            state.isLoading = true;
        }).addCase(allskills.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.skills = action.payload;
        }).addCase(allskills.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.skills = null;
        }).addCase(toggleStatus.pending, (state) => {
            state.isLoading = false;
        }).addCase(toggleStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.skills = action.payload;
        }).addCase(toggleStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.skills = null;
        })
    }
})


export const { reset } = skillsSlice.actions;

export default skillsSlice.reducer