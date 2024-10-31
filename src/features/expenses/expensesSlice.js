import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import expenseService from './expenesService';
import { getToken } from '../../utils/getToken';

const initialState = {
    expenses: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

//get all skills 
export const allExpenses = createAsyncThunk('admin/expenses/get', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if(token) {
            return await expenseService.getExpenses(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const createExpense = createAsyncThunk('admin/expenses/post', async (data, thunkAPI) => {
    const token = getToken()
    const { category_id, pageno, description, amount } = data;
    const createObj = {
        category_id, description, amount
    }
    try {
        if(token) {
            return await expenseService.createExpense(token, createObj, pageno);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const expenseSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(allExpenses.pending, (state) => {
            state.isLoading = true;
        }).addCase(allExpenses.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.expenses = action.payload;
        }).addCase(allExpenses.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.expenses = null;
        }).addCase(createExpense.pending, (state) => {
            state.isLoading = false;
        }).addCase(createExpense.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.expenses = action.payload;
        }).addCase(createExpense.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.expenses = null;
        })
    }
})
export const { reset } = expenseSlice.actions;


export default expenseSlice.reducer