import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASEURL

// get All Jobs
const getAllJobs = async (token, pageno) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${BASE_URL}/admin/jobs?pageno=${pageno}`, config);
    if (response.data.body) {
        return response.data;
    }
}

const getTimeSheet = async ({ start_date, end_date, pageno, search, token }) => {
    console.log("date", end_date)
    console.log("pageno", pageno)
    console.log("search", search)
    console.log("start_date", start_date)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    start_date = start_date !== undefined ? start_date : "all"
    end_date = end_date !== undefined ? end_date : "all"
    // const response = await axios.get(`${BASE_URL}/admin/timesheet?pageno=${pageno}&end_date=${end_date}&search=${search}&is_approved=${is_approved}`, config);
    const response = await axios.get(`${BASE_URL}/admin/timesheet?pageno=${pageno}&start_date=${start_date}&end_date=${end_date}&search=${search}`, config);
    if (response.data.body) {
        return response.data;
    }
}

const postJobSaveAsDraft = async ({ template_id, is_template, template_name }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.post(`${BASE_URL}/jobs`, { template_id, is_template, template_name }, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const postSelectJob = async ({ option, job_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.post(`${BASE_URL}/jobs/select/post`, { option, job_id }, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const postSelectJob3 = async ({ option, data }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.post(`${BASE_URL}/jobs/select/post`, { option, data }, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getJobWorker = async ({ job_id, pageno }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.get(`${BASE_URL}/jobs/select/worker?job_id=${job_id}&pageno=${pageno}`, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const jobProbability = async ({ id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.get(`${BASE_URL}/job/probability?id=${id}`, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const putJobSkills = async ({ job_id, skills }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.put(`${BASE_URL}/job/skills`, { job_id, skills }, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const putJobAdditional = async ({ job_id, rate, qty, break_time, break_paid, health_safety, hs_description, po_number }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.put(`${BASE_URL}/job/additional`, { job_id, rate, qty, break_time, break_paid, health_safety, hs_description, po_number }, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const putJobUniform = async ({ job_id, uniform_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.put(`${BASE_URL}/jobs/uniform/update`, { job_id, uniform_id }, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const putJobDateTime = async ({ job_id, is_range, apply_to_all, is_block_booking, dates }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.put(`${BASE_URL}/jobs/datetime`, { job_id, is_range, apply_to_all, is_block_booking, dates }, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const putJobDescription = async ({ job_id, description }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.put(`${BASE_URL}/job/description`, { job_id, description }, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getTemp = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.get(`${BASE_URL}/admin/template/${id}`, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getJobSummary = async ({ job_id }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await axios.get(`${BASE_URL}/admin/job/summary?job_id=${job_id}`, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
}


const jobsService = {
    getAllJobs, postJobSaveAsDraft, postSelectJob, getJobWorker, postSelectJob3, jobProbability, putJobSkills, putJobAdditional,
    putJobUniform, putJobDateTime, putJobDescription, getTimeSheet, getTemp, getJobSummary
}




export default jobsService;