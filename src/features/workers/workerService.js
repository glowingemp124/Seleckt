import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL

// get All Workers Users //
const getAllWorkers = async (token, pageno) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const response = await axios.get(`${BASE_URL}/admin/workers?pageno=${pageno}`, config);
        if (response?.data?.body) {
            return response.data;
        }
    } catch (error) {
        throw error
    }
}

// Get Worker Profile //
const getWorkersProfile = async (token, id) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const response = await axios.get(`${BASE_URL}/admin/worker/${id}`, config);
    if (response.data.body) {
        return response.data;
    }
}

// Toggle Status Approved //
const toggleApproved = async (token, user_id, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/worker/approved/${user_id}?pageno=${pageno}`, null, config);
    if (response.data.body) {
        return response.data;
    }
}

// Toggle Status //
const toggleStatus = async (token, user_id, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/worker/status/${user_id}?pageno=${pageno}`, null, config);
    if (response.data.body) {
        return response.data;
    }
}

// Get Worker Availibility
const getWorkerAvailibility = async (token, user_id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        return await axios.get(`${BASE_URL}/admin/worker/availability/${user_id}`, config)
    } catch (error) {
        throw error
    }
}

// Get Worker Jobs //
const getWorkerJobs = async (token, params) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        return await axios.get(`${BASE_URL}/admin/worker/${params?.id}/jobs?status=${params.status}&pageno=${params.pageno}`, config)
    } catch (error) {
        throw error
    }
}


const workerService = {
    getAllWorkers, toggleStatus, toggleApproved, getWorkersProfile, getWorkerAvailibility, getWorkerJobs
}

export default workerService;