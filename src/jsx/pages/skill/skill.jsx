import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allskills, toggleStatus, reset } from "../../../features/skills/skillsSlice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";
import { Button, Modal } from "react-bootstrap";

function Skills() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [modalWithTooltip, setModalWithTooltip] = useState(false);
  const [modalOfEditSkills, setModalOfEditSkills] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const { skills, isLoading, isError, message } = useSelector(
    (state) => state.skills
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(allskills(1));
    return () => reset();
  }, [user, navigate, isError, message, dispatch]);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pageVisted = pageNumber;
  let pageCount;
  const total_pages = skills?.total_pages
  const skillsData = skills?.body
  const getSkills = () => {
    pageCount = total_pages;
    return skillsData?.map((data, index) => {
      return (
        <tr role="row" className="odd" key={index}>
          <td className="text-success fw-bold">{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}.</td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black font-w600 fs-16 mb-0">
                  {data.title}
                </h6>
              </div>
            </div>
          </td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <div className="text-black font-w600 fs-16 mb-0">
                  {data.is_active === true ? <button onClick={() => {
                    dispatch(toggleStatus({ skill_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                  }} className='btn btn-rounded btn-success'>Active</button> : <button onClick={() => {
                    dispatch(toggleStatus({ skill_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                  }} className='btn btn-rounded btn-danger'>Inactive</button>}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black font-w600 fs-16 mb-0" onClick={() => setModalOfEditSkills(true)}>
                  {/* <i className="fa-solid fa-pen-to-square fa-2x text-success" ></i> */}
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3307 6.66665H11.9974C10.1306 6.66665 9.19713 6.66665 8.48409 7.02996C7.85689 7.34954 7.34695 7.85948 7.02737 8.48668C6.66406 9.19972 6.66406 10.1331 6.66406 12V28C6.66406 29.8668 6.66406 30.8002 7.02737 31.5133C7.34695 32.1405 7.85689 32.6504 8.48409 32.97C9.19713 33.3333 10.1306 33.3333 11.9974 33.3333H27.9974C29.8642 33.3333 30.7977 33.3333 31.5107 32.97C32.1379 32.6504 32.6478 32.1405 32.9674 31.5133C33.3307 30.8002 33.3307 29.8668 33.3307 28V20.8333M25.8307 9.16665L30.5448 13.8807M17.9353 17.0621L29.0157 5.98168C30.3174 4.67994 32.428 4.67993 33.7297 5.98168C35.0315 7.28343 35.0315 9.39398 33.7297 10.6957L22.2931 22.1323C21.0237 23.4017 20.389 24.0365 19.6661 24.5412C19.0244 24.9892 18.3323 25.3604 17.604 25.647C16.7836 25.97 15.9037 26.1475 14.1439 26.5026L13.3307 26.6667L13.4098 26.1131C13.6897 24.1541 13.8296 23.1746 14.1479 22.2602C14.4303 21.4487 14.8161 20.6771 15.2958 19.9643C15.8364 19.161 16.536 18.4613 17.9353 17.0621Z" stroke="#00B094" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </h6>
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };

  const changePage = async (data) => {
    setPageNumber(data.selected);
    dispatch(allskills(data.selected + 1))
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
                <div className="row">
                  <div className="col-xl-3 col-lg-4 mb-2">
                    <h1 className="text-black fs-35 font-w600 mb-3">
                      Skills
                    </h1>
                    <h6 className="text-black fs-16 font-w600 mb-1">
                      {userPerPage} Rows per page
                    </h6>
                    {/* <span className="fs-14">Based your preferences</span> */}
                  </div>
                  <div className="col-xl-9 col-lg-4 mb-2">
                    <button
                      className="btn btn-rounded btn-md mb-2 btn-success float-right"
                      onClick={() => setModalWithTooltip(true)}
                    >
                      + Add Skills
                    </button>
                  </div>
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
                                ID's
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
                                Title
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
                                Status
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
                          <tbody>{getSkills()}</tbody>
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
                              forcePage={pageNumber}
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


      {/* Add New Skills modal */}
      <Modal className="fade mt-5" show={modalWithTooltip}>
        <Modal.Header>
          <Modal.Title>Add Skills</Modal.Title>
          <Button
            variant=""
            className="close"
            onClick={() => setModalWithTooltip(false)}
          >
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control rounded-3 my-4"
            type="text"
            placeholder="Enter Title"
          />
          <div className="d-flex flex-column">
            <Button variant="success" className="rounded-4 my-3" >Save</Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* ======================== Edit Skills modal ========================*/}
      <Modal className="fade mt-5" show={modalOfEditSkills}>
        <Modal.Header>
          <Modal.Title><b>Edit Skills</b></Modal.Title>
          <Button
            variant=""
            className="close"
            onClick={() => setModalOfEditSkills(false)}
          >
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control rounded-3 my-4"
            type="text"
            // placeholder="Enter admin name"
            value="Light Lifting"
          />
          <div className="d-flex flex-column">
            <Button variant="success" className="rounded-4 mt-4">Save Changes</Button>
            <Button className="rounded-4 my-3" style={{ backgroundColor: '#21127b' }}>Close</Button>
          </div>
        </Modal.Body>
      </Modal>

    </>
  );
}

export default Skills;