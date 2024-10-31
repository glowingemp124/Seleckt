import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL

// get All Jobs
const getAllJobRoles = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/jobs/jobrole`, config);
    if (response?.data?.body) {
        return response.data;
    }
}

const jobRolesService = {
    getAllJobRoles
}


export default jobRolesService;