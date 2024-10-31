import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL;

// get All Employers
const getAllEmployers = async (token, pageno) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.get(`${BASE_URL}/admin/employers?pageno=${pageno}`, config);
        if (response?.data?.body) {
            return response.data;
        }
    } catch (error) {
        console.log("error => ", error)
        throw error
    }
}

// Get Employer Details / Profile
const getEmployersProfile = async (token, id) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/employer/${id}`, config);
    if (response.data.body) {
        return response.data;
    }
}


const toggleStatus = async (token, pageno, user_id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/employer/status/${user_id}?pageno=${pageno}`, null, config);
    if (response.data.body) {
        return response.data;
    }
}


const toggleApproved = async (token, pageno, user_id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/employer/approved/${user_id}?pageno=${pageno}`, null, config);
    if (response.data.body) {
        return response.data;
    }
}


const toggleAdminInput = async (token, pageno, user_id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/employer/admininput/${user_id}?pageno=${pageno}`, null, config);
    if (response.data.body) {
        return response.data;
    }
}

// Get Employer Jobs //
const getEmployerJobs = async (token, params) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        return await axios.get(`${BASE_URL}/admin/employer/${params?.id}/jobs?status=${params.status}&pageno=${params.pageno}&keyword=${params.keyword}`, config)
    } catch (error) {
        console.log(error)
        throw error
    }
}


const getVenues = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        return await axios.get(`${BASE_URL}/employer/venue`, config)
    } catch (error) {
        console.log(error)
        throw error
    }
}


const employerService = {
    getAllEmployers, toggleApproved, toggleStatus, toggleAdminInput, getEmployersProfile, getEmployerJobs, getVenues
}


export default employerService;