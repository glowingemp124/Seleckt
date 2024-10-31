import { useEffect, useState } from "react";
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getSettings, putSettings, reset } from "../../../features/settings/settingsSlice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";



const Setting = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.auth);
   const { data, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.settings
   );
   useEffect(() => {
      if (isError) {
         toast.error(message);
      }
      if (isSuccess) {
         toast.success(message);
      }
      if (!user) {
         navigate("/login");
      }
      dispatch(getSettings());

      return () => reset();
   }, [user, navigate, isError, isSuccess, message, dispatch]);
   const settingsData = data?.body

   const saveSettings = async () => {
      dispatch(putSettings(formData))
   }

   const handleInput = async (e) => {
      const { name, value } = e.target;
      setFormData(() => ({
         ...settingsData,
         [name]: value,
      }));
   }
   const [formData, setFormData] = useState({
      vat: settingsData?.vat ? settingsData?.vat : 0,
      ni: settingsData?.ni ? settingsData?.ni : 0,
      fee: settingsData?.fee,
      min_break: settingsData?.min_break,
      min_hour_job: settingsData?.min_hour_job,
      max_hour_job: settingsData?.max_hour_job,
      max_hours_week: settingsData?.max_hours_week,
      max_hours_daily: settingsData?.max_hours_daily,
      student_max_hours_week: settingsData?.student_max_hours_week,
      student_max_hours_daily: settingsData?.student_max_hours_daily,
      job_reposting: settingsData?.job_reposting,
      rest_period: settingsData?.rest_period,
      timeBetweenJobsMins: settingsData?.timeBetweenJobsMins
   });
   return (
      <>
         {isLoading ? (
            <Spinner />
         ) : (
            <span>
               <Nav />

               <div className="content-body">
                  <div className="container-fluid">
                     <Row>
                        <Col xl="12">
                           <Card>
                              <Card.Header className="d-block card-header">
                                 <Card.Title><b>Settings </b></Card.Title>
                              </Card.Header>
                              <Card.Body className="card-body">
                                 <div className="d-flex align-items-center flex-wrap bg-white rounded py-3 px-md-3 px-0 mb-4">
                                    <div className="col-lg-6 mt-4">
                                       <label htmlFor="exampleInputPassword1"><b>VAT %</b></label>
                                       <input
                                          className="col-12 form-control rounded-4 mr-auto mb-md-0 mb-3"
                                          type="number"
                                          name="vat"
                                          placeholder="Vat"
                                          defaultValue={settingsData?.vat}
                                          onChange={handleInput}
                                       />
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                       <label htmlFor="exampleInputPassword2"><b>NI %</b></label>
                                       <input
                                          className="col-lg-12 form-control rounded-4 mr-auto mb-md-0 mb-3"
                                          type="number"
                                          name="ni"
                                          placeholder="NI"
                                          onChange={handleInput}
                                          defaultValue={settingsData?.ni}
                                       />
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                       <label htmlFor="exampleInputPassword2"><b>Fee %</b></label>
                                       <input
                                          className="col-lg-12 form-control rounded-4 mr-auto mb-md-0 mb-3"
                                          type="number"
                                          min="0"
                                          max="100"
                                          name="fee"
                                          placeholder="0"
                                          defaultValue={settingsData?.fee}
                                          onChange={handleInput}
                                       />
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                       <label htmlFor="exampleInputPassword2"><b>Min Break in Hours</b></label>
                                       <input
                                          className="col-lg-12 form-control rounded-4 mr-auto mb-md-0 mb-3"
                                          type="number"
                                          name="min_break"
                                          min="1"
                                          max="24"
                                          placeholder="0"
                                          defaultValue={settingsData?.min_break}
                                          onChange={handleInput}
                                       />
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                       <label htmlFor="exampleInputPassword2"><b>Job Reposting %</b></label>
                                       <input
                                          className="col-lg-12 form-control rounded-4 mr-auto mb-md-0 mb-3"
                                          type="number"
                                          name="job_reposting"
                                          min="0"
                                          max="100"
                                          placeholder="50%"
                                          defaultValue={settingsData?.job_reposting}
                                          onChange={handleInput}
                                       />
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                       <label htmlFor="exampleInputPassword2"><b>Rest Period</b></label>
                                       <input
                                          className="col-lg-12 form-control rounded-4 mr-auto mb-md-0 mb-3"
                                          type="number"
                                          name="rest_period"
                                          min="1"
                                          max="24"
                                          placeholder="0"
                                          defaultValue={settingsData?.rest_period}
                                          onChange={handleInput}
                                       />
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                       <label htmlFor="exampleInputPassword3"><b>Max Hours/Day</b></label>
                                       <input
                                          className="col-lg-12 form-control rounded-4 mr-auto mb-md-0 mb-3"
                                          type="number"
                                          name="max_hours_daily"
                                          placeholder="0"
                                          onChange={handleInput}
                                          defaultValue={settingsData?.max_hours_daily}
                                       />
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                       <label htmlFor="exampleInputPassword3"><b>Max Hours/Week</b></label>
                                       <input
                                          className="col-lg-12 form-control rounded-4 mr-auto mb-md-0 mb-3"
                                          type="number"
                                          name="max_hours_weekly"
                                          placeholder="0"
                                          readOnly={false}
                                          defaultValue={settingsData?.max_hours_weekly}
                                          onChange={handleInput}
                                       />
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                       <label htmlFor="exampleInputPassword3"><b>Student Max Hours/Day</b></label>
                                       <input
                                          className="col-lg-12 form-control rounded-4 mr-auto mb-md-0 mb-3"
                                          type="number"
                                          name="student_max_hours_daily"
                                          placeholder="0"
                                          onChange={handleInput}
                                          defaultValue={settingsData?.student_max_hours_daily}
                                       />
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                       <label htmlFor="exampleInputPassword3"><b>Student Max Hours/Week</b></label>
                                       <input
                                          className="col-lg-12 form-control rounded-4 mr-auto mb-md-0 mb-3"
                                          type="number"
                                          name="student_max_hours_week"
                                          placeholder="0"
                                          readOnly={false}
                                          defaultValue={settingsData?.student_max_hours_week}
                                          onChange={handleInput}
                                       />
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                       <label htmlFor="exampleInputPassword3"><b>Min Shift Hours</b></label>
                                       <input
                                          className="col-lg-12 form-control rounded-4 mr-auto mb-md-0 mb-3"
                                          type="number"
                                          name="min_hour_job"
                                          placeholder="0"
                                          readOnly={false}
                                          defaultValue={settingsData?.min_hour_job}
                                          onChange={handleInput}
                                       />
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                       <label htmlFor="exampleInputPassword3"><b>Max Shift Hours</b></label>
                                       <input
                                          className="col-lg-12 form-control rounded-4 mr-auto mb-md-0 mb-3"
                                          type="number"
                                          name="max_hour_job"
                                          placeholder="0"
                                          readOnly={false}
                                          defaultValue={settingsData?.max_hour_job}
                                          onChange={handleInput}
                                       />
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                       <label htmlFor="exampleInputPassword3"><b>Time Between Jobs Mins</b></label>
                                       <input
                                          className="col-lg-12 form-control rounded-4 mr-auto mb-md-0 mb-3"
                                          type="number"
                                          name="timeBetweenJobsMins"
                                          placeholder="0"
                                          readOnly={false}
                                          defaultValue={settingsData?.timeBetweenJobsMins}
                                          onChange={handleInput}
                                       />
                                    </div>
                                 <div className="col-lg-12 text-center mt-4">
                                    <button
                                       onClick={() => saveSettings()}
                                       className="btn btn-rounded btn-md mt-5 px-5 btn-success w-50"
                                    >
                                       Save
                                    </button>
                                 </div>
                                 </div>

                              </Card.Body>
                           </Card>
                        </Col>
                     </Row>{" "}
                  </div>
               </div>
            </span>
         )}
      </>
   );
};

export default Setting;
