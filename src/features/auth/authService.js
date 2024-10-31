import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL
const API_URL = BASE_URL + '/admin/login'

// Register User
const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// login User
const login = async (userData) => {
    try {
        const response = await axios.post(API_URL, userData);
        console.log("rs ===", response)
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data.body));
        }

        return response.data;
    } catch (error) {
        console.log(error)
    }
}

// Logout User
const logout = async () => {
    localStorage.removeItem('user');
}


const authService = {
    register, logout, login
}


export default authService;