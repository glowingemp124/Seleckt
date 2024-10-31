import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Form, Stack } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { reset, workerJobs } from '../../../features/workers/workerSlice'
import Spinner from '../../components/Spinner'
import CustomeModal from '../../components/customeModal/CustomeModal'
import Nav from "../../layouts/nav"
import { employerJobs, employerProfileId, getAllVenues } from '../../../features/employers/employerSlice'
import { allJobRoles } from "../../../features/jobs/jobroles/jobRolesSlice"
import { useDebouncedCallback } from "use-debounce"
import PopUp from '../../CommonComponents/popup/PopUp'
import DefaultImg from "../../../images/logo.png"
import LOGO from "../../../images/logo.png"
import nofound from "../../../images/loader/noJobsFound.png"
import Calender from '../../components/Calender'
import DonutChart from 'react-donut-chart';
import {
    getAllSkillsOfJobRole, getJobTemplate, selectTemplateJobRole, deleteTemplateJobRole, getAllIndustries,
    putAddIndustry, postAddSkills, postAdditionalDetails, postAddTemplateUniform, postAddUniform,
    getAllUniforms, deleteSkill, jobTemplateUpload, deleteUpload, postAddVenueInTemplate, getAllTemplateList,
    deleteTemplate, templateUse
} from '../../../features/templateJob/employerTemplateJobSlice'
import { JobTemplateSaveAsDraft, postSelectedJob, postSelectedJob3, getJobProbability } from '../../../features/jobs/jobslice'
import InfiniteScrollPagination from '../../components/InfiniteScrollPagination'
import EditJob from '../../components/EditJob'
import ReactDatePicker from 'react-datepicker'

