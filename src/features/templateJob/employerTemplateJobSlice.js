import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import employerJobTemplateService from '../templateJob/employerTemplateJobService';

const initialState = {
    jobTemplate: {},
    isError: false,
    isSuccess: false,
    is_loading: false,
    skills: {},
    addedSkills: {},
    deletedSkill: {},
    selectJobRole: {},
    deletedJobrole: {},
    industries: {},
    updatedIndustry: {},
    addedIndustry: {},
    addedUniform: {},
    addedTempUniform: {},
    additionalDetails: {},
    allUniforms: {},
    templateUpload: {},
    deletedUpload: {},
    dateTime: {},
    addedVenue: {},
    templateList: {},
    deletedTemplate: {},
    usedTemplate: {},
    message: ""
}

export const getAllSkillsOfJobRole = createAsyncThunk('jobs/skills', async ({ jobrole_id, token }, thunkAPI) => {
    try {
        if (token) {
            return await employerJobTemplateService.getSkillsOfJobroles({ jobrole_id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const postAddSkills = createAsyncThunk('job/template/skills', async ({ template_id, jobrole_id, skills, token }, thunkAPI) => {
    try {
        if (token) {
            return await employerJobTemplateService.postSkills({ template_id, jobrole_id, skills }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//  Get Job Template
export const getJobTemplate = createAsyncThunk('jobs/template', async (token, thunkAPI) => {
    try {
        if (token) {
            return await employerJobTemplateService.getJobTemp(token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Select Job Role.
export const selectTemplateJobRole = createAsyncThunk('jobs/template/jobroles', async ({ job_roles, is_active, template_id, token }, thunkAPI) => {
    try {
        if (token) {
            // Find the index of the updated job role in the array
            const updatedIndex = job_roles.findIndex(jobRole => jobRole._id === is_active._id);

            // If the updated job role is found, replace it with the updated version
            if (updatedIndex !== -1) {
                job_roles[updatedIndex] = is_active;
            }

            return await employerJobTemplateService.getTempJobRole(
                { job_roles: job_roles, template_id },
                token
            );
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Delete Job Role.
export const deleteTemplateJobRole = createAsyncThunk('jobs/template/jobrole', async ({ jobrole_id, template_id, token }, thunkAPI) => {
    try {
        if (token) {
            return await employerJobTemplateService.delTempJobRole({ jobrole_id, template_id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//  Get All Industries
export const getAllIndustries = createAsyncThunk('jobs/template/indutries', async (token, thunkAPI) => {
    try {
        if (token) {
            return await employerJobTemplateService.getIndustries(token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Add Industry
export const postAddIndustry = createAsyncThunk('jobs/template/addIndutry', async ({ industry_id, template_id, token }, thunkAPI) => {
    try {
        if (token) {
            return await employerJobTemplateService.postIndustry({ industry_id, template_id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Update Industry
export const putAddIndustry = createAsyncThunk('jobs/template/updateIndutry', async ({ industry_id, template_id, token }, thunkAPI) => {
    try {
        if (token) {
            return await employerJobTemplateService.putIndustry({ industry_id, template_id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Delete Skill
export const deleteSkill = createAsyncThunk('jobs/template/skills', async ({ jobrole_id, template_id, skill_id, token }, thunkAPI) => {
    try {
        if (token) {
            return await employerJobTemplateService.delSkill({ jobrole_id, template_id, skill_id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Add Additional Details
export const postAdditionalDetails = createAsyncThunk('job/template/additional', async ({ template_id, jobrole_id, rate, po_number, break_time, break_paid, health_safety, hs_description, description, token }, thunkAPI) => {
    try {
        break_paid = break_paid.toString();
        health_safety = health_safety.toString();
        if (token) {
            return await employerJobTemplateService.addAdditionalDetails({ template_id, jobrole_id, rate, po_number, break_time, break_paid, health_safety, hs_description, description }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Add Uniform
export const postAddUniform = createAsyncThunk('job/template/uniform', async (data, thunkAPI) => {
    const { jobrole_id, image, description, token } = data;
    const createObj = { jobrole_id, image, description }
    try {
        if (token) {
            return await employerJobTemplateService.addUniform(createObj, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Select Uniform
export const postAddTemplateUniform = createAsyncThunk('job/template/tempUniform', async ({ template_id, jobrole_id, uniform_id, token }, thunkAPI) => {
    try {
        if (token) {
            return await employerJobTemplateService.addTemplateUniform({ template_id, jobrole_id, uniform_id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get All Uniforms
export const getAllUniforms = createAsyncThunk('jobs/uniform', async (params, thunkAPI) => {
    try {
        if (params?.token) {
            return await employerJobTemplateService.getUniforms(params.token, params?.jobrole_id);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Upload Job Template
export const jobTemplateUpload = createAsyncThunk('job/template/upload', async (data, thunkAPI) => {
    const { template_id, jobrole_id, file, token } = data;
    const createObj = { template_id, jobrole_id, file }
    try {
        if (token) {
            return await employerJobTemplateService.jobTempUpload(createObj, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Delete Upload
export const deleteUpload = createAsyncThunk('jobs/template/upload/delete', async ({ template_id, upload_id, token }, thunkAPI) => {
    try {
        if (token) {
            return await employerJobTemplateService.delUpload({ template_id, upload_id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//  Add Date & Time
export const postAddDateAndTime = createAsyncThunk('job/template/datetime', async (data, thunkAPI) => {
    const { template_id, jobrole_id, is_range, apply_to_all, is_block_booking, dates, token } = data
    try {
        if (token) {
            return await employerJobTemplateService.postDateAndTime({ template_id, jobrole_id, is_range, apply_to_all, is_block_booking, dates }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//  Add Venue
export const postAddVenueInTemplate = createAsyncThunk('job/template/venue', async ({ venue_id, template_id, token }, thunkAPI) => {
    try {
        if (token) {
            return await employerJobTemplateService.addVenueInTemplate({ venue_id, template_id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get All Employers
export const getAllTemplateList = createAsyncThunk('job/template/list', async (data, thunkAPI) => {
    const { pageno, token } = data
    try {
        if (token) {
            return await employerJobTemplateService.getTemplateList({ pageno }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Delete Template
export const deleteTemplate = createAsyncThunk('jobs/template/delete', async ({ template_id, token }, thunkAPI) => {
    try {
        if (token) {
            return await employerJobTemplateService.delTemplate({ template_id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Use Template
export const templateUse = createAsyncThunk('jobs/template/use', async ({ template_id, token }, thunkAPI) => {
    try {
        if (token) {
            return await employerJobTemplateService.useTemp({ template_id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const employerJobTemplateSlice = createSlice({
    name: "templateJob",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(getAllSkillsOfJobRole.pending, (state) => { //Get All Skills of selected Job Role inside create job modal
            state.is_loading = false;
        }).addCase(getAllSkillsOfJobRole.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.skills = action.payload;
        }).addCase(getAllSkillsOfJobRole.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.skills = {};
        }).addCase(getJobTemplate.pending, (state) => {
            state.is_loading = false;
        }).addCase(getJobTemplate.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.jobTemplate = action.payload.data;
        }).addCase(getJobTemplate.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.jobTemplate = {};
        }).addCase(selectTemplateJobRole.pending, (state) => {
            state.is_loading = false;
        }).addCase(selectTemplateJobRole.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.selectJobRole = action.payload.data;
        }).addCase(selectTemplateJobRole.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.selectJobRole = {};
        }).addCase(deleteTemplateJobRole.pending, (state) => { // Delete job role inside create modal
            state.is_loading = false;
        }).addCase(deleteTemplateJobRole.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.deletedJobrole = action.payload;
        }).addCase(deleteTemplateJobRole.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.deletedJobrole = {};
        }).addCase(getAllIndustries.pending, (state) => { // Get Industries
            state.is_loading = false;
        }).addCase(getAllIndustries.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.industries = action.payload;
        }).addCase(getAllIndustries.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.industries = {};
        }).addCase(putAddIndustry.pending, (state) => { // Update Industry
            state.is_loading = false;
        }).addCase(putAddIndustry.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.updatedIndustry = action.payload;
        }).addCase(putAddIndustry.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.updatedIndustry = {};
        }).addCase(postAddIndustry.pending, (state) => { // Add Industry
            state.is_loading = false;
        }).addCase(postAddIndustry.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.addedIndustry = action.payload;
        }).addCase(postAddIndustry.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.addedIndustry = {};
        }).addCase(postAddSkills.pending, (state) => { // Add Skills
            state.is_loading = false;
        }).addCase(postAddSkills.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.addedSkills = action.payload;
        }).addCase(postAddSkills.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.addedSkills = {};
        }).addCase(deleteSkill.pending, (state) => { // Delete Skills
            state.is_loading = false;
        }).addCase(deleteSkill.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.deletedSkill = action.payload;
        }).addCase(deleteSkill.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.deletedSkill = {};
        }).addCase(postAdditionalDetails.pending, (state) => { // Add Skills
            state.is_loading = false;
        }).addCase(postAdditionalDetails.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.additionalDetails = action.payload;
        }).addCase(postAdditionalDetails.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.additionalDetails = {};
        }).addCase(postAddUniform.pending, (state) => { // Add Uniform
            state.is_loading = false;
        }).addCase(postAddUniform.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.addedUniform = action.payload;
        }).addCase(postAddUniform.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.addedUniform = {};
        }).addCase(postAddTemplateUniform.pending, (state) => { // Add Uniform
            state.is_loading = false;
        }).addCase(postAddTemplateUniform.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.addedTempUniform = action.payload;
        }).addCase(postAddTemplateUniform.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.addedTempUniform = {};
        }).addCase(getAllUniforms.pending, (state) => { // Get All Uniforms
            state.is_loading = false;
        }).addCase(getAllUniforms.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.allUniforms = action.payload;
        }).addCase(getAllUniforms.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.allUniforms = {};
        }).addCase(jobTemplateUpload.pending, (state) => { // Job Template Upload
            state.is_loading = false;
        }).addCase(jobTemplateUpload.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.templateUpload = action.payload;
        }).addCase(jobTemplateUpload.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.templateUpload = {};
        }).addCase(deleteUpload.pending, (state) => { // Job Template Upload
            state.is_loading = false;
        }).addCase(deleteUpload.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.deletedUpload = action.payload;
        }).addCase(deleteUpload.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.deletedUpload = {};
        }).addCase(postAddDateAndTime.pending, (state) => { // Post Date & Time
            state.is_loading = false;
        }).addCase(postAddDateAndTime.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.dateTime = action.payload;
        }).addCase(postAddDateAndTime.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.dateTime = {};
        }).addCase(postAddVenueInTemplate.pending, (state) => { // Post Add Venue
            state.is_loading = false;
        }).addCase(postAddVenueInTemplate.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.addedVenue = action.payload;
        }).addCase(postAddVenueInTemplate.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.addedVenue = {};
        }).addCase(getAllTemplateList.pending, (state) => { // Get All Template List
            state.is_loading = false;
        }).addCase(getAllTemplateList.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.templateList = action.payload;
        }).addCase(getAllTemplateList.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.templateList = {};
        }).addCase(deleteTemplate.pending, (state) => { // Delete Template
            state.is_loading = false;
        }).addCase(deleteTemplate.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.deletedTemplate = action.payload;
        }).addCase(deleteTemplate.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.deletedTemplate = {};
        }).addCase(templateUse.pending, (state) => { // Use Template
            state.is_loading = false;
        }).addCase(templateUse.fulfilled, (state, action) => {
            state.is_loading = false;
            state.isSuccess = true;
            state.usedTemplate = action.payload;
        }).addCase(templateUse.rejected, (state, action) => {
            state.is_loading = false;
            state.isError = true;
            state.message = action.payload;
            state.usedTemplate = {};
        })
    }
})
export const { reset } = employerJobTemplateSlice.actions;
export default employerJobTemplateSlice.reducer