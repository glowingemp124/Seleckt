import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import faqService from './faqService';
import { getToken } from '../../utils/getToken';

const initialState = {
    faqs: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

//get All FAQs 
export const allFaqs = createAsyncThunk('admin/uniforms', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await faqService.getAllFAQS(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Create FAQ
export const createfaq = createAsyncThunk('admin/faq/post', async (data, thunkAPI) => {
    const token = getToken()
    const { title, fmessage, pageno } = data;
    const createObj = {
        title, 
        message: fmessage
    }

    try {
        if (token) {
            return await faqService.createFAQ(token, createObj, pageno);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const faqSlice = createSlice({
    name: "faqs",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(allFaqs.pending, (state) => {
            state.isLoading = true;
        }).addCase(allFaqs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.faqs = action.payload;
        }).addCase(allFaqs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.faqs = null;
        }).addCase(createfaq.pending, (state) => {
            state.isLoading = false;
        }).addCase(createfaq.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.faqs = action.payload;
        }).addCase(createfaq.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.faqs = null;
        })
    }
})
export const { reset } = faqSlice.actions;


export default faqSlice.reducer