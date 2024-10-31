import axios from 'axios';

// get All Workers Users
const BASE_URL = process.env.REACT_APP_BASEURL
const getAllTemplates = async (token, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/templates?pageno=${pageno}`, config);
    if (response.data.body) {
        return response.data;
    }
}


const toggleStatus = async (token, pageno, template_id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/template/toggle/${template_id}?pageno=${pageno}`, null, config);
    if (response.data.body) {
        return response.data;
    }
}

const templateService = {
    getAllTemplates, toggleStatus
}


export default templateService;