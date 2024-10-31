import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL

// Get All Uniforms
const getAllUniforms = async (token, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/uniforms?pageno=${pageno}`, config);
    if (response.data.body) {
        return response.data;
    }
}



// Create Uniform
const createUniform = async (token, data) => {
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
    const response = await axios.post(`${BASE_URL}/admin/uniform`, data, config);
    if (response.data.body) {
        return response.data;
    }


}

// get All Workers Users
const toggleStatus = async (token, uniform_id, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/uniform/status/${uniform_id}?pageno=${pageno}`, null, config);
    if (response.data.body) {
        return response.data;
    }
}


const unifromsService = {
    getAllUniforms, toggleStatus, createUniform
}

export default unifromsService;