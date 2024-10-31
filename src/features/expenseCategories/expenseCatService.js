import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL

// get All Expenses
const getExpenseCat = async (token, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/expense/categories?pageno=${pageno}`, config);
    if (response.data.body) {
        return response.data;
    }
}

// create Uniform
const createExpenseCat = async (token, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(`${BASE_URL}/admin/expenses/category`, data, config);
    if (response.data.body) {
        return response.data;
    }
}
const expenseCatService = {
    getExpenseCat, createExpenseCat
}


export default expenseCatService;