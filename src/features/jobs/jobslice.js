import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jobsService from './jobsService';
import { getToken } from '../../utils/getToken';

const initialState = {
    jobs: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    draftedJob: {},
    postedJob: {},
    postedJob3: {},
    jobWorkers: {},
    jobProb: {},
    updatedSkills: {},
    updatedAdditional: {},
    updatedUniform: {},
    updatedDateTime: {},
    updatedDescription: {},
    timeSheet: {},
    template: {},
    jobDetail: {},
    message: ""
}

//get all jobs 
export const allJobs = createAsyncThunk('admin/jobs', async (data, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await jobsService.getAllJobs(token, data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllTimeSheet = createAsyncThunk('admin/teamsheet', async ({ start_date, end_date, pageno, search }, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await jobsService.getTimeSheet({ start_date, end_date, pageno, search, token });
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const JobTemplateSaveAsDraft = createAsyncThunk('jobs/template/save', async ({ template_id, is_template, template_name, token }, thunkAPI) => {
    try {
        if (token) {
            return await jobsService.postJobSaveAsDraft({ template_id, is_template, template_name }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const postSelectedJob = createAsyncThunk('job/select/post', async ({ option, job_id, token }, thunkAPI) => {
    try {
        if (token) {
            return await jobsService.postSelectJob({ option, job_id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const postSelectedJob3 = createAsyncThunk('job/select/post/3', async ({ option, data, token }, thunkAPI) => {
    try {
        if (token) {
            return await jobsService.postSelectJob3({ option, data }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getJobWorkerList = createAsyncThunk('jobs/select/worker/jobId', async ({ job_id, pageno, token }, thunkAPI) => {
    try {
        if (token) {
            return await jobsService.getJobWorker({ job_id, pageno }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getJobProbability = createAsyncThunk('job/probability/id', async ({ id, token }, thunkAPI) => {
    try {
        if (token) {
            return await jobsService.jobProbability({ id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const putJobSkillsForEditJob = createAsyncThunk('job/skills', async ({ job_id, skills, token }, thunkAPI) => {
    try {
        if (token) {
            return await jobsService.putJobSkills({ job_id, skills }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const putJobAdditionalForEditJob = createAsyncThunk('job/addiitonal', async (data, thunkAPI) => {

    const { job_id, rate, qty, break_time, break_paid, health_safety, hs_description, po_number, token } = data

    try {
        if (token) {
            return await jobsService.putJobAdditional({ job_id, rate, qty, break_time, break_paid, health_safety, hs_description, po_number }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const putJobUniformForEditJob = createAsyncThunk('jobs/uniform/update', async ({ job_id, uniform_id, token }, thunkAPI) => {
    try {
        if (token) {
            return await jobsService.putJobUniform({ job_id, uniform_id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const putJobDateTimeForEditJob = createAsyncThunk('jobs/datetime', async (data, thunkAPI) => {
    const { job_id, is_range, apply_to_all, is_block_booking, dates, token } = data
    try {
        if (token) {
            return await jobsService.putJobDateTime({ job_id, is_range, apply_to_all, is_block_booking, dates }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const putJobDescriptionForEditJob = createAsyncThunk('jobs/description', async ({ job_id, description, token }, thunkAPI) => {
    try {
        if (token) {
            return await jobsService.putJobDescription({ job_id, description, }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getTemplate = createAsyncThunk('admin/template/id', async (id, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await jobsService.getTemp(id, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getJobDetails = createAsyncThunk('admin/job/summary/id', async ({ job_id }, thunkAPI) => {
    const token = getToken()
    try {
        if (token) {
            return await jobsService.getJobSummary({ job_id }, token);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})





export const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(allJobs.pending, (state) => {
            state.isLoading = true;
        }).addCase(allJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.jobs = action.payload;
        }).addCase(allJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.jobs = null;
        }).addCase(JobTemplateSaveAsDraft.pending, (state) => {
            state.isLoading = false;
        }).addCase(JobTemplateSaveAsDraft.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.draftedJob = action.payload;
        }).addCase(JobTemplateSaveAsDraft.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.draftedJob = null;
        }).addCase(postSelectedJob.pending, (state) => {
            state.isLoading = false;
        }).addCase(postSelectedJob.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.postedJob = action.payload;
        }).addCase(postSelectedJob.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.postedJob = null;
        }).addCase(postSelectedJob3.pending, (state) => {
            state.isLoading = false;
        }).addCase(postSelectedJob3.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.postedJob3 = action.payload;
        }).addCase(postSelectedJob3.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.postedJob3 = null;
        }).addCase(getJobWorkerList.pending, (state) => {
            state.isLoading = false;
        }).addCase(getJobWorkerList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.jobWorkers = action.payload;
        }).addCase(getJobWorkerList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.jobWorkers = null;
        }).addCase(getJobProbability.pending, (state) => {
            state.isLoading = false;
        }).addCase(getJobProbability.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.jobProb = action.payload;
        }).addCase(getJobProbability.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.jobProb = null;
        }).addCase(putJobSkillsForEditJob.pending, (state) => {
            state.isLoading = false;
        }).addCase(putJobSkillsForEditJob.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.updatedSkills = action.payload;
        }).addCase(putJobSkillsForEditJob.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.updatedSkills = null;
        }).addCase(putJobAdditionalForEditJob.pending, (state) => {
            state.isLoading = false;
        }).addCase(putJobAdditionalForEditJob.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.updatedAdditional = action.payload;
        }).addCase(putJobAdditionalForEditJob.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.updatedAdditional = null;
        }).addCase(putJobUniformForEditJob.pending, (state) => {
            state.isLoading = false;
        }).addCase(putJobUniformForEditJob.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.updatedUniform = action.payload;
        }).addCase(putJobUniformForEditJob.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.updatedUniform = null;
        }).addCase(putJobDateTimeForEditJob.pending, (state) => {
            state.isLoading = false;
        }).addCase(putJobDateTimeForEditJob.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.updatedDateTime = action.payload;
        }).addCase(putJobDateTimeForEditJob.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.updatedDateTime = null;
        }).addCase(putJobDescriptionForEditJob.pending, (state) => {
            state.isLoading = false;
        }).addCase(putJobDescriptionForEditJob.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.updatedDescription = action.payload;
        }).addCase(putJobDescriptionForEditJob.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.updatedDescription = null;
        }).addCase(getAllTimeSheet.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAllTimeSheet.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.timeSheet = action.payload;
        }).addCase(getAllTimeSheet.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.timeSheet = null;
        }).addCase(getTemplate.pending, (state) => {
            state.isLoading = false;
        }).addCase(getTemplate.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.template = action.payload;
        }).addCase(getTemplate.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.template = null;
        }).addCase(getJobDetails.pending, (state) => {
            state.isLoading = false;
        }).addCase(getJobDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.jobDetail = action.payload;
        }).addCase(getJobDetails.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.jobDetail = null;
        })


    }
})
export const { reset } = jobsSlice.actions;


export default jobsSlice.reducer