import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL

// get All Industries
const getAllIndustries = async (token, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/industries?pageno=${pageno}`, config);
    if (response.data.body) {
        return response.data;
    }
}


// toggle Industry Status
const toggleStatus = async (token, industry_id, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/industry/status/${industry_id}?pageno=${pageno}`, null, config);
    if (response.data.body) {
        return response.data;
    }
}

const industriesService = {
    getAllIndustries, toggleStatus
}


export default industriesService;