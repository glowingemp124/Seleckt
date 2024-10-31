import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL

// get All Uniforms
const getAllFAQS = async (token, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/faq?pageno=${pageno}`, config);
    if (response.data.body) {
        return response.data;
    }
}



// create Uniform
const createFAQ = async (token, data, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(`${BASE_URL}/admin/faq?pageno=${pageno}`, data, config);
    if (response.data.body) {
        return response.data;
    }


}

const FAQService = {
    getAllFAQS, createFAQ
}


export default FAQService;