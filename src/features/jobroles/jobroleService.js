import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL

// get All Job Roles
const getAllJobroles = async (token, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/jobroles?pageno=${pageno}`, config);
    if (response.data.body) {
        return response.data;
    }
}


// toggle Industry Status
const toggleStatus = async (token, jobrole_id, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/jobrole/status/${jobrole_id}?pageno=${pageno}`, null, config);
    if (response.data.body) {
        return response.data;
    }
}

// Create Job Role
const createJobrole = async (token, data, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const configImage = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            Accept: "*/*"
        }
    }

    const FormData = require('form-data');
    let imagedata = new FormData();
    imagedata.append('file', (data.image));
    const imageRes = await axios.post(`${BASE_URL}/file/upload`, imagedata, configImage);
    if (imageRes.data.body) {
        delete data.image
        data.icon = imageRes.data.body.fileName;
    }
    const response = await axios.post(`${BASE_URL}/admin/Jobrole?pageno=${pageno}`, data, config);
    if (response.data.body) {
        return response.data;
    }
}


// create Uniform
const updateJobrole = async (token, data, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const configImage = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            Accept: "*/*"
        }
    }

    const FormData = require('form-data');
    let imagedata = new FormData();
    imagedata.append('file', (data.image));
    const imageRes = await axios.post(`${BASE_URL}/file/upload`, imagedata, configImage);
    if (imageRes.data.body) {
        delete data.image
        data.icon = imageRes.data.body.fileName;
    }
    const response = await axios.put(`${BASE_URL}/admin/Jobrole?pageno=${pageno}`, data, config);
    if (response.data.body) {
        return response.data;
    }
}


// Export Defaults
const jobroleService = {
    getAllJobroles, toggleStatus, createJobrole,updateJobrole
}


export default jobroleService;