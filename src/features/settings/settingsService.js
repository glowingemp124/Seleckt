import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL

// get All privacy
const getPrivacy = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/privacy`, config);
    if (response.data.body) {
        return response.data;
    }
}


const getTAC = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/tac`, config);
    if (response.data.body) {
        return response.data;
    }
}


const getAbout = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/about`, config);
    if (response.data.body) {
        return response.data;
    }
}




const createPrivacy = async (token, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/privacy`, data, config);
    if (response.data.body) {
        return response.data;
    }
}


const createTAC = async (token, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/tac`, data, config);
    if (response.data.body) {
        return response.data;
    }
}


const createABOUT = async (token, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/about`, data, config);
    if (response.data.body) {
        return response.data;
    }
}



const updateSettings = async (token, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/settings`, data, config);
    if (response.data.body) {
        return response.data;
    }
}


const getSettings = async (token, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/settings`, config);
    if (response.data.body) {
        return response.data;
    }
}





const SettignsService = {
    getPrivacy, getTAC, getAbout, createABOUT, createPrivacy, createTAC,updateSettings,getSettings
}


export default SettignsService;