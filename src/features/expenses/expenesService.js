import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL

// get All Expenses
const getExpenses = async (token, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/expenses?pageno=${pageno}`, config);
    if (response.data.body) {
        return response.data;
    }
}



// create Uniform
const createExpense = async (token, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(`${BASE_URL}/admin/expense`, data, config);
    if (response.data.body) {
        return response.data;
    }


}
const expenseService = {
    getExpenses, createExpense
}


export default expenseService;