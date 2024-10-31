import React, { useState } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import DatePicker, { DateObject, getAllDatesInRange } from "react-multi-date-picker"
import size from "react-element-popper/animations/size"
import Btn from "react-multi-date-picker/components/button"
import CustomeModal from './customeModal/CustomeModal';
import ToggleBtn from './ToggleButton';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import moment from 'moment-timezone';
import { getJobTemplate, postAddDateAndTime } from "../../features/templateJob/employerTemplateJobSlice"
import { useDispatch, useSelector } from 'react-redux';
import { TimePicker } from 'react-ios-time-picker';
import { putJobDateTimeForEditJob } from '../../features/jobs/jobslice';



const Calender = ({ templateId, jobroleId, isBlockBookingChecked, token, editingMode, job }) => {

    const dispatch = useDispatch()

    const { jobTemplate } = useSelector((state) => state?.jobTemplate)

    const [dates, setDates] = useState([])
    const [selectedDates, setSelectedDates] = useState([])
    const [allDates, setAllDates] = useState([])
    const [isChecked, setIsChecked] = useState(false);
    const [show, setShow] = useState(false)
    const [selectedQty, setSelectedQty] = useState(null)
    const [qtyPerRow, setQtyPerRow] = useState({});
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [showEditTimeModal, setShowEditTimeModal] = useState(false)
    const [isToggleChecked, setIsToggleChecked] = useState(false);
    const [breakTime, setBreakTime] = useState(0);
    const [isBreakPaid, setIsBreakPaid] = useState(false);
    const [startTime, setStartTime] = useState('09:00');
    const [endTime, setEndTime] = useState('17:00');

    const handleBreakTimeChange = (e) => setBreakTime(parseInt(e.target.value));

    const handleIsBreakPaidChange = (e) => setIsBreakPaid(e.target.value);

    const handleToggleChange = () => setIsToggleChecked(!isToggleChecked);




    const handleDateSelectCheckboxChange = (event, date) => {
        setIsCheckboxChecked(!isCheckboxChecked);
        const isChecked = event.target.checked;
        const updatedSelectedDates = selectedDates.slice();

        if (isChecked) {
            updatedSelectedDates.push(date);
        } else {
            const index = updatedSelectedDates.findIndex(d => d.id === date._id);
            if (index > -1) {
                updatedSelectedDates.splice(index, 1);
            }
        }
        setSelectedDates(updatedSelectedDates);
    };

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    const handleShowEditTimeModal = () => setShowEditTimeModal(true)
    const handleCloseEditTimeModal = () => setShowEditTimeModal(false)


    const handleShow = (date) => {
        setShow(true)
        if (allDates?.length > 0) {
            setSelectedQty(date)
        } else {
            setSelectedQty(date)
        }
    }

    const handleClose = () => {
        setShow(false)
        setSelectedQty(null)
    }

    const handleQtyChange = (rowId, newQty) => {
        setQtyPerRow({
            ...qtyPerRow,
            [rowId]: newQty
        });
    };

    const handleStartTimeChange = (time) => setStartTime(time);
    const handleEndTimeChange = (time) => setEndTime(time);

    const handleSubmit = async () => {
        const data = {
            template_id: templateId,
            jobrole_id: jobroleId,
            is_range: isChecked ? 'true' : 'false',
            token: token,
            apply_to_all: isCheckboxChecked && dates.length > 1 ? 'true' : 'false',
            is_block_booking: isBlockBookingChecked ? 'true' : 'false',
            dates: dates.map(date => {
                const is_break = isToggleChecked;
                const break_time = breakTime || 0;
                const qty = qtyPerRow[date] || 0;
                const is_break_paid = isBreakPaid === "yes" ? true : false;
                let is_overnight = false;
                // Check if end time is earlier than start time and not on the same day
                if (endMoment.isAfter(startMoment, 'day')) {
                    is_overnight = false;
                }

                return {
                    start_date: `${date.format("DD/MM/YYYY")} ${startTime}`,
                    end_date: `${date.format("DD/MM/YYYY")} ${endTime}`,
                    qty: qty,
                    is_overnight: is_overnight,
                    is_break: is_break,
                    ...(is_break && {
                        break_time: break_time.toString(),
                        is_break_paid: is_break_paid
                    })
                };
            })
        };
        // Send data to API
        await dispatch(postAddDateAndTime(data));
        await dispatch(getJobTemplate(token))
        handleCloseEditTimeModal()
    };


    const handleSubmitForEditJob = async () => {
        const data = {
            job_id: job?._id,
            is_range: isChecked ? 'true' : 'false',
            token: token,
            apply_to_all: isCheckboxChecked && dates.length > 1 ? 'true' : 'false',
            is_block_booking: isBlockBookingChecked ? 'true' : 'false',
            dates: dates.map(date => {
                const is_break = isToggleChecked;
                const break_time = breakTime || 0;
                const qty = qtyPerRow[date] || 0;
                const is_break_paid = isBreakPaid === "yes" ? true : false;
                let is_overnight = false;
                // Check if end time is earlier than start time and not on the same day
                if (endMoment.isAfter(startMoment, 'day')) {
                    is_overnight = false;
                }
                return {
                    hired: "0",
                    start_date: `${date.format("DD/MM/YYYY")} ${startTime}`,
                    end_date: `${date.format("DD/MM/YYYY")} ${endTime}`,
                    qty: qty === undefined ? 0 : qty,
                    is_overnight: is_overnight,
                    is_break: is_break,
                    ...(is_break && {
                        break_time: break_time.toString(),
                        is_break_paid: is_break_paid
                    })
                };
            })
        };
        // Send data to API
        await dispatch(putJobDateTimeForEditJob(data));
        handleCloseEditTimeModal()
    };

    // Parse the times into Moment objects
    const startMoment = moment(startTime, 'hh:mm a');
    const endMoment = moment(endTime, 'hh:mm a');

    // Calculate the difference in hours and minutes
    const duration = moment.duration(endMoment.diff(startMoment));
    const hours = duration.hours();
    const minutes = duration.minutes();

    const formattedOutput = `${hours} hours, ${minutes} minutes`;


    const qtyContent = (
        <Stack>
            <div className='text-center' style={{ width: "40%" }}>
                <input
                    type="number"
                    value={allDates?.length > 0 ? qtyPerRow[selectedQty?.format("YYYY-MM-DD")] : jobTemplate?.body?.datetime?.datetime?.map(q => q.qty)}
                    onChange={(e) => handleQtyChange(selectedQty?.format("YYYY-MM-DD"), e.target.value)}
                    className='w-100 p-3 border-0 text-center w-25'
                    style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4" }}
                />
            </div>
            <div className='text-end'>
                <Button variant='primary' size='lg' className='mt-4 rounded-xl w-25' onClick={handleClose}>Ok</Button>
            </div>
        </Stack>
    )

    const qtyContentForEditJob = (
        <Stack>
            <div className='text-center' style={{ width: "40%" }}>
                <input
                    type="number"
                    value={allDates?.length > 0 ? qtyPerRow[selectedQty] : job?.summary?.datetime?.datetime?.map(q => q.qty)}
                    onChange={(e) => handleQtyChange(selectedQty, e.target.value)}
                    className='w-100 p-3 border-0 text-center w-25'
                    style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4" }}
                />
            </div>
            <div className='text-end'>
                <Button variant='primary' size='lg' className='mt-4 rounded-xl w-25' onClick={handleClose}>Ok</Button>
            </div>
        </Stack>
    )

    const editTimeModal = (
        <Stack>
            <div>
                <p className='mb-0'>Selected Start and End dates</p>
                <div className='d-flex gap-1'>
                    {selectedDates.map((date, index) => (
                        <p className='mb-0 text-black' key={index}>
                            {date}
                            {index !== dates.length - 1 && ', '} {/* Add comma and space for all dates except the last one */}
                        </p>
                    ))}
                </div>
                <p className='mb-0'>Set start and end time for selected dates</p>
            </div>
            <div className='d-flex justify-content-between align-items-center my-3'>
                <div className='row'>
                    <div className="col-6 d-flex gap-2 align-items-center w-25">
                        <p className='mb-0'><i>Start</i></p>
                        <div>
                            <TimePicker onChange={handleStartTimeChange} value={startTime} popupClassName="start_time_input" />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-6 d-flex gap-2 align-items-center ml-3">
                        <p className='mb-0'><i>End</i></p>
                        <div>
                            <TimePicker onChange={handleEndTimeChange} value={endTime} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <p>{formattedOutput}</p>
            </div>
            <div className='d-flex gap-4 align-items-center'>
                <p className='mb-0'>Break Allowed</p>
                <ToggleBtn label={''} isChecked={isToggleChecked} handleChange={handleToggleChange} />
            </div>

            {isToggleChecked && (
                <div className="d-flex justify-content-around align-items-center mt-4">
                    <div>
                        <h6>Break (Mins)</h6>
                        <Form.Select className='rounded-xl' onChange={handleBreakTimeChange}>
                            <option>0</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                            <option value="60">60</option>
                            <option value="90">90</option>
                            <option value="120">120</option>
                        </Form.Select>
                    </div>
                    <div>
                        <h6>Break Paid</h6>
                        <Form.Select className='rounded-xl' value={isBreakPaid} onChange={handleIsBreakPaidChange}>
                            <option>Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </Form.Select>
                    </div>
                </div>
            )}
            <div className='d-flex align-items-center gap-4 justify-content-end mt-4'>
                <p className='mb-0 c-pointer text-black font-weight-bold' onClick={handleCloseEditTimeModal}>Cancel</p>
                <p className='mb-0 c-pointer text-black font-weight-bold' onClick={editingMode ? handleSubmitForEditJob : handleSubmit}>Ok</p>
            </div>
        </Stack>
    )

    return (
        <div>

            <div className='d-flex gap-4 mb-4 align-items-center'>
                <p className='mb-0'>Individual Dates</p>
                <ToggleBtn label="Date Range" isChecked={isChecked} handleChange={handleChange} />
            </div>
            <p className='font-weight-bold'>Select first and last date for consecutive date</p>
            <div>
                <DatePicker
                    range={isChecked ? true : false}
                    calendarPosition="bottom-left"
                    fixMainPosition
                    value={dates}
                    multiple={isChecked ? false : true}
                    render={<Btn />}
                    animations={[size()]}
                    minDate={new DateObject().toFirstOfMonth()}
                    maxDate={new DateObject().toLastOfMonth()}
                    onChange={dateObjects => {
                        setDates(dateObjects)
                        if (isChecked) {
                            setAllDates(getAllDatesInRange(dateObjects))
                        } else {
                            setAllDates(dateObjects)
                        }
                    }}
                />
            </div>
            <div>
                <div className='d-flex justify-content-between align-items-center my-3'>
                    <h6 className='mb-0 font-weight-bold'>Shifts</h6>
                    <Button
                        size='lg'
                        disabled={selectedDates?.length === 0} className={`p-0 c-pointer bg-transparent ${selectedDates?.length === 0 && "text-black"} border-0 font-weight-bold`}
                        style={{ color: `${selectedDates?.length > 0 && '#2FE6DE'}`, fontSize: "15px !important" }}
                        onClick={handleShowEditTimeModal}
                    >
                        Edit Times
                    </Button>
                </div>
                <CustomeModal
                    title="Edit Times"
                    show={showEditTimeModal}
                    onHide={handleCloseEditTimeModal}
                    content={editTimeModal}
                />
                <div className='w-100 px-2 mb-2'>
                    <div className='text-black d-flex justify-content-between align-items-center font-weight-bold'>
                        <p className='mb-0'><input type="checkbox" name="" id="" /></p>
                        <p className='mb-0'>Start</p>
                        <p className='mb-0'>End</p>
                        <div className="d-flex align-items-center gap-2">
                            <p className='mb-0'>Qty</p>
                            <i className="fa-solid fa-pen-to-square d-flex align-items-end c-pointer" style={{ color: "#2FE6DE" }}></i>
                        </div>
                    </div>
                </div>

                {editingMode ? (
                    <div>
                        {dates?.length > 0 ? (
                            <div>
                                {
                                    allDates?.map((date, index) => (
                                        <div className="mb-2 d-flex justify-content-between align-items-center py-2 pl-2 pr-3 rounded-xl" style={{ backgroundColor: "#e7ecef" }} key={index}>
                                            <input type="checkbox" name="" id={date} onChange={(e) => handleDateSelectCheckboxChange(e, date.format("DD/MM/YYYY"))} />
                                            <p className='mb-0 fs-12'>{date.format("DD/MM/YYYY")} {startTime}</p>
                                            <p className='mb-0 fs-12'>{date.format("DD/MM/YYYY")} {endTime}</p>
                                            <div className='d-flex align-items-center gap-2'>
                                                <p className='mb-0 fs-12'>{qtyPerRow[date.format("YYYY-MM-DD")] || 0}</p>
                                                <i className="fa-solid fa-pen-to-square d-flex align-items-end c-pointer" style={{ color: "#2FE6DE" }} onClick={() => handleShow(date)}></i>
                                            </div>
                                        </div>
                                    ))
                                }
                                <CustomeModal
                                    title=""
                                    show={show}
                                    onHide={handleClose}
                                    content={qtyContentForEditJob}
                                />
                            </div>
                        ) : (
                            <div>
                                {job?.summary?.datetime?.datetime.map((date, index) => (
                                    <div className="mb-2 d-flex justify-content-between align-items-center py-2 pl-2 pr-3 rounded-xl" style={{ backgroundColor: "#e7ecef" }} key={index}>
                                        <input type="checkbox" name="" id={date?.start_date} onChange={(e) => handleDateSelectCheckboxChange(e, date.start_date)} />
                                        <p className='mb-0 fs-12'>{date.start_date} {date.start_time}</p>
                                        <p className='mb-0 fs-12'>{date.end_date} {date.end_time}</p>
                                        <div className='d-flex align-items-center gap-2'>
                                            <p className='mb-0 fs-12'>{date.qty}</p>
                                            <i className="fa-solid fa-pen-to-square d-flex align-items-end c-pointer" style={{ color: "#2FE6DE" }} onClick={() => handleShow(date.start_date)}></i>
                                        </div>
                                    </div>
                                ))}
                                <CustomeModal
                                    title=""
                                    show={show}
                                    onHide={handleClose}
                                    content={qtyContentForEditJob}
                                />
                            </div>)
                        }
                    </div>
                ) : (
                    <div>
                        {dates?.length > 0 ? (
                            <div>
                                {
                                    allDates?.map((date, index) => (
                                        <div className="mb-2 d-flex justify-content-between align-items-center py-2 pl-2 pr-3 rounded-xl" style={{ backgroundColor: "#e7ecef" }} key={index}>
                                            <input type="checkbox" name="" id={date} onChange={(e) => handleDateSelectCheckboxChange(e, date.format("DD/MM/YYYY"))} />
                                            <p className='mb-0 fs-12'>{date.format("DD/MM/YYYY")} {startTime}</p>
                                            <p className='mb-0 fs-12'>{date.format("DD/MM/YYYY")} {endTime}</p>
                                            <div className='d-flex align-items-center gap-2'>
                                                <p className='mb-0 fs-12'>{qtyPerRow[date.format("YYYY-MM-DD")] || 1}</p>
                                                <i className="fa-solid fa-pen-to-square d-flex align-items-end c-pointer" style={{ color: "#2FE6DE" }} onClick={() => handleShow(date)}></i>
                                            </div>
                                        </div>
                                    ))
                                }
                                <CustomeModal
                                    title=""
                                    show={show}
                                    onHide={handleClose}
                                    content={qtyContent}
                                />
                            </div>
                        ) : (
                            <div>
                                {jobTemplate?.body.datetime.datetime.map((date, index) => (
                                    <div className="mb-2 d-flex justify-content-between align-items-center py-2 pl-2 pr-3 rounded-xl" style={{ backgroundColor: "#e7ecef" }} key={index}>
                                        <input type="checkbox" name="" id={date?.start_date} onChange={(e) => handleDateSelectCheckboxChange(e, date.start_date)} />
                                        <p className='mb-0 fs-12'>{date.start_date} {date.start_time}</p>
                                        <p className='mb-0 fs-12'>{date.end_date} {date.end_time}</p>
                                        <div className='d-flex align-items-center gap-2'>
                                            <p className='mb-0 fs-12'>{date.qty}</p>
                                            <i className="fa-solid fa-pen-to-square d-flex align-items-end c-pointer" style={{ color: "#2FE6DE" }} onClick={() => handleShow(date.start_date)}></i>
                                        </div>
                                    </div>
                                ))}
                                <CustomeModal
                                    title=""
                                    show={show}
                                    onHide={handleClose}
                                    content={qtyContent}
                                />
                            </div>)
                        }
                    </div>
                )
                }
                <p className="mb-0 text-end c-pointer" style={{ color: "#2FE6DE" }}>Show less</p>
            </div>
        </div>
    )
}

export default Calender
