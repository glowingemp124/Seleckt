import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL;

// Get Skills Of Job Role //
const getSkillsOfJobroles = async ({ jobrole_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        return await axios.post(`${BASE_URL}/jobs/skills`, { jobrole_id }, config)
    } catch (error) {
        throw error
    }
}

const postSkills = async ({ template_id, jobrole_id, skills }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        return await axios.post(`${BASE_URL}/job/template/skills`, { template_id, jobrole_id, skills }, config)
    } catch (error) {
        throw error
    }
}

// Get job temp //
const getJobTemp = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        return await axios.get(`${BASE_URL}/job/template`, config)
    } catch (error) {
        throw error
    }
}

// Get job temp //
const getTempJobRole = async ({ id, job_roles, is_active, template_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        return await axios.post(`${BASE_URL}/job/template/jobroles`, { id, job_roles, is_active, template_id }, config)
    } catch (error) {
        throw error
    }
}

const delTempJobRole = async ({ jobrole_id, template_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const data = { jobrole_id, template_id };

    try {
        return await axios.delete(`${BASE_URL}/job/template/jobrole`, { headers: config.headers, data });
    } catch (error) {
        throw error;
    }
}

const getIndustries = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.get(`${BASE_URL}/employer/industries`, config);
    } catch (error) {
        throw error;
    }
}

const postIndustry = async ({ industry_id, template_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        return await axios.post(`${BASE_URL}/job/template/industry`, { industry_id, template_id }, config);
    } catch (error) {
        throw error;
    }
}

const putIndustry = async ({ industry_id, template_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.put(`${BASE_URL}/job/template/industry`, { industry_id, template_id }, config);
    } catch (error) {
        throw error;
    }
}

const delSkill = async ({ jobrole_id, template_id, skill_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const data = { jobrole_id, template_id, skill_id };

    try {
        return await axios.delete(`${BASE_URL}/job/template/skills`, { headers: config.headers, data });
    } catch (error) {
        throw error;
    }
}

const addAdditionalDetails = async ({ template_id, jobrole_id, rate, po_number, break_time, break_paid, health_safety, hs_description, description }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.post(`${BASE_URL}/job/template/additional`, { template_id, jobrole_id, rate, po_number, break_time, break_paid, health_safety, hs_description, description }, config);
    } catch (error) {
        throw error;
    }
}

const addUniform = async (data, token) => {
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
        data.image = imageRes.data.body.fileName;
    }
    const response = await axios.post(`${BASE_URL}/jobs/uniform`, data, config);
    if (response.data.body) {
        return response.data;
    }
}

const addTemplateUniform = async ({ template_id, jobrole_id, uniform_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.post(`${BASE_URL}/job/template/uniform`, { template_id, jobrole_id, uniform_id }, config);
    } catch (error) {
        throw error;
    }
}

const getUniforms = async (token, jobrole_id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        return await axios.get(`${BASE_URL}/jobs/uniform?jobrole_id=${jobrole_id}`, config)
    } catch (error) {
        throw error
    }
}

const jobTempUpload = async (data, token) => {
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
    imagedata.append('file', (data.file));
    const imageRes = await axios.post(`${BASE_URL}/file/upload`, imagedata, configImage);
    if (imageRes.data.body) {
        delete data.file
        data.file = imageRes.data.body.fileName;
    }
    const response = await axios.post(`${BASE_URL}/job/template/upload`, data, config);
    if (response.data.body) {
        return response.data;
    }
}

const delUpload = async ({ template_id, upload_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const data = { template_id, upload_id };

    try {
        return await axios.delete(`${BASE_URL}/job/template/upload`, { headers: config.headers, data });
    } catch (error) {
        throw error;
    }
}

const postDateAndTime = async ({ template_id, jobrole_id, is_range, apply_to_all, is_block_booking, dates }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.post(`${BASE_URL}/job/template/datetime`, { template_id, jobrole_id, is_range, apply_to_all, is_block_booking, dates }, config);
    } catch (error) {
        throw error;
    }
}

const addVenueInTemplate = async ({ venue_id, template_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.post(`${BASE_URL}/job/template/venue`, { venue_id, template_id }, config);
    } catch (error) {
        throw error;
    }
}

const getTemplateList = async ({ pageno }, token) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.get(`${BASE_URL}/job/template/list?pageno=${pageno}`, config);
        if (response?.data?.body) {
            return response.data;
        }
    } catch (error) {
        throw error
    }
}

const delTemplate = async ({ template_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const data = { template_id };

    try {
        return await axios.delete(`${BASE_URL}/job/template/delete`, { headers: config.headers, data });
    } catch (error) {
        throw error;
    }
}

const useTemp = async ({ template_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.post(`${BASE_URL}/job/template/use`, { template_id }, config);
    } catch (error) {
        throw error;
    }
}


const employerJobTemplateService = {
    getSkillsOfJobroles, getJobTemp, getTempJobRole, delTempJobRole, getIndustries, putIndustry, postIndustry,
    postSkills, addAdditionalDetails, addUniform, addTemplateUniform, getUniforms, delSkill, jobTempUpload,
    delUpload, postDateAndTime, addVenueInTemplate, getTemplateList, delTemplate, useTemp
}


export default employerJobTemplateService;