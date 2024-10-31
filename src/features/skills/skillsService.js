import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL

// Get All Skills
const getAllSkills = async (token, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/skills?pageno=${pageno}`, config);
    if (response.data.body) {
        return response.data;
    }
}



// Skill Toggle Status
const toggleStatus = async (token, skill_id, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${BASE_URL}/admin/skill/status/${skill_id}?pageno=${pageno}`, null, config);
    if (response.data.body) {
        return response.data;
    }
}

const skillsService = {
    getAllSkills, toggleStatus
}


export default skillsService;