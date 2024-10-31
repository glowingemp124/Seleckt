import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL

// get All Support Requests
const getAllSupportRequests = async (token, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/support?pageno=${pageno}`, config);
    if (response.data.body) {
        return response.data;
    }
}

const supportService = {
    getAllSupportRequests
}


export default supportService;