const EmployerJobsTable = () => {

    const dispatch = useDispatch();
    const { id } = useParams()

    // Employer useSelector
    const { employrJob, accesstoken, isLoading, venues } = useSelector((state) => state?.employers)
    // Employer Job template useSelector
    const { skills, isError, message, jobTemplate, industries, allUniforms, templateList } = useSelector((state) => state?.jobTemplate)

    const { jobProb } = useSelector((state) => state.jobs);

    const { employerJobRoles } = useSelector((state) => state?.employerJobRoles)

    const [showPopup, setShowPopup] = useState(false)
    const [keyword, setKeyword] = useState('');
    const [showPaymentDetails, setShowPaymentDetails] = useState(false)
    const [selectedJob, setSelectedJob] = useState(null)
    const [selectedJobRole, setSelectedJobRole] = useState(null)
    const [activeJobRoleButton, setActiveJobRoleButton] = useState(0);
    const [showJobDetailsModal, setshowJobDetailsModal] = useState(false)
    const [activeButton, setActiveButton] = useState("");
    const [status, setStatus] = useState("drafted")
    const [showCreateJobModal, setShowCreateJobModal] = useState(false)
    const [showJobrolesModal, setShowJobrolesModal] = useState(false)
    const [showIndustriesModal, setShowIndustriesModal] = useState(false)
    const [selectedIndustry, setSelectedIndustry] = useState(null)
    const [activeIndustryButton, setActiveIndustryButton] = useState(null)
    const [showConfirmPopup, setShowConfirmPopup] = useState(false)
    const [showSkillsModal, setShowSkillsModal] = useState(false)
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [showAdditionalDetailsModal, setShowAdditionalDetailsModal] = useState(false)
    const [showUniformModal, setShowUniformModal] = useState(false)
    const [showAddUniformModal, setAddShowUniformModal] = useState(false)
    const [uniformDescription, setUniformDescription] = useState("")
    const [icon, setIcon] = useState('')
    const [showCalendarModal, setShowCalendarModal] = useState()
    const [isBlockBookingChecked, setIsBlockBookingChecked] = useState(false);
    const [showVenueModal, setShowVenueModal] = useState(false)
    const [showUseTemplateModal, setShowUseTemplateModal] = useState(false)
    const [showCreateJobNameModal, setShowCreateJobNameModal] = useState(false)
    const [isTemplate, setIsTemplate] = useState(false)
    const [jobName, setJobName] = useState('')
    const [showPostJobModal, setShowPostJobModal] = useState(false)
    const [showJobWorkersListModal, setShowJobWorkersListModal] = useState(false)
    const [selectedWorkers, setSelectedWorkers] = useState([]);
    const [editingMode, setEditingMode] = useState(false);
    const [editedJob, setEditedJob] = useState(null);


    const [startDatePicker, setStartDatePicker] = useState(null); // Set initial value to null
    const [dueDate, setDueDate] = useState(null); // Set initial value to null

    // const [selectedFrom, setSelectedFrom] = useState('From');
    // const [selectedTo, setSelectedTo] = useState('To');
    // const [selectedStatus, setSelectedStatus] = useState('Draft');

    // const handleSelectFrom = (eventKey) => {
    //     setSelectedFrom(eventKey);
    // };

    // const handleSelectTo = (eventKey) => {
    //     setSelectedTo(eventKey);
    // };

    // const handleSelectStatus = (eventKey) => {
    //     setSelectedStatus(eventKey);
    // };   


    // additional details states
    const [rate, setRate] = useState('');
    const [poNumber, setPoNumber] = useState('');
    const [breakTime, setBreakTime] = useState('');
    const [breakPaid, setBreakPaid] = useState("false");
    const [healthSafety, setHealthSafety] = useState("false");
    const [hsDescription, setHsDescription] = useState('');
    const [description, setDescription] = useState('');
    // uniform select state.
    const [selectedUniformId, setSelectedUniformId] = useState(null);
    const [selectedVenue, setSelectedVenue] = useState(null);
    const [selectedOffers, setSelectedOffers] = useState('Complete');
    // state for select options for posting job
    const [selectedOption, setSelectedOption] = useState(0);



    const handleRadioChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        handleShowJobWorkersListModal()
    };


    // show job workers list modal fuctions
    const handleShowJobWorkersListModal = () => {
        selectedOption < "2" && setShowJobWorkersListModal(true)
    }
    const handleCloseJobWorkersListModal = () => {
        setShowJobWorkersListModal(false)
    }

    // show Job name modal
    const handleShowCreateJobNameModal = () => {
        if (isTemplate === true) setShowCreateJobNameModal(true)
    }
    const handleCloseCreateJobNameModal = () => {
        setShowCreateJobNameModal(false)
    }

    // Post job Modal functions
    const handleShowPostJobModal = (job) => {
        setShowPostJobModal(true)
        dispatch(getJobProbability({
            id: job?._id,
            token: accesstoken
        }))
    }
    const handleClosePostJobModal = () => {
        setShowPostJobModal(false)
    }

    // use template modal functions starts
    const handleShowUseTemplateModal = () => {
        setShowUseTemplateModal(true)
        dispatch(getAllTemplateList({ token: accesstoken, pageno: 1 }))
    }
    const handleCloseUseTemplateModal = () => {
        setShowUseTemplateModal(false)
    }

    // venue modal functions starts
    const handleVenueSelect = (venueId) => {
        setSelectedVenue(venueId);
    };
    const handleShowVenueModal = () => {
        setShowVenueModal(true)
        dispatch(getAllVenues(accesstoken))
    }
    const handleCloseVenueModal = () => {
        setShowVenueModal(false)
    }
    const handleSelectVenue = () => {
        dispatch(postAddVenueInTemplate({ venue_id: selectedVenue?._id, template_id: jobTemplate?.body?._id, token: accesstoken }))
        dispatch(getJobTemplate(accesstoken))
        handleCloseVenueModal()
    }

    // block booking checkbox onchange
    const handleBlockBookingCheckbox = () => {
        setIsBlockBookingChecked(!isBlockBookingChecked);
    }

    // show calendar modal funtions
    const handleShowCalendarModal = () => {
        setShowCalendarModal(true)
    }
    const handleCloseCalendarModal = () => {
        setShowCalendarModal(false)
    }

    const handleCheckboxChange = (event, skill) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedSkills(prevSelectedSkills => [...prevSelectedSkills, { ...skill, is_active: true }]);
        } else {
            setSelectedSkills(prevSelectedSkills => prevSelectedSkills.filter(selectedSkill => selectedSkill._id !== skill._id));
        }
    };

    const handleUniformCheckboxChange = (event, uniformId) => {
        if (event.target.checked) {
            setSelectedUniformId(uniformId);
        } else {
            setSelectedUniformId(null);
        }
    };

    const handleImageClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleUploadImageClick = () => {
        document.getElementById('pdfFiles').click();
    };

    const handleUploadPdf = async (pdf) => {
        await dispatch(jobTemplateUpload({
            template_id: jobTemplate?.body?._id,
            jobrole_id: selectedJobRole?._id,
            file: pdf,
            token: accesstoken
        }))
        await dispatch(getJobTemplate(accesstoken))
    }

    const handleButtonClick = (indust, idx) => {
        setSelectedIndustry(indust)
        setActiveIndustryButton(idx);
    };

    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 10;
    const pageVisted = pageNumber;

    const today = new Date()
    const parseDate = (dateString) => {
        const parts = dateString.split(/[\s/,:]+/);
        return new Date(parts[2], parts[1] - 1, parts[0], parts[3], parts[4]);
    };
    const isAnyDateBeforeToday = (job) => {

        job?.summary?.datetime.datetime.some(dt => {
            const startDate = parseDate(dt.start_date);
            const endDate = parseDate(dt.end_date);
            const beforeDate = startDate < today || endDate < today
            return beforeDate
        });
    }

    let pageCount;
    const total_pages = employrJob?.total_pages
    const jobsList = employrJob?.body?.jobs
    const topOptions = employrJob?.body?.top_options

    // ****** dates and times start
    const dateAndTimes = jobTemplate?.body?.datetime?.datetime

    const handleSelectOffers = (eventKey) => {
        setSelectedOffers(eventKey);
    };

    const sortedDates = dateAndTimes?.map(date => {
        const [day, month, yearTime] = date?.start_date?.split('/');
        const [year] = yearTime.split(' ');
        return new Date(year, month - 1, day);
    }).sort((a, b) => a - b);

    const startDate = dateAndTimes && sortedDates[0]?.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const endDate = dateAndTimes && sortedDates[sortedDates?.length - 1]?.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });

    const sequence = `${startDate} - ${endDate}`;
    // ****** dates and times ends

    // Confirm Popup
    const handleShowConfirmPopup = () => {
        setShowConfirmPopup(true)
    }
    const handleCloseConfirmPopup = () => {
        setShowConfirmPopup(false)
    }

    // Skills Modal Functions
    const handleShowSkillsModal = () => {
        setShowSkillsModal(true)
    }
    const handleCloseSkillsModal = () => {
        setShowSkillsModal(false)
    }

    // Additional Details Functions
    const handleShowAdditionalDetailsModal = () => {
        // Set state variables with values for editing
        setRate(jobTemplate?.body?.additional ? jobTemplate?.body?.additional?.rate : '');
        setPoNumber(jobTemplate?.body?.additional ? jobTemplate?.body?.additional?.po_number : '');
        setBreakTime(jobTemplate?.body?.additional ? jobTemplate?.body?.additional?.break_time : '0');
        setBreakPaid(jobTemplate?.body?.additional ? jobTemplate?.body?.additional?.break_paid : "false");
        setHealthSafety(jobTemplate?.body?.additional ? jobTemplate?.body?.additional?.health_safety : "false");
        setHsDescription(jobTemplate?.body?.additional ? jobTemplate?.body?.additional?.hs_description : '');
        setDescription(jobTemplate?.body?.additional ? jobTemplate?.body?.additional?.description : '');
        setShowAdditionalDetailsModal(true)
    }
    const handleCloseAdditionalDetailsModal = () => {
        setShowAdditionalDetailsModal(false)
    }

    // Uniform Modal Funtions
    const handleShowUnifromModal = () => {
        setShowUniformModal(true)
        dispatch(getAllUniforms({ jobrole_id: selectedJobRole?._id, token: accesstoken }))
    }
    const handleCloseUnifromModal = () => {
        setShowUniformModal(false)
    }

    // Add Uniform Modal Funtions
    const handleShowAddUnifromModal = () => {
        setAddShowUniformModal(true)
        setUniformDescription("")
        setIcon("")
    }
    const handleCloseAddUnifromModal = () => {
        setAddShowUniformModal(false)
    }

    // Job Summary/Details Modal funcions
    const handleShowJobDetailsModal = (job) => {
        setSelectedJob(job)
        setshowJobDetailsModal(true)
    }
    const handleCloseJobDetailsModal = () => {
        setshowJobDetailsModal(false)
        setEditingMode(false);
        setEditedJob(null);
    }
    const handleEdit = (job) => {
        setEditingMode(true);
        setEditedJob(job);
        setshowJobDetailsModal(true)
    };

    //  Industries Modal Functions
    const handleShowIndustriesModal = (indust) => {
        setShowIndustriesModal(true)
        dispatch(getAllIndustries(accesstoken))
    }
    const handleCloseIndustriesModal = () => {
        setShowIndustriesModal(false)
    }

    // Create job Modal funcions
    const handleShowCreateJobModal = () => {
        setShowCreateJobModal(true)
        dispatch(getJobTemplate(accesstoken))
    }
    const handleCloseCreateJobModal = () => {
        setShowCreateJobModal(false)
    }

    // Job roles modal functions
    const handleShowJobRolesModal = () => {
        setShowJobrolesModal(true)
        if (!jobTemplate?.body?.is_jobrole) {
            dispatch(allJobRoles(accesstoken))
        }
    }
    const handleCloseJobRolesModal = () => {
        setShowJobrolesModal(false)
    }

    useEffect(() => {
        if (jobTemplate?.body?.is_jobrole) {
            setSelectedJobRole(jobTemplate?.body?.jobroles[0] || employerJobRoles?.body[0])
            setActiveJobRoleButton(jobTemplate?.body?.jobroles[0] || employerJobRoles?.body[0])
        }
    }, [employerJobRoles?.body, jobTemplate?.body?.jobroles, jobTemplate?.body?.is_jobrole])

    const showSkills = () => {
        handleShowSkillsModal()
        if (selectedJobRole) {
            dispatch(getAllSkillsOfJobRole({ jobrole_id: selectedJobRole?._id, token: accesstoken }))
        }
    }

    const deleteJobRole = async (role) => {
        await dispatch(deleteTemplateJobRole({
            template_id: jobTemplate?.body?._id,
            jobrole_id: role._id,
            token: accesstoken
        }))

        await dispatch(getJobTemplate(accesstoken))
    }

    const deleteTemp = async (temp) => {
        await dispatch(deleteTemplate({
            template_id: temp._id,
            token: accesstoken
        }))
        await dispatch(getJobTemplate(accesstoken))
    }

    const handleUseTemplate = async (temp) => {
        await dispatch(templateUse({
            template_id: temp._id,
            token: accesstoken
        }))
        await dispatch(getJobTemplate(accesstoken))
        handleCloseUseTemplateModal()
    }

    const deleteTempUpload = async (upload) => {
        await dispatch(deleteUpload({
            template_id: jobTemplate?.body?._id,
            upload_id: upload._id,
            token: accesstoken
        }))

        await dispatch(getJobTemplate(accesstoken))
    }

    const deleteTemplateSkill = async (skillId) => {
        await dispatch(deleteSkill({
            template_id: jobTemplate?.body?._id,
            jobrole_id: selectedJobRole?._id,
            skill_id: skillId,
            token: accesstoken
        }))
        await dispatch(getJobTemplate(accesstoken))
    }

    const selectTempJobRole = async (selectedRole) => {
        const updatedJobRole = { ...selectedRole, is_active: true };

        if (jobTemplate?.body?.is_jobrole) {
            await dispatch(selectTemplateJobRole({
                id: updatedJobRole?._id,
                job_roles: jobTemplate?.body?.jobroles.map(role => role._id === updatedJobRole._id ? updatedJobRole : role),
                is_active: updatedJobRole,
                template_id: jobTemplate?.body?._id,
                token: accesstoken
            }))
        } else {
            await dispatch(selectTemplateJobRole({
                id: updatedJobRole?._id,
                job_roles: employerJobRoles?.body?.map(role => role._id === updatedJobRole._id ? updatedJobRole : role),
                is_active: updatedJobRole,
                template_id: jobTemplate?.body?._id,
                token: accesstoken
            }))
        }

        handleCloseJobRolesModal()
        await dispatch(getJobTemplate(accesstoken))
    }

    // POPUP MODAL FUNCTIONS
    const handleShowPopup = () => {
        setShowPopup(true)
    }
    const handleClosePopup = () => {
        setShowPopup(false)
    }

    const handleShowMoreClick = () => {
        setShowPaymentDetails(!showPaymentDetails);
    };

    const handleIndustrySelection = (selectedIndust) => {

        dispatch(putAddIndustry({ industry_id: selectedIndust?._id, template_id: jobTemplate?.body?._id, token: accesstoken }))
        dispatch(getJobTemplate(accesstoken))

        handleCloseConfirmPopup()
        handleCloseIndustriesModal()
    }

    const handleSubmit = () => {
        dispatch(postAddSkills({ template_id: jobTemplate?.body?._id, jobrole_id: selectedJobRole?._id, token: accesstoken, skills: selectedSkills }));
        dispatch(getJobTemplate(accesstoken))
    };

    const handleAdditionalDetailsSubmit = () => {
        dispatch(postAdditionalDetails({
            template_id: jobTemplate?.body?._id,
            jobrole_id: selectedJobRole?._id,
            rate: rate,
            po_number: poNumber,
            break_time: breakTime,
            break_paid: breakPaid.toString(),
            health_safety: healthSafety.toString(),
            hs_description: hsDescription,
            description: description,
            token: accesstoken
        }));
        handleCloseAdditionalDetailsModal()
        dispatch(getJobTemplate(accesstoken))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(postAddUniform({
            jobrole_id: selectedJobRole?._id,
            description: uniformDescription,
            image: icon,
            token: accesstoken
        }))
        handleCloseAddUnifromModal()
    }

    const handleSelectedUniformSubmit = (e) => {
        e.preventDefault();
        dispatch(postAddTemplateUniform({
            template_id: jobTemplate?.body?._id,
            jobrole_id: selectedJobRole?._id,
            uniform_id: selectedUniformId,
            token: accesstoken
        }))
        handleCloseUnifromModal()
        dispatch(getJobTemplate(accesstoken))
    }

    const handleSaveJobTemplate = () => {
        dispatch(JobTemplateSaveAsDraft({
            template_id: jobTemplate?.body?._id,
            is_template: isTemplate.toString(),
            template_name: jobName,
            token: accesstoken
        }))

        handleCloseCreateJobNameModal()
        handleCloseCreateJobModal()
    }

    const handlePostSelectedJob = (job) => {
        if (selectedOption <= "2") {
            dispatch(postSelectedJob({
                option: parseInt(selectedOption),
                job_id: job?._id,
                token: accesstoken
            }))
        } else {
            dispatch(postSelectedJob3({
                option: parseInt(selectedOption),
                data: [{
                    job_id: job?._id,
                    worker: selectedWorkers
                }],
                token: accesstoken
            }
            ))
        }
        handleClosePostJobModal()
    }

    // ************ MODAL CONTENTS STARTS ************ //
    const getWorkr = () => {
        pageCount = total_pages;
        return jobsList?.map((job, idx) => {
            return (
                <tr key={idx} role="row" className="odd">
                    <td>{0 + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}</td>
                    <td>
                        <div className="media">
                            <div className="text-nowrap">
                                <h6 className='mb-0 text-capitalize'>
                                    {job.company.company_name}
                                </h6>
                            </div>
                        </div>
                    </td>


                    <td>
                        <div className="media">
                            <div className="text-nowrap">
                                <h6 className='mb-0'>{job?.industry.title}</h6>
                            </div>
                        </div>
                    </td>


                    <td>
                        <div className="media">
                            <div className="text-nowrap">
                                <div className="text-black font-w600 fs-16 mb-0">
                                    <h6 className='mb-0'>Canada</h6>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className='mb-0'>{job?.start_date.split(" ")[0]}</h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className='mb-0'>{job?.end_date.split(" ")[0]}</h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="d-flex align-items-center">
                            <h6 className='mb-0 text-capitalize '>30</h6>
                        </div>
                    </td>
                    <td className='d-flex gap-3'>
                        {/* <i className="fa fa-eye fa-2x text-success" onClick={() => handleShowJobDetailsModal(job)} /> */}
                        <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5728 23.3337C20.2823 23.3337 21.668 21.8413 21.668 20.0003C21.668 18.1594 20.2823 16.667 18.5728 16.667C16.8633 16.667 15.4776 18.1594 15.4776 20.0003C15.4776 21.8413 16.8633 23.3337 18.5728 23.3337Z" fill="#00B094" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.32893 19.5008C4.49779 12.0644 10.9481 6.66699 18.5731 6.66699C26.1981 6.66699 32.6485 12.0644 34.8173 19.501C34.9121 19.8261 34.9121 20.1747 34.8173 20.4998C32.6484 27.9363 26.1981 33.3337 18.5731 33.3337C10.9481 33.3337 4.49775 27.9362 2.32892 20.4997C2.23411 20.1746 2.23411 19.826 2.32893 19.5008ZM12.3823 20.0003C12.3823 16.3184 15.1539 13.3337 18.5728 13.3337C21.9917 13.3337 24.7633 16.3184 24.7633 20.0003C24.7633 23.6822 21.9917 26.667 18.5728 26.667C15.1539 26.667 12.3823 23.6822 12.3823 20.0003Z" fill="#00B094" />
                        </svg>

                        <svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7468 0.332265C12.6077 0.330564 11.6079 0.329071 10.717 0.679443C9.93806 0.98581 9.24846 1.48284 8.71149 2.12496C8.09738 2.8593 7.78263 3.80827 7.42402 4.88947L7.2766 5.3325H1.8112C0.890723 5.3325 0.144531 6.0787 0.144531 6.99917C0.144531 7.91965 0.890723 8.66584 1.8112 8.66584H3.58528L4.82042 27.193C4.87534 28.0173 4.9229 28.7311 5.00917 29.3186C5.10053 29.9409 5.25153 30.5551 5.58525 31.1409C6.08542 32.0188 6.83987 32.7246 7.74917 33.1653C8.35586 33.4593 8.97873 33.5691 9.60567 33.6189C10.1976 33.6659 10.913 33.6659 11.7391 33.6658H18.5499C19.376 33.6659 20.0914 33.6659 20.6834 33.6189C21.3103 33.5691 21.9332 33.4593 22.5399 33.1653C23.4492 32.7246 24.2036 32.0188 24.7038 31.1408C25.0375 30.5551 25.1885 29.9409 25.2799 29.3186C25.3662 28.7311 25.4137 28.0173 25.4686 27.193L26.7038 8.66584H28.4779C29.3983 8.66584 30.1445 7.91965 30.1445 6.99917C30.1445 6.0787 29.3983 5.3325 28.4779 5.3325H23.0125L22.865 4.88945C22.5064 3.80826 22.1917 2.8593 21.5776 2.12496C21.0406 1.48284 20.351 0.985809 19.572 0.679442C18.6812 0.329071 17.6814 0.330564 16.5423 0.332265H13.7468ZM10.7956 5.3325H19.4935C19.2375 4.60052 19.138 4.40382 19.0205 4.26332C18.8415 4.04928 18.6117 3.88361 18.352 3.78148C18.1292 3.69385 17.825 3.66584 16.3005 3.66584H13.9886C12.4641 3.66584 12.1599 3.69385 11.9371 3.78148C11.6774 3.88361 11.4475 4.04928 11.2685 4.26332C11.151 4.40382 11.0516 4.60052 10.7956 5.3325ZM13.4779 13.6662C13.4779 12.7457 12.7317 11.9995 11.8112 11.9995C10.8907 11.9995 10.1445 12.7457 10.1445 13.6662V25.3328C10.1445 26.2533 10.8907 26.9995 11.8112 26.9995C12.7317 26.9995 13.4779 26.2533 13.4779 25.3328V13.6662ZM20.1445 13.6662C20.1445 12.7457 19.3983 11.9995 18.4779 11.9995C17.5574 11.9995 16.8112 12.7457 16.8112 13.6662V25.3328C16.8112 26.2533 17.5574 26.9995 18.4779 26.9995C19.3983 26.9995 20.1445 26.2533 20.1445 25.3328V13.6662Z" fill="#B10B00" />
                        </svg>

                    </td>
                </tr>
            );
        })
    };

    const IndustryConfirmSelectionContent = (
        <Stack>
            <p className='text-black'>By changing industry the template data will be lost.</p>

            <div className='d-flex justify-content-end gap-5'>
                <p className='mb-0 c-pointer' onClick={handleCloseConfirmPopup}>NO</p>
                <p className='mb-0 c-pointer' onClick={() => handleIndustrySelection(selectedIndustry)}>YES</p>
            </div>
        </Stack>
    )

    const industriesContent = (
        <Stack>
            {/* <div>
                <p>Choose one industry</p>
            </div> */}
            <div className='row justify-content-between'>
                {
                    industries?.data?.body?.industries.filter(item => item.is_user_industry).map((indust, idx) => (
                        <Button
                            key={idx}
                            variant={activeIndustryButton === idx ? 'outline-success' : 'outline-success'}
                            className="col-5 rounded-4 py-5 my-4"
                            onClick={() => handleButtonClick(indust, idx)}
                        >
                            <div className="text-center my-5">
                                <img src={indust.icon} alt="" width="30px" height="30px" />
                                <p className='text-black'>{indust.title}</p>
                            </div>
                        </Button>
                    ))
                }
            </div>

            <Button
                variant='primary'
                className='my-5 text-light'
                style={{ borderRadius: "1.3rem", }}
                onClick={handleShowConfirmPopup}
            >
                Confirm
            </Button>
            <PopUp
                title="Reset Job"
                show={showConfirmPopup}
                onHide={handleCloseConfirmPopup}
                content={IndustryConfirmSelectionContent}
            />
        </Stack>
    )

    const popUpContent = (
        <Stack>
            <p className='text-black'>Please update the "Hospitality" date/time. Posting a job is not allowed for previous dates/within the next 30 minutes.</p>
            <p onClick={handleClosePopup} className='text-right mb-0 c-pointer text-black'><b>OK</b></p>

        </Stack>
    )

    const skillsContent = (
        <Stack>
            <div className='row justify-content-between'>
                {jobTemplate?.body?.is_skill ? skills?.data?.body?.skills?.map((skill, idx) => (
                    <div className='col-6 mb-3 d-flex gap-2' key={idx}>
                        <input type="checkbox" name={skill?.title} id={skill?._id} onChange={(event) => handleCheckboxChange(event, skill)} />
                        {skill?.title}
                    </div>
                )) : <p className='text-black'>Please first, select the job role</p>}
            </div>
            {jobTemplate?.body?.is_skill &&
                <Button
                    variant='primary'
                    size='lg'
                    className='mt-4'
                    style={{ borderRadius: "1.3rem", color: "#2FE6DE" }}
                    onClick={handleSubmit}
                >
                    OK
                </Button>
            }
        </Stack>
    )

    const jobRoles = (
        <Stack>
            <div>
                <p className='text-black'>You can choose more than one job role</p>
            </div>
            <div className='col-12'>
                <div className='row'>
                    {jobTemplate?.body?.is_jobrole ? jobTemplate?.body?.jobroles?.map((item, idx) => (
                        <div className='col-4 text-center' key={idx}>
                            <Button size='sm' variant='outline-primary' className={`border-none ${item?.is_active ? "active" : ""} rounded-circle p-2 border-0`}
                                onClick={() => selectTempJobRole(item)}
                            >
                                <img src={item?.icons} alt="" width="40px" height="40px" />
                            </Button>
                            <p className='text-black'>{item?.title}</p>
                        </div>
                    )) : (
                        <>
                            {
                                employerJobRoles?.body?.map((item, idx) => (
                                    <div className='col-4 text-center' key={idx}>
                                        <Button size='sm' variant='outline-primary' className={`border-none ${item?.is_active ? "active" : ""} rounded-circle p-2 border-0`}
                                            onClick={() => selectTempJobRole(item)}
                                        >
                                            <img src={item?.icons} alt="" width="40px" height="40px" />
                                        </Button>
                                        <p>{item?.title}</p>
                                    </div>
                                ))
                            }
                        </>
                    )}
                </div>
            </div>
        </Stack>
    )

    const additionalDetailsContent = (
        <Stack>
            {/* Rate & PO Number */}
            <div className="d-flex justify-content-between gap-2">
                <div className='col-6 text-center mb-4'>
                    <h6 className='font-weight-bold'>Rate p/h</h6>
                    <input
                        type="text"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className='w-100 p-3 border-0'
                        style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4" }}
                    />
                </div>
                <div className='col-6 text-center'>
                    <h6 className='font-weight-bold'>PO Number</h6>
                    <input
                        type="text"
                        value={poNumber}
                        onChange={(e) => setPoNumber(e.target.value)}
                        className='w-100 p-3 border-0'
                        style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4" }}
                    />
                </div>
            </div>

            {/* Break */}
            <div className="d-flex justify-content-between gap-2">
                <div className='col-6 text-center'>
                    <h6 className='font-weight-bold'>Break (Mins)</h6>
                    <Form.Select
                        size="md"
                        className='py-3 px-5'
                        value={breakTime}
                        style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4" }}
                        onChange={(e) => setBreakTime(e.target.value)}
                    >
                        <option value="0">0</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                        <option value="60">60</option>
                        <option value="90">90</option>
                        <option value="120">120</option>
                    </Form.Select>
                </div>
                <div className='col-6 text-center'>
                    <h6 className='font-weight-bold mb-4'>Break Paid</h6>
                    <div className='d-flex align-items-center justify-content-around'>
                        <div className='d-flex align-items-center gap-2'>
                            <input
                                value={breakPaid}
                                type="radio"
                                name="breakPaidYes"
                                id="yes"
                                onChange={() => setBreakPaid("true")}
                                checked={breakPaid === true}
                            />
                            Yes
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <input
                                type="radio"
                                value={breakPaid}
                                name="breakPaidNo"
                                id="no"
                                onChange={() => setBreakPaid("false")}
                                checked={breakPaid === false}
                            />
                            No
                        </div>
                    </div>
                </div>
            </div>

            {/* Health & Safety */}
            <div className=" my-5">
                <h6 className='mb-0 text-black'>Health & Safety issues?</h6>

                <div className='d-flex align-items-center mt-3' style={{ gap: "3.2rem" }}>
                    <div className='d-flex align-items-center gap-2 text-black'>
                        <input
                            type="radio"
                            value={healthSafety}
                            name="HsYes"
                            id="HsYes"
                            onChange={() => setHealthSafety("true")}
                            checked={healthSafety === true}
                        />
                        Yes
                    </div>
                    <div className='d-flex align-items-center gap-2 text-black'>
                        <input
                            type="radio"
                            value={healthSafety}
                            name="HsNo"
                            id="HsNo"
                            onChange={() => setHealthSafety("false")}
                            checked={healthSafety === false}
                        />
                        No
                    </div>
                </div>
            </div>

            {/* HS Description */}
            {healthSafety === true && (
                <div className='px-3'>
                <h6 className='font-weight-bold'>Health & Safety Instructions</h6>
                <textarea
                    className='w-100 p-3'
                    rows="2"
                    style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4", color:'black' }}
                    value={hsDescription}
                    onChange={(e) => setHsDescription(e.target.value)}
                    placeholder='Job Description'  // Corrected attribute name
                />
            </div>
            
            )}

            {/* Job Description */}
            <div className='px-3'>
                <h6 className='font-weight-bold'>Job Description</h6>
                <textarea
                    className='w-100 p-3'
                    rows="2"
                    style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <Button
                variant='success'
                className='m-5'
                size='lg'
                style={{ borderRadius: "1.3rem", }}
                onClick={handleAdditionalDetailsSubmit}
            >
                Continue
            </Button>
        </Stack>
    )

    const addUniformContent = (
        <Stack>
            <div className='text-center'>
                <input type="file" accept="image/*" id="fileInput" className='d-none' onChange={(e) => setIcon(e.target.files[0])} />
                <div className="d-flex justify-content-center gap-3" onClick={handleImageClick}>
                    <img className='c-pointer img-fluid' src={icon ? icon : LOGO} alt="click-to-upload" />
                    <i className="fa-solid fa-pen-to-square d-flex align-items-end c-pointer"></i>
                </div>
            </div>
            <div className='my-4'>
                <h6 className='font-weight-bold'>Description</h6>
                <textarea
                    className='w-100 p-3'
                    rows="4"
                    style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4" }}
                    value={uniformDescription}
                    onChange={(e) => setUniformDescription(e.target.value)}
                />
            </div>
            <Button size='lg' className='btn-rounded btn-success' onClick={onSubmit}>Save</Button>
        </Stack>
    )

    const chooseUniformContent = (
        <Stack>
            {
                (jobTemplate?.body?.is_uniform || allUniforms?.data?.body) ? (
                    <div>
                        {allUniforms?.data?.body?.map((uni, idx) => (
                            <div key={idx} className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-3 align-items-center'>
                                    <img src={uni.image} alt="okokoko" width={70} height={70} />
                                    <div>
                                        <p className='mb-2'>{uni.description}</p>
                                        <i className="fa-solid fa-pen-to-square d-flex align-items-end c-pointer" style={{ color: "#2FE6DE" }}></i>
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    id={uni?._id}
                                    checked={selectedUniformId === uni._id}
                                    onChange={(e) => handleUniformCheckboxChange(e, uni?._id)}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <p>Nothing Found! Please add a new uniform.</p>
                        <Button
                            variant='primary'
                            className='rounded-xl d-flex align-items-center gap-2'
                            onClick={handleShowAddUnifromModal}
                        >
                            Add Uniform <span className='fs-6'>+</span>
                        </Button>
                        <CustomeModal
                            title="Add Uniform"
                            show={showAddUniformModal}
                            onHide={handleCloseAddUnifromModal}
                            content={addUniformContent}
                        />
                    </div>
                )
            }
            <Button size='lg' className='btn-rounded mt-4 btn-success' onClick={handleSelectedUniformSubmit}>Save</Button>
        </Stack>
    )

    const calendarContent = (
        <Stack>
            <p>Choose a job role to set dates and time</p>
            <Calender
                templateId={jobTemplate?.body?._id}
                jobroleId={selectedJobRole?._id}
                isBlockBookingChecked={isBlockBookingChecked}
                token={accesstoken}
            />
            <div className='d-flex gap-4 align-items-center my-4'>
                <p className='mb-0'>Post job as a block booking?</p>
                <input type="checkbox" name="" id="" checked={isBlockBookingChecked} onChange={handleBlockBookingCheckbox} />
            </div>
            <Button size='lg' className='btn-rounded' variant='success'>Save</Button>
        </Stack>
    )

    const venueContent = (
        <Stack>
            {
                venues?.body?.map((venue, idx) => (
                    <div key={idx} className='d-flex align-items-center justify-content-between'>
                        <div>
                            <h6>{venue.title}</h6>
                            <p className='mb-0'>{venue.address.line1}</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={selectedVenue === venue}
                            onChange={() => handleVenueSelect(venue)}
                        />
                    </div>
                ))
            }

            <Button variant='primary' className='rounded-xl mt-5' onClick={handleSelectVenue}>Done</Button>
        </Stack>
    )

    const useTemplateContent = (
        <Stack>
            {templateList?.body?.map((template, idx) => (
                <div className='d-flex justify-content-between align-items-center' key={idx}>
                    <div className='d-flex gap-3 align-items-center c-pointer' onClick={() => handleUseTemplate(template)}>
                        <img src={template?.jobrole_icon} alt="" width={50} height={50} />
                        <h6 className='mb-0'>{template?.name}</h6>
                    </div>

                    <i class="fa-solid fa-trash fs-5 c-pointer text-success" onClick={() => deleteTemp(template)}></i>
                </div>
            ))}
        </Stack>
    )

    const jobNameModal = (
        <Stack>
            <h6>Template Name</h6>
            <input
                type="text"
                value={jobName}
                onChange={(e) => setJobName(e.target.value)}
                placeholder='Enter template name'
                className='rounded-full mb-1 form-control px-3 py-1 text-gray-500 border-0'
            />
            {jobName === "" && (
                <p className='text-red fs-12 ml-3'>Please enter template name</p>
            )}
            <p className='text-end mb-0 c-pointer btn-success' onClick={jobName !== "" && handleSaveJobTemplate}>Save</p>
        </Stack>
    )

    const createJobModalContent = (
        <Stack gap={3}>
            <div className='border-bottom'>
                <div className="d-flex align-items-center justify-content-between">
                    <h6 className=" mb-3 text-black">Venue:</h6>
                    <p className='mb-0 c-pointer text-success' onClick={handleShowUseTemplateModal}>Use Templates</p>
                </div>
                <CustomeModal
                    title="Templates"
                    show={showUseTemplateModal}
                    onHide={handleCloseUseTemplateModal}
                    content={useTemplateContent}
                />
                {jobTemplate?.body?.is_venue ? (
                    <>
                        <h6>{jobTemplate?.body?.venue?.title}</h6>
                        <p className='mb-0'>{jobTemplate?.body?.venue.address.line1}</p>
                    </>
                ) :
                    <Button size="sm" variant='outline-primary' className='mb-4 py-1 rounded-lg px-2' onClick={handleShowVenueModal}>Add Venue +</Button>
                }
                <CustomeModal
                    title="Venues"
                    show={showVenueModal}
                    onHide={handleCloseVenueModal}
                    content={venueContent}
                />
            </div>

            <div className='border-bottom'>
                <h6 className=" mb-3 text-black">Industry:</h6>
                {jobTemplate?.body?.is_industry ? (

                    <div className='d-flex flex-wrap gap-2'>
                        <Button
                            type="button"
                            className="btn-sm d-flex align-items-center gap-2 btn-success rounded-4"
                            // variant="primary"
                            onClick={handleShowIndustriesModal}
                        >
                            {jobTemplate?.body?.industry?.title} <i className="fa-solid fa-circle-plus fs-5"></i>
                        </Button>
                    </div>
                ) : (
                    <Button size="sm" variant='outline-primary' className='mb-4 py-1 rounded-lg px-2' onClick={handleShowIndustriesModal}>Add Industry +</Button>
                )}

                <CustomeModal
                    title="What industry are you recruiting for?"
                    show={showIndustriesModal}
                    onHide={handleCloseIndustriesModal}
                    content={industriesContent}
                />

            </div>

            <div className='border-bottom'>
                <h6 className=" mb-3 text-black">Job Roles:</h6>
                <div className="d-flex flex-wrap gap-2 align-items-center">
                    {jobTemplate?.body?.is_jobrole ? jobTemplate?.body?.jobroles?.filter(jr => jr.is_active).map((role, i) => (
                        <Button
                            key={i}
                            type="button"
                            size='sm'
                            className={`mb-2 d-flex align-items-center gap-2  ${activeJobRoleButton === role ? "active" : ""}`}
                            style={{ color: `${activeJobRoleButton === role ? "black" : ""}`, borderRadius: "1rem" }}
                            variant="success"
                            onClick={() => {
                                setSelectedJobRole(role)
                                setActiveJobRoleButton(role)
                            }}
                        >
                            {role?.title}
                            <i className="fa-solid fa-circle-xmark fs-6" onClick={() => deleteJobRole(role)}></i>
                        </Button>
                    )) : (
                        <div className="d-flex flex-wrap gap-2 align-items-center">
                            {employerJobRoles?.body?.filter(role => role.is_active).map((role, i) => (
                                <Button
                                    key={i}
                                    type="button"
                                    size='sm'
                                    className={`rounded-xl mb-2 d-flex align-items-center gap-2 text-success ${activeJobRoleButton === role ? "active" : "text-success"}`}
                                    style={{ color: `${activeJobRoleButton ? "text-success" : "text-success"}` }}
                                    variant="success"
                                    onClick={() => {
                                        setSelectedJobRole(role)
                                        setActiveJobRoleButton(role)
                                    }}
                                >
                                    {role?.title}
                                    <i className="fa-solid fa-circle-xmark fs-6" onClick={() => deleteJobRole(role)}></i>
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
                <Button size="sm" variant='outline-primary' className='mb-4 py-1 rounded-3 px-2' onClick={handleShowJobRolesModal}>Add Job Roles +</Button>
                <CustomeModal
                    title="Job Roles"
                    show={showJobrolesModal}
                    onHide={handleCloseJobRolesModal}
                    content={jobRoles}
                />
            </div>

            <div className='border-bottom'>
                <h6 className=" mb-3 text-black">Skills:</h6>
                <div className='d-flex flex-wrap gap-2 align-items-center'>
                    {jobTemplate?.body?.skills?.filter(skill => skill.is_active).map((skill, idx) => (
                        <Button
                            key={idx}
                            type="button"
                            size='sm'
                            className="d-flex align-items-center gap-2 btn-success text-white rounded-4"
                            variant="primary"
                        >
                            {skill?.title}
                            <i className="fa-solid fa-circle-xmark fs-6" onClick={() => deleteTemplateSkill(skill?._id)}></i>
                        </Button>
                    ))}
                </div>
                <Button
                    size="sm"
                    variant='outline-primary'
                    className='mb-4 py-1 rounded-3 px-2'
                    onClick={showSkills}
                >
                    Add Skills +
                </Button>
                {/* Skills Modal */}
                <CustomeModal
                    title={jobTemplate?.body?.is_skill ? "Select a maximum of 5 Skills for null" : "Warning"}
                    show={showSkillsModal}
                    onHide={handleCloseSkillsModal}
                    content={skillsContent}
                />
            </div>

            <div className='border-bottom'>
                <h6 className=" mb-3 text-black">Date & Time:</h6>
                <div className="">
                    {jobTemplate?.body?.is_datetime ?
                        <p className='c-pointer' onClick={handleShowCalendarModal}>{sequence}</p> :
                        <Button size="sm" variant='outline-primary' className='mb-4 py-1 rounded-3 px-2' onClick={handleShowCalendarModal}>+ Add Job Date & Time</Button>
                    }
                </div>
                <CustomeModal
                    title="Date & Time"
                    show={showCalendarModal}
                    onHide={handleCloseCalendarModal}
                    content={calendarContent}
                />
            </div>

            <div className="border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="text-black mb-2">Additional Details:</h6>
                    <p
                        className="font-weight-bold text-right c-pointer mb-2 text-success"
                        onClick={handleShowAdditionalDetailsModal}
                    >
                        {jobTemplate?.body?.is_additional_details ? "Edit" : "Add"}
                    </p>
                </div>
                <div>
                    {
                        jobTemplate?.body?.additional ? (
                            <Stack>
                                {/* Rate & PO Number */}
                                <div className="d-flex justify-content-between gap-2">
                                    <div className='col-6 mb-4'>
                                        <h6 className='font-weight-bold'>Rate p/h</h6>
                                        <p className='mb-0'>{jobTemplate?.body?.additional?.rate}</p>
                                    </div>
                                    <div className='col-6'>
                                        <h6 className='font-weight-bold'>PO Number</h6>
                                        <p className='mb-0'>{jobTemplate?.body?.additional?.po_number}</p>
                                    </div>
                                </div>

                                {/* Break */}
                                <div className="d-flex justify-content-between gap-2">
                                    <div className='col-6'>
                                        <h6 className='font-weight-bold'>Break (Mins)</h6>
                                        <p>{jobTemplate?.body?.additional?.break_time}</p>
                                    </div>
                                    <div className='col-6'>
                                        <h6 className='font-weight-bold'>Break Paid</h6>
                                        <p>{jobTemplate?.body?.additional?.break_paid ? "Yes" : "No"}</p>
                                    </div>
                                </div>

                                {/* Health & Safety */}
                                <div className="d-flex px-3" style={{ gap: "3.5rem" }}>
                                    <p className='mb-0'>Health & Safety issues?</p>
                                    <p >{jobTemplate?.body?.additional?.health_safety ? "Yes" : "No"}</p>
                                </div>

                                {jobTemplate?.body?.additional?.health_safety &&
                                    <div className='px-3'>
                                        <h6 className='font-weight-bold'>Health & Safety Instructions</h6>
                                        <p className='w-100 p-3' style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4" }}>
                                            {jobTemplate?.body?.additional?.hs_description}
                                        </p>
                                    </div>
                                }

                                {/* Job Description */}
                                <div className='px-3'>
                                    <h6 className='font-weight-bold'>Job Description</h6>
                                    <p className='w-100 p-3' style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4" }}>
                                        {jobTemplate?.body?.additional?.description}
                                    </p>
                                </div>
                            </Stack>
                        ) : (
                            <p className='mb-4 text-black'>Enter Additional Details</p>
                        )
                    }
                </div >

                {/* Add Additional Details Modal */}
                <CustomeModal
                    title="Additional Details"
                    show={showAdditionalDetailsModal}
                    onHide={handleCloseAdditionalDetailsModal}
                    content={additionalDetailsContent}
                />
            </div >

            <div className="border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="text-black mb-2">Uniforms:</h6>
                    <p
                        className="font-weight-bold text-right c-pointer mb-2 text-success"
                        onClick={handleShowUnifromModal}
                    >
                        Choose
                    </p>
                </div>
                <p className='text-black mb-3'>Upload any Additional informations</p>
                {jobTemplate?.body?.is_uniform ? (
                    <div className='d-flex gap-2'>
                        <img src={jobTemplate?.body?.uniform?.image} alt="" className='mb-3' width={50} height={50} />
                        <p>{jobTemplate?.body?.uniform?.description}</p>
                    </div>
                ) : (

                    <img src={DefaultImg} alt="" className='mb-3' />
                )}
                <CustomeModal
                    title="Uniforms"
                    show={showUniformModal}
                    onHide={handleCloseUnifromModal}
                    content={chooseUniformContent}
                />
            </div>

            <div className='border-bottom'>
                <h6 className="text-black mb-3">Uploads:</h6>
                <input type="file" accept="application/pdf" id="pdfFiles" className='d-none' onChange={(e) => handleUploadPdf(e.target.files[0])} />
                <p className='mb-4 c-pointer text-black' onClick={handleUploadImageClick}>Upload any Additional Information</p>
                <div className='mb-4'>
                    {jobTemplate?.body?.uploads?.map((upload, idx) => (
                        <div key={idx} className='d-flex justify-content-between align-items-center mb-2'>
                            <p className='mb-0'>{upload?.name}</p>
                            <i className="fa-solid fa-trash fs-6 c-pointer text-success" onClick={() => deleteTempUpload(upload)}></i>
                        </div>
                    ))}
                </div>
            </div>

            <div className='d-flex gap-2 align-items-center mb-3'>
                <input type="checkbox" value={isTemplate} onChange={(e) => setIsTemplate(!isTemplate)} />
                <p className='mb-0'>Save job as a template?</p>
            </div>

            <Button
                size='lg'
                className='rounded-4 mb-5'
                variant='success'
                onClick={handleShowCreateJobNameModal}
            >
                Continue
            </Button>
            <CustomeModal
                title=""
                show={showCreateJobNameModal}
                onHide={handleCloseCreateJobNameModal}
                content={jobNameModal}
            />
        </Stack >
    )

    const warningPostJobModal = (job) => (
        <Stack>
            <h6>Update Job Date/Time</h6>
            <p>Please update the "{job?.industry?.title}" date/time. Posting a job is not allowed for previous dates/within the next 30 minutes.</p>
            <p className='text-end mb-0 c-pointer' onClick={handleClosePostJobModal}>Ok</p>
        </Stack>
    )

    const postJobModal = (job) => (
        <Stack>
            <h6>Max Staff Required: 1</h6>
            <div className='d-flex justify-content-center' style={{ height: "100px", width: "100%" }}>
                <DonutChart
                    data={[
                        {
                            value: parseInt(jobProb?.data?.body.option1.percentage),
                        },
                        {
                            value: parseInt(jobProb?.data?.body.option1.percentage),
                        },
                    ]}
                    className='ml-4 side-options'
                    width={200}
                    height={200}
                    emptyColor='#fff'
                    formatValues={(values, total) => `${(values / total * 100).toFixed(2)}%`}
                    colors={["aqua", "#fdc500"]}
                />
                <p className='position-absolute mb-0 text-black' style={{ right: "249px" }}>
                    {parseInt(jobProb?.data?.body.option3.percentage).toFixed(0) >= 100 && parseInt(jobProb?.data?.body.option3.percentage).toFixed(0)}%
                </p>
                <p className='position-absolute mb-0 text-black' style={{ right: "249px", top: "164px" }}>
                    {parseInt(jobProb?.data?.body.option1.percentage).toFixed(0) >= 100 && parseInt(jobProb?.data?.body.option1.percentage).toFixed(0)}%
                </p>
            </div>
            <div className='d-flex flex-column align-items-center mt-5'>
                <p className='d-flex gap-2 text-black mb-0 align-items-center'>
                    <span style={{ background: "aqua", width: "8px", height: "8px", borderRadius: "50%" }}></span>
                    Option 1 ({jobProb?.data?.body.option1.available_workers} workers available)
                </p>
                <p className='d-flex gap-2 mb-0 text-black align-items-center'>
                    <span style={{ background: "#2dc653", width: "8px", height: "8px", borderRadius: "50%" }}></span>
                    Option 2 ({jobProb?.data?.body.option2.available_workers} workers available)
                </p>
                <p className='d-flex gap-2 mb-0 text-black align-items-center'>
                    <span style={{ background: "#fcca46", width: "8px", height: "8px", borderRadius: "50%" }}></span>
                    Option 3 ({jobProb?.data?.body.option3.available_workers} workers available)
                </p>
            </div>

            <h6>Posting Options</h6>
            <div className='px-4'>
                <div className='d-flex'>
                    <Form>
                        <Form.Check
                            type="radio"
                            name="options"
                            id="option1"
                            value="1"
                            checked={selectedOption === "1"}
                            onChange={(e) => handleRadioChange(e)}
                        />
                    </Form>
                    <p className="mb-0 text-black"><strong>Option 1</strong> Let Seleckt choose workers</p>
                </div>
                <div className='d-flex my-1'>
                    <Form>
                        <Form.Check
                            className='border-1 border-black'
                            type="radio"
                            name="options"
                            id="option2"
                            value="2"
                            disabled={job?.summary?.workerlist?.length > 0 ? false : true}
                            checked={selectedOption === "2"}
                            onChange={(e) => handleRadioChange(e)}
                        />
                    </Form>
                    <p className="mb-0 text-red"><strong>Option 2</strong> Add workers to your pool to enable option</p>
                </div>
                <div className='d-flex'>
                    <Form>
                        <Form.Check
                            type="radio"
                            name="options"
                            id="option3"
                            value="3"
                            checked={selectedOption === "3"}
                            onChange={(e) => handleRadioChange(e)}
                        />
                    </Form>
                    <p className="mb-0 text-black"><strong>Option 3</strong> Browse and choose workers</p>
                </div>
            </div>
            <CustomeModal
                title="Selected workers"
                show={showJobWorkersListModal}
                onHide={handleCloseJobWorkersListModal}
                content={jobWorkersListContent(job)}
            />
            <Button
                variant='success'
                className='mt-4 rounded-full'
                size='lg'
                style={{ borderRadius: "1.3rem", }}
                onClick={() => handlePostSelectedJob(job)}
            >
                Continue
            </Button>
        </Stack>
    )

    const jobWorkersListContent = (job) => (
        <Stack>
            <InfiniteScrollPagination
                job_id={job?._id}
                accesstoken={accesstoken}
                selectedWorkers={selectedWorkers}
                setSelectedWorkers={setSelectedWorkers}
            />
        </Stack>
    )

    const jobSummary = (job) => (
        <Stack gap={3}>
            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Venue</p>
                <p className="text-capitalize mb-3">{job?.venue.title}</p>
            </div>

            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Industry</p>
                <Button
                    type="button"
                    className="btn-sm mb-3 rounded-4"
                    variant="success"
                >
                    {job?.industry?.title}
                </Button>
            </div>

            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Job Roles</p>
                <Button
                    type="button"
                    className="btn-sm mb-3 rounded-4"
                    variant="success"
                >
                    {job?.jobrole.title}
                </Button>
            </div>

            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Skills</p>
                <div className='d-flex flex-wrap gap-1'>
                    {job?.summary?.j_skill.filter(skill => skill.is_active).length > 0 ? job?.summary?.j_skill.filter(skill => skill.is_active).map((skill) => (
                        <Button
                            key={skill?._id}
                            type="button"
                            className="btn-sm mb-3 rounded-4"
                            variant="success"
                        >
                            {skill?.title}
                        </Button>
                        // )) : (<p className='text-red'>No Jobs</p>)}
                    )) : (<img src={nofound} alt={nofound} />)}
                </div>
            </div>

            <div className="border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="font-weight-bold mb-0 text-black">Date & Time</p>
                    <p className="font-weight-bold mb-0 text-right text-success">Show all</p>
                </div>
                <p className="font-weight-bold text-right text-black mb-0">Qty/Hired</p>
                <div className='mb-3'>
                    {job?.summary?.datetime.datetime.map((dt, idx) => (
                        <div key={idx} style={{ backgroundColor: "#edf2f4" }} className='mb-1 py-1 rounded-xl'>
                            <div className='d-flex justify-content-around align-items-center px-2'>
                                <p className="text-capitalize mb-0 fs-13">{dt?.start_date}</p>
                                <p className="text-capitalize mb-0 fs-13">-</p>
                                <p className="text-capitalize mb-0 fs-13">{dt?.end_date}</p>
                                <p className='mb-0 fs-13'>{dt.qty}/0</p>
                            </div>
                            <div className="px-2 d-flex justify-content-center">
                                <p className='mb-0 fs-13'>Break Time({dt.break_time})mins, Break Paid({dt.is_break_paid ? "Yes" : "No"})</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-bottom">
                <p className="font-weight-bold mb-2 text-black">Additional Details</p>
                <div className='d-flex' style={{ gap: "11rem" }}>
                    <div>
                        <div>
                            <h6 className="font-weight-bold mb-1">Rate p/h</h6>
                            <p>£{job?.rate}</p>
                        </div>

                        <div>
                            <h6 className="font-weight-bold mb-1">Break Times</h6>
                            <p>{job?.break_time}</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h6 className="font-weight-bold mb-1">PO Number</h6>
                            <p>{job?.po_number}</p>
                        </div>

                        <div>
                            <h6 className="font-weight-bold mb-1">Break Paid</h6>
                            <p>{job?.break_paid ? "Yes" : "No"}</p>
                        </div>
                    </div>
                </div>

                <div className='d-flex align-items-center mb-3' style={{ gap: "5.9rem" }}>
                    <h6 className="font-weight-bold d-flex flex-column mb-0">Health & Safety issues?</h6>
                    <p className='mb-0'>{job?.health_safety ? "Yes" : "No"}</p>
                </div>
                <div className=''>
                    <h6 className="font-weight-bold mb-2">Health & Safety Instructions</h6>
                    <p className='px-2 rounded-xl py-2' style={{ backgroundColor: "#edf2f4" }}>{job?.hs_description === "" ? "N/A" : job?.hs_description}</p>
                </div>
                <div className=''>
                    <h6 className="font-weight-bold mb-2">Job Description</h6>
                    <p className='px-2 rounded-xl py-2' style={{ backgroundColor: "#edf2f4" }}>{job?.description === "" ? "N/A" : job?.description}</p>
                </div>
            </div>

            <div className='border-bottom'>
                <h6 className="font-weight-bold mb-2">Job Uniform</h6>
                <div className='d-flex gap-3 align-items-center mb-4'>
                    <img src={job?.summary?.uniform?.image} alt="img" height={70} width={70} />
                    <p>{job?.summary?.uniform?.description}</p>
                </div>
            </div>

            <div className='border-bottom'>
                <h6 className="font-weight-bold mb-3">Uploads</h6>
                {job?.summary?.is_upload ? job?.summary?.uploads?.map((upload) => (
                    <p key={upload?._id} className='mb-3'>{upload.name}</p>
                )) : <p className='mb-3 text-red'>No Files</p>}
            </div>

            <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6 className="font-weight-bold mb-0">Payment Details</h6>
                    <p
                        className="font-weight-bold text-right mb-0 c-pointer text-success"
                        onClick={handleShowMoreClick}>
                        {showPaymentDetails ? "Show less" : "Show more"}
                    </p>
                </div>
                <div className='border-bottom mb-3'>
                    {showPaymentDetails && (
                        <div className='d-flex mb-2' style={{ gap: "11rem" }}>
                            <div>
                                <div>
                                    <h6 className="font-weight-bold mb-2">Total Hrs</h6>
                                    <p className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}>{job?.summary?.total_hours}</p>
                                </div>

                                <div>
                                    <h6 className="font-weight-bold mb-2">VAT %</h6>
                                    <p className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}>{job?.summary?.VAT}</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h6 className="font-weight-bold mb-2">NI %</h6>
                                    <p className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}>{job?.summary?.NI}</p>
                                </div>

                                <div>
                                    <h6 className="font-weight-bold mb-2">Fee %</h6>
                                    <p className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}>{job?.summary?.FEE}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='border-bottom mb-3'>
                    <div className='d-flex gap-5 align-items-center'>
                        <h6 className="font-weight-bold">Total Payment</h6>
                        <i className="fa-solid fa-circle-info fs-5 c-pointer text-success" onClick={handleShowPopup}></i>
                    </div>
                    <p>£{job?.summary?.total_payment}</p>
                    <PopUp
                        title="Info"
                        show={showPopup}
                        content={popUpContent}
                    />
                </div>

                {job?.summary.workerlist?.length > 0 && <div>
                    <h6 className="font-weight-bold mb-2">Hired Worker</h6>
                    <div className="text-capitalize mb-3">
                        {job?.summary.workerlist?.length > 0 ? job?.summary.workerlist.map((wList, i) => (
                            <p key={i}>{wList?.name}</p>

                        )) : (
                            <p className='text-red'>No Workers</p>
                        )}
                    </div>
                </div>}
            </div>

            {job?.status === "drafted" && <Button size='lg' variant='primary rounded-full' onClick={handleShowPostJobModal}>Post Job</Button>}
            {/* Post Job modal */}
            <CustomeModal
                title=""
                show={showPostJobModal}
                onHide={handleClosePostJobModal}
                content={isAnyDateBeforeToday(job) ? warningPostJobModal(job) : postJobModal(job)}
            />
        </Stack>
    )
    // ************ MODAL CONTENTS ENDS ************ //

    const debounceData = useDebouncedCallback(() => {
        fetchData()
    }, 1000)

    const fetchData = () => {
        dispatch(employerJobs({ id: id, status: status, pageno: 1, keyword: keyword }));
    }

    useEffect(() => {
        setActiveButton(status)
    }, [status])

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        fetchData()
        dispatch(employerProfileId(id));
        return () => reset();
    }, [isError, message, dispatch, id, status]);

    const handleStatusClick = (status) => {
        setStatus(status);
        setActiveButton(status)
        dispatch(employerJobs({ id: id, status: status, pageno: 1, keyword: keyword }));
    };

    const handleSearchInputChange = (event) => {
        setKeyword(event.target.value);
        debounceData()
    };

    const changePage = async (data) => {
        dispatch(workerJobs(data.selected + 1))
        setPageNumber(data.selected);
    };

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <span>
                    <Nav />
                    <div className="content-body">
                        <div className="container-fluid">
                            <div className="h-80">

                                {/* <div className="d-flex flex-wrap mb-4 row">
                                    <div className="col-xl-3 col-lg-4 mb-2">
                                        <h1 className='fs-35 mb-3'><b>Jobs</b></h1>
                                        <h6 className="text-black fs-16 font-w600 mb-1">
                                            {(pageVisted + userPerPage > total_pages
                                                ? total_pages
                                                : pageVisted + userPerPage) - pageVisted}
                                            {" "} Rows per page
                                        </h6>
                                        <span className="fs-14">Based your preferences</span>
                                    </div>
                                    <div className="col-xl-6 col-lg-8 d-flex flex-wrap">
                                        <div className='d-flex gap-3 align-items-center'>
                                            {topOptions?.map((options, idx) => (
                                                <Button
                                                    key={idx}
                                                    className={`btn-rounded mb-2 ${activeButton === options.status ? 'active' : ''}`}
                                                    variant="outline-primary"
                                                    type='button'
                                                    onClick={() => handleStatusClick(options.status)}
                                                >
                                                    {options?.name}
                                                </Button>
                                            ))}
                                        </div>
                                    </div> */}
                                {/* Search */}
                                {/* <div className="input-group search-area d-flex">
                                        <input
                                            type="text"
                                            className="form-control"
                                            style={{ height: "56px" }}
                                            placeholder="Search something here..."
                                            value={keyword}
                                            onChange={handleSearchInputChange}
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" style={{ height: "56px" }}>
                                                <i className="flaticon-381-search-2"></i>
                                            </span>
                                        </div>
                                    </div> */}
                                {/* </div> */}
                                <div className="d-flex flex-wrap mb-4 row">
                                    <div className="col-xl-6 col-lg-4 mb-2">
                                        <h1 className="text-black fs-35 font-w600 mb-3">
                                            Jobs
                                        </h1>
                                        <h6 className="fs-16 mb-1">
                                            {(pageVisted + userPerPage > total_pages
                                                ? total_pages
                                                : pageVisted + userPerPage) - pageVisted}
                                            {" "} Rows per page
                                        </h6>
                                        {/* <span className="fs-14">Based your preferences</span> */}
                                    </div>
                                    <div className="col-lg-6 col-sm-12 mb-2 ">
                                        <Form className="d-flex gap-2 justify-content-end">
                                            <div className="date-picker-container position-relative">
                                                <ReactDatePicker
                                                    selected={startDatePicker}
                                                    onChange={(date) => setStartDatePicker(date)}
                                                    style={{ maxWidth: '200px' }}
                                                    className="form-control rounded-3 border-dark w-100 custom-dropdown-toggle bg-transparent py-3 float-end"
                                                    dateFormat="dd/MM/yyyy"
                                                    placeholderText="From"
                                                />
                                                <i className="fa-solid fa-chevron-down fa-sm position-absolute calendar-icon-worker mt-2" style={{ color: '#00B094' }} />
                                            </div>
                                            <div className="date-picker-container position-relative mr-3">
                                                <ReactDatePicker
                                                    selected={dueDate}
                                                    onChange={(date) => setDueDate(date)}
                                                    style={{ maxWidth: '200px' }}
                                                    className="form-control rounded-3 border-dark w-100 custom-dropdown-toggle bg-transparent py-3"
                                                    dateFormat="dd/MM/yyyy"
                                                    placeholderText="To"
                                                />
                                                <i className="fa-solid fa-chevron-down fa-sm position-absolute calendar-icon-worker mt-2" style={{ color: '#00B094' }} />
                                            </div>
                                            <Dropdown onSelect={handleSelectOffers} className="flex-grow-1" style={{ maxWidth: '200px' }}>
                                                <Dropdown.Toggle id="dropdown-offers" className=" rounded-4 border-dark w-100 custom-dropdown-toggle bg-transparent text-success float-start">
                                                    <span className="text-black">{selectedOffers}</span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="Offers">Draft</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Hired">Posted</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Ongoing">Ongoing</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Complete">Complete</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Filled Jobs">Filled Jobs</Dropdown.Item>
                                                    <Dropdown.Item eventKey="UnFilled Jobs">UnFilled Jobs</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Job Starting">Job Starting</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            {/* <Dropdown onSelect={handleSelectOffers} className="mt-2 flex-grow-1" style={{ maxWidth: '200px' }}>
                                                <Dropdown.Toggle id="dropdown-offers" className=" rounded-4 border-dark w-100 custom-dropdown-toggle bg-transparent text-success mt-4">
                                                    <span className="text-black">{selectedOffers}</span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="Offers">Draft</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Hired">Posted</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Ongoing">Ongoing</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Complete">Complete</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Declined">Filled Jobs</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Declined">UnFilled Jobs</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Declined">Job Starting</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown> */}
                                            <Button className="btn btn-success rounded-5 text-nowrap" onClick={() => handleShowCreateJobModal()}>+ Create Job</Button>
                                        </Form>
                                        {/* <Form className="d-flex flex-wrap gap-2 w-100 justify-content-end">
                                            <Dropdown onSelect={handleSelectFrom} className="flex-grow-1" style={{ maxWidth: '200px' }}>
                                            <Dropdown.Toggle id="dropdown-basic" className="py-3 rounded-4 border-dark  w-100 custom-dropdown-toggle bg-transparent text-success">
                                                    <span className="text-black">{selectedFrom}</span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="From">From</Dropdown.Item>
                                                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3">3</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown onSelect={handleSelectTo} className="flex-grow-1" style={{ maxWidth: '200px' }}>
                                                <Dropdown.Toggle id="dropdown-to" className="py-3 rounded-4 border bg-white w-100">
                                                    <span className="text-black">{selectedTo}</span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="To">To</Dropdown.Item>
                                                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            
                                        </Form> */}
                                    </div>
                                    {/* <div className="col-xl-9 col-lg-8 d-flex flex-wrap">
                                        <div className='d-flex gap-3 align-items-center'>
                                            {topOptions?.map((options, idx) => (
                                                <Button
                                                    key={idx}
                                                    className={`btn-rounded mb-2 ${activeButton === options.status ? 'active' : ''}`}
                                                    variant="outline-primary"
                                                    type='button'
                                                    onClick={() => handleStatusClick(options.status)}
                                                >
                                                    {options?.name}
                                                </Button>
                                            ))}
                                        </div>
                                    </div> */}
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="table-responsive">
                                            <div
                                                id="example5_wrapper"
                                                className="dataTables_wrapper no-footer"
                                            >
                                                <table
                                                    className="table display mb-4 dataTablesCard card-table dataTable no-footer"
                                                    id="example5"
                                                    role="grid"
                                                    aria-describedby="example5_info"
                                                >
                                                    <thead>
                                                        <tr role="row">
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="ID: activate to sort column ascending"
                                                                style={{ width: 50, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                ID
                                                            </th>
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Type: activate to sort column ascending"
                                                                style={{ width: 87, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Company
                                                            </th>
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Company: activate to sort column ascending"
                                                                style={{ width: 216, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Industry
                                                            </th>
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Company: activate to sort column ascending"
                                                                style={{ width: 216, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Address
                                                            </th>
                                                            {/* <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Postition: activate to sort column ascending"
                                                                style={{ width: 89, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Job Roles
                                                            </th>
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Contact: activate to sort column ascending"
                                                                style={{ width: 116, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Venue
                                                            </th> */}
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Status: activate to sort column ascending"
                                                                style={{ width: 164, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Start Date & Time
                                                            </th>


                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Date Applied: activate to sort column ascending"
                                                                style={{ width: 124, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                End Date & Time
                                                            </th>

                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Status: activate to sort column ascending"
                                                                style={{ width: 164, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Hours
                                                            </th>
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Status: activate to sort column ascending"
                                                                style={{ width: 164, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Action
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    {!isLoading ? (
                                                        <tbody>
                                                            {
                                                                jobsList?.length > 0 ? getWorkr() : (
                                                                    <tr>
                                                                        <td colSpan="10" className="text-center text-red">
                                                                            <img src={nofound} alt={nofound} width="30%" height="30%" />
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            }
                                                        </tbody>
                                                    ) : (
                                                        <tbody>
                                                            <tr>
                                                                <td colSpan="10" className="text-center text-red">
                                                                    Loading jobs...
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    )}
                                                </table>
                                                <div className="d-flex align-items-center justify-content-between pb-2">
                                                    <div
                                                        className="dataTables_info"
                                                        id="example5_info"
                                                        role="status"
                                                        aria-live="polite"
                                                    >
                                                        Showing {pageVisted + 1}
                                                        of {total_pages} pages
                                                    </div>
                                                    <div
                                                        className="dataTables_paginate paging_simple_numbers"
                                                        id="example5_paginate"
                                                    >
                                                        <ReactPaginate
                                                            previousLabel={"Previous"}
                                                            nextLabel={"Next"}
                                                            pageCount={pageCount}
                                                            onPageChange={changePage}
                                                            containerClassName={"paginationBttns"}
                                                            previousLinkClassName={
                                                                "paginate_button previous previousBttn"
                                                            }
                                                            nextLinkClassName={
                                                                "paginate_button next nextBttn"
                                                            }
                                                            pageLinkClassName={"paginate_button mr-1 ml-1"}
                                                            disabledClassName={"paginationDisabled"}
                                                            activeClassName={"paginationActive"}
                                                            forcePage={"pageNumber"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </span>
            )}

            {/* Job modal */}
            <CustomeModal
                title={editingMode ? "Edit Job" : "Job Summary"}
                show={showJobDetailsModal}
                onHide={handleCloseJobDetailsModal}
                content={editingMode ?
                    <EditJob job={editedJob} editingMode={editingMode} /> :
                    jobSummary(selectedJob)}
            />
            <CustomeModal
                title="Create Job"
                show={showCreateJobModal}
                onHide={handleCloseCreateJobModal}
                content={createJobModalContent}
            />
        </>
    )
}

export default EmployerJobsTable
