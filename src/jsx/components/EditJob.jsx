import React, { useState } from 'react'
import { getAllSkillsOfJobRole, getAllUniforms } from '../../features/templateJob/employerTemplateJobSlice'
import { putJobSkillsForEditJob, putJobAdditionalForEditJob, putJobUniformForEditJob, putJobDescriptionForEditJob } from '../../features/jobs/jobslice'
import { Button, Form, Stack } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CustomeModal from './customeModal/CustomeModal'
import Calender from './Calender'


const EditJob = ({ job, editingMode }) => {

    const dispatch = useDispatch()

    const [showUniformModal, setShowUniformModal] = useState(false)
    const [showSkillsModal, setShowSkillsModal] = useState(false)
    const [selectedSkills, setSelectedSkills] = useState([])
    const [showCalendarModal, setShowCalendarModal] = useState(false)
    const [showAdditionalDetailsModal, setShowAdditionalDetailsModal] = useState(false)
    const [isBlockBookingChecked, setIsBlockBookingChecked] = useState(false)
    const [selectedUniformId, setSelectedUniformId] = useState(null);
    const [loading, setLoading] = useState(false)

    // Additional Details States
    const [rate, setRate] = useState(0);
    const [poNumber, setPoNumber] = useState('');
    const [breakTime, setBreakTime] = useState('');
    const [breakPaid, setBreakPaid] = useState("false");
    const [healthSafety, setHealthSafety] = useState("false");
    const [hsDescription, setHsDescription] = useState('');
    const [description, setDescription] = useState('');

    // EmployerJobTemplate useSelector
    const { jobTemplate, skills, allUniforms } = useSelector((state) => state?.jobTemplate)
    const { accesstoken } = useSelector((state) => state?.employers)

    const handleShowSkillsModal = () => { setShowSkillsModal(true) }
    const handleCloseSkillsModal = () => { setShowSkillsModal(false) }

    const handleShowCalendarModal = () => { setShowCalendarModal(true) }
    const handleCloseCalendarModal = () => { setShowCalendarModal(false) }

    const handleShowUnifromModal = () => {
        setShowUniformModal(true)
        setLoading(true)
        dispatch(getAllUniforms({ jobrole_id: job?.summary.jobrole._id, token: accesstoken }))
        setLoading(false)
    }
    const handleCloseUnifromModal = () => { setShowUniformModal(false) }

    const showSkills = () => {
        handleShowSkillsModal()
        dispatch(getAllSkillsOfJobRole({ jobrole_id: job?.summary.jobrole._id, token: accesstoken }))
    }

    const handleBlockBookingCheckbox = () => { setIsBlockBookingChecked(!isBlockBookingChecked); }

    const handleShowAdditionalDetailsModal = () => {
        // Set state variables with values for editing
        setRate(job.rate ? job.rate : 0);
        setPoNumber(job?.po_number ? job?.po_number : '');
        setBreakTime(job?.break_time ? job?.break_time : '0');
        setBreakPaid(job?.break_paid ? job?.break_paid.toString() : "false");
        setHealthSafety(job?.health_safety ? job?.health_safety.toString() : "false");
        setHsDescription(job?.hs_description ? job?.hs_description : '');
        setDescription(job?.description ? job?.description : '');
        setShowAdditionalDetailsModal(true)
    }
    const handleCloseAdditionalDetailsModal = () => { setShowAdditionalDetailsModal(false) }

    const handleUniformCheckboxChange = (event, uniformId) => {
        if (event.target.checked) {
            setSelectedUniformId(uniformId);
        } else {
            setSelectedUniformId(null);
        }
    };

    const handleUpdatedUniformSubmit = (e) => {
        e.preventDefault();
        dispatch(putJobUniformForEditJob({
            job_id: job?._id,
            uniform_id: selectedUniformId,
            token: accesstoken
        }))
        handleCloseUnifromModal()
    }

    const handleCheckboxChange = (event, skill) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedSkills(prevSelectedSkills => [...prevSelectedSkills, { ...skill, is_active: true }]);
        } else {
            setSelectedSkills(prevSelectedSkills => prevSelectedSkills.filter(selectedSkill => selectedSkill._id !== skill._id));
        }
    };

    const handleUpdatedSKills = () => {
        dispatch(putJobSkillsForEditJob({
            job_id: job?._id,
            skills: selectedSkills,
            token: accesstoken
        }))
        handleCloseSkillsModal()
    }

    const handleUpdatedAddtitonal = () => {
        dispatch(putJobAdditionalForEditJob({
            rate: rate.toString(),
            job_id: job?._id,
            qty: "0",
            break_time: breakTime,
            break_paid: breakPaid.toString(),
            health_safety: healthSafety.toString(),
            hs_description: hsDescription,
            po_number: poNumber,
            token: accesstoken
        }))

        dispatch(putJobDescriptionForEditJob({
            job_id: job?._id,
            description: description,
            token: accesstoken
        }))
        setShowAdditionalDetailsModal(false)
    }

    // ******* MODAL CONTENTS ******** //
    const skillsContentForEditJob = (
        <Stack>
            <div className='row justify-content-between'>
                {skills?.data?.body?.skills?.map((skill, idx) => (
                    <div className='col-6 mb-3 d-flex gap-2' key={idx}>
                        <input
                            type="checkbox"
                            name={skill?.title}
                            id={skill?._id}
                            checked={job?.summary?.j_skill.filter((skill => skill.is_active)).some(selectedSkill => selectedSkill._id === skill._id)}
                            onChange={(event) => handleCheckboxChange(event, skill)}
                        />
                        {skill?.title}
                    </div>
                ))}
            </div>
            <Button
                variant='primary'
                size='lg'
                className='mt-4'
                style={{ borderRadius: "1.3rem", color: "#2FE6DE" }}
                onClick={handleUpdatedSKills}
            >
                OK
            </Button>
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
                                type="radio"
                                name="breakPaidYes"
                                id="yes"
                                onChange={() => setBreakPaid("true")}
                                checked={breakPaid === "true"}
                            />
                            Yes
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <input
                                type="radio"
                                name="breakPaidNo"
                                id="no"
                                onChange={() => setBreakPaid("false")}
                                checked={breakPaid === "false"}
                            />
                            No
                        </div>
                    </div>
                </div>
            </div>

            {/* Health & Safety */}
            <div className="d-flex justify-content-around my-4">
                <p className='mb-0'>Health & Safety issues?</p>

                <div className='d-flex align-items-center' style={{ gap: "3.2rem" }}>
                    <div className='d-flex align-items-center gap-2'>
                        <input
                            type="radio"
                            name="HsYes"
                            id="HsYes"
                            onChange={() => setHealthSafety("true")}
                            checked={healthSafety === "true"}
                        />
                        Yes
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <input
                            type="radio"
                            name="HsNo"
                            id="HsNo"
                            onChange={() => setHealthSafety("false")}
                            checked={healthSafety === "false"}
                        />
                        No
                    </div>
                </div>
            </div>

            {/* HS Description */}
            {healthSafety === "true" && (
                <div className='px-3'>
                    <h6 className='font-weight-bold'>Health & Safety Instructions</h6>
                    <textarea
                        className='w-100 p-3'
                        rows="2"
                        style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4" }}
                        value={hsDescription}
                        onChange={(e) => setHsDescription(e.target.value)}
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
                variant='primary'
                className='mt-4'
                size='lg'
                style={{ borderRadius: "1.3rem", color: "#2FE6DE" }}
                onClick={handleUpdatedAddtitonal}
            >
                Continue
            </Button>
        </Stack>
    )

    const calendarContent = (
        <Stack>
            <p>Choose a job role to set dates and time</p>
            <Calender
                editingMode={editingMode}
                job={job}
                isBlockBookingChecked={isBlockBookingChecked}
                token={accesstoken}
            />
            <div className='d-flex gap-4 align-items-center my-4'>
                <p className='mb-0'>Post job as a block booking?</p>
                <input type="checkbox" name="" id="" checked={isBlockBookingChecked} onChange={handleBlockBookingCheckbox} />
            </div>
            <Button size='lg' className='btn-rounded' variant='primary' style={{ color: "#2FE6DE" }}>Save</Button>
        </Stack>
    )

    const chooseUniformContent = (
        <Stack>
            {!loading ? (
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
                <p className='text-center'>Loading...</p>
            )}
            <Button size='lg' className='btn-rounded mt-4' onClick={handleUpdatedUniformSubmit}>Save</Button>
        </Stack>
    )

    return (
        <Stack gap={3}>
            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Venue</p>
                <p className="text-capitalize mb-3">{job?.venue.title}</p>
            </div>

            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Industry</p>
                <Button
                    type="button"
                    className="btn-sm mb-3"
                    style={{ color: "#2FE6DE", borderRadius: "1.3rem" }}
                    variant="primary"
                >
                    {job?.industry?.title}
                </Button>
            </div>

            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Job Roles</p>
                <Button
                    type="button"
                    className="btn-sm mb-3"
                    style={{ color: "#2FE6DE", borderRadius: "1.3rem" }}
                    variant="primary"
                >
                    {job?.jobrole.title}
                </Button>
            </div>

            <div className='border-bottom'>
                <h6 className="font-weight-bold mb-3">Skills</h6>
                <div className='d-flex flex-wrap gap-1'>

                    {job?.summary?.j_skill.filter(skill => skill.is_active).map((skill) => (
                        <Button
                            key={skill?._id}
                            type="button"
                            className="btn-sm mb-1"
                            style={{ color: "#2FE6DE", borderRadius: "1.3rem" }}
                            variant="primary"
                        >
                            {skill?.title}
                        </Button>
                    ))}
                </div>
                <Button
                    size="sm"
                    variant='outline-primary'
                    className='mt-2 mb-4 py-1 rounded-lg px-2'
                    onClick={showSkills}
                >
                    Add Skills +
                </Button>
                {/* Skills Modal */}
                <CustomeModal
                    title={"Select a maximum of 5 Skills for null"}
                    show={showSkillsModal}
                    onHide={handleCloseSkillsModal}
                    content={skillsContentForEditJob}
                />
            </div>

            <div className="border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="font-weight-bold mb-0 text-black">Date & Time</p>
                    <p className="font-weight-bold mb-0 text-right c-pointer" style={{ color: "#2FE6DE" }} onClick={handleShowCalendarModal}>Edit</p>
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
                <CustomeModal
                    title="Date & Time"
                    show={showCalendarModal}
                    onHide={handleCloseCalendarModal}
                    content={calendarContent}
                />
            </div>
            {/* Additional Details */}
            <div className="border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="font-weight-bold mb-2">Additional Details</h6>
                    <p
                        className="font-weight-bold text-right c-pointer mb-2"
                        style={{ color: "#2FE6DE" }}
                        onClick={handleShowAdditionalDetailsModal}
                    >
                        Edit
                    </p>
                </div>
                <div>
                    <Stack>
                        {/* Rate & PO Number */}
                        <div className="d-flex justify-content-between gap-2">
                            <div className='col-6 mb-4'>
                                <h6 className='font-weight-bold'>Rate p/h</h6>
                                <p className='mb-0'>{job?.rate}</p>
                            </div>
                            <div className='col-6'>
                                <h6 className='font-weight-bold'>PO Number</h6>
                                <p className='mb-0'>{job.po_number}</p>
                            </div>
                        </div>

                        {/* Break */}
                        <div className="d-flex justify-content-between gap-2">
                            <div className='col-6'>
                                <h6 className='font-weight-bold'>Break (Mins)</h6>
                                <p>{job.break_time}</p>
                            </div>
                            <div className='col-6'>
                                <h6 className='font-weight-bold'>Break Paid</h6>
                                <p>{job.break_paid ? "Yes" : "No"}</p>
                            </div>
                        </div>

                        {/* Health & Safety */}
                        <div className="d-flex px-3" style={{ gap: "3.5rem" }}>
                            <p className='mb-0'>Health & Safety issues?</p>
                            <p >{job.health_safety ? "Yes" : "No"}</p>
                        </div>

                        {jobTemplate?.body?.additional?.health_safety &&
                            <div className='px-3'>
                                <h6 className='font-weight-bold'>Health & Safety Instructions</h6>
                                <p className='w-100 p-3' style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4" }}>
                                    {job?.hs_description}
                                </p>
                            </div>
                        }

                        {/* Job Description */}
                        <div className='px-3'>
                            <h6 className='font-weight-bold'>Job Description</h6>
                            <p className='w-100 p-3' style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4" }}>
                                {job?.description}
                            </p>
                        </div>
                    </Stack>
                </div >

                {/* Add Additional Details Modal */}
                <CustomeModal
                    title="Additional Details"
                    show={showAdditionalDetailsModal}
                    onHide={handleCloseAdditionalDetailsModal}
                    content={additionalDetailsContent}
                />
            </div >
            {/* Unifroms */}
            <div className="border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="font-weight-bold mb-2">Uniforms</h6>
                    <p
                        className="font-weight-bold text-right c-pointer mb-2"
                        style={{ color: "#2FE6DE" }}
                        onClick={handleShowUnifromModal}
                    >
                        Choose
                    </p>
                </div>
                <p>Upload any Additional informations</p>

                <div className='d-flex gap-2'>
                    <img src={job?.summary?.uniform?.image} alt="" className='mb-3' width={90} height={90} />
                    <p>{job?.summary?.uniform?.description}</p>
                </div>

                <CustomeModal
                    title="Uniforms"
                    show={showUniformModal}
                    onHide={handleCloseUnifromModal}
                    content={chooseUniformContent}
                />
            </div>
            {/* Uploads */}
            <div className='border-bottom'>
                <h6 className="font-weight-bold mb-3">Uploads</h6>
                <div className='mb-4'>
                    {job?.summary?.uploads?.map((upload, idx) => (
                        <div key={idx} className='d-flex justify-content-between align-items-center mb-2'>
                            <p className='mb-0'>{upload?.name}</p>
                            <i className="fa-solid fa-trash fs-6 c-pointer" style={{ color: "#2FE6DE" }}></i>
                        </div>
                    ))}
                </div>
            </div>

            <Button
                size='lg'
                className='btn-rounded'
                variant='primary'
                style={{ color: "#2FE6DE" }}
            >
                Continue
            </Button>
        </Stack >
    )
}

export default EditJob