import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import expenseService from './expenseCatService';

// get user from local storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    expenseCat: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

//get all skills 
export const allExpenseCat = createAsyncThunk('admin/expenses/cat/get', async (data, thunkAPI) => {
    try {
        return await expenseService.getExpenseCat(user.accesstoken, data);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const createExpenseCat = createAsyncThunk('admin/expenses/cat/post', async (data, thunkAPI) => {
    const { title, pageno, } = data;
    const createObj = {
        title
    }
    try {
        return await expenseService.createExpenseCat(user.accesstoken, createObj, pageno);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const expenseCatSlice = createSlice({
    name: "expenseCat",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(allExpenseCat.pending, (state) => {
            state.isLoading = true;
        }).addCase(allExpenseCat.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.expenseCat = action.payload;
        }).addCase(allExpenseCat.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.expenseCat = null;
        }).addCase(createExpenseCat.pending, (state) => {
            state.isLoading = false;
        }).addCase(createExpenseCat.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.expenseCat = action.payload;
        }).addCase(createExpenseCat.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.expenseCat = null;
        })
    }
})
export const { reset } = expenseCatSlice.actions;


export default expenseCatSlice.reducer