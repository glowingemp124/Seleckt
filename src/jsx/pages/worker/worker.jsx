import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allworkers, toggleApproved, toggleStatus, reset } from "../../../features/workers/workerSlice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import dateFormat from "dateformat";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";
import { Button, Dropdown, Form } from "react-bootstrap"
// import StarRatings from './react-star-ratings';
import StartRatings from 'react-star-ratings'
import App from "./Pagination";
import ReactDatePicker from "react-datepicker";

function Worker() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [startDatePicker, setStartDatePicker] = useState(null);
  const [dueDate, setDueDate] = useState(null);


  const [rating, setRating] = useState('Rating');
  const [selectedJoiningDate, setSelectedJoiningDate] = useState('Joining Date');
  const [selectedShift, setSelectedShift] = useState('Most Complete Shifts');
  const [selectedStatus, setSelectedStatus] = useState('Active');
  const [selectedApproval, setSelectedApproval] = useState('Approved');


  const [selectedRating, setSelectedRating] = useState({
    value: 'Select Rating',
    icon: null,
  });

  const handleSelectOption = (key, event) => {
    const ariaLabel = event.target.getAttribute('aria-label');

    switch (ariaLabel) {
      case 'Shifts':
        setSelectedShift(key);
        break;
      case 'Status':
        setSelectedStatus(key);
        break;
      case 'Approval':
        setSelectedApproval(key);
        break;
      case 'Rating':
        const rating = parseInt(key, 10);
        const icon = rating ? <i className="fa-solid fa-star text-warning"></i> : null;
        setSelectedRating({ value: rating, icon });
        break;
      default:
        break;
    }
  };

  const handleSelect = (eventKey) => {
    setRating(eventKey);
  };

  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { workers, isLoading, isError, message } = useSelector((state) => state.workers);

  const getDate = (date) => {
    return dateFormat(date, "mmmm dS, yyyy, h:MM:ss TT");
  };



  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(allworkers(1));
    return () => reset();
  }, [user, navigate, isError, message, dispatch]);

  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pageVisted = pageNumber;

  let pageCount;
  const total_pages = workers?.total_pages
  const workersData = workers?.body

  console.log("page visted >>>> ", pageVisted)

  const getWorkr = () => {
    pageCount = total_pages;

    return Array.isArray(workersData) && workersData?.map((data, index) => {
      return (
        <tr role="row" className="odd" key={index}>
          <td style={{ color: '#00B094' }}><b>{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}</b></td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap gap-2">
                <div className="">
                  <Link to={"/worker/Profile/" + data._id}>
                    <div className="media-body text-nowrap btn p-0">
                      <img src={data?.image} className="rounded-circle" height={50} width={50} alt={data?.name} onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = `${process.env.REACT_APP_IMAGEBASEURL}noImg.png`;
                      }} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </td>
          <td><h6 className="text-black font-w600 fs-16 mb-0 text-capitalize">{data?.name}</h6></td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <div className="text-black font-w600 fs-16 mb-0">
                  {data.status === true ? <button onClick={() => {
                    dispatch(toggleStatus({ user_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                  }} className='btn btn-rounded btn-success'>Active</button> : <button onClick={() => {
                    dispatch(toggleStatus({ user_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                  }} className='btn btn-rounded btn-danger'>Inactive</button>}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <div className="text-black font-w600 fs-16 mb-0">
                  {(() => {
                    if (data.is_approved === "0") {
                      return (
                        <button onClick={() => {
                          dispatch(toggleApproved({ user_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                        }} className='btn btn-rounded btn-info'>Pending</button>
                      )
                    } else if (data.is_approved === "1") {
                      return (
                        <button onClick={() => {
                          dispatch(toggleApproved({ user_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                        }} className='btn btn-rounded' style={{ backgroundColor: '#005AC3', color: 'white' }}>Approved</button>
                      )
                    } else {
                      return (
                        <button onClick={() => {
                          dispatch(toggleApproved({ user_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                        }} className='btn btn-rounded btn-danger'>Declined</button>
                      )
                    }
                  })()}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="">
              <a className=" mr-3" href={"tel:" + data.mobile}>
                <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.64453 9.16667C4.64453 23.434 15.3844 35 28.6326 35C29.2303 35 29.823 34.9765 30.4097 34.9302C31.0831 34.8771 31.4198 34.8505 31.7263 34.6605C31.9801 34.5031 32.2208 34.2242 32.3481 33.94C32.5017 33.597 32.5017 33.1969 32.5017 32.3966V27.7011C32.5017 27.0282 32.5017 26.6917 32.3988 26.4033C32.308 26.1485 32.1604 25.9216 31.9691 25.7426C31.7526 25.54 31.459 25.425 30.8717 25.195L25.9087 23.2515C25.2255 22.9839 24.8839 22.8501 24.5598 22.8729C24.274 22.8929 23.9989 22.9979 23.7653 23.1763C23.5003 23.3786 23.3133 23.7142 22.9392 24.3856L21.6683 26.6667C17.5674 24.6665 14.2427 21.0815 12.3826 16.6667L14.5007 15.298C15.1242 14.8952 15.4359 14.6938 15.6237 14.4084C15.7893 14.1568 15.8869 13.8606 15.9055 13.5528C15.9265 13.2038 15.8023 12.8359 15.5539 12.1001L15.5539 12.1001L13.7492 6.75535C13.5356 6.12294 13.4288 5.80672 13.2407 5.57349C13.0744 5.36748 12.8638 5.20858 12.6272 5.11075C12.3593 5 12.0469 5 11.422 5H7.06193C6.31887 5 5.94733 5 5.62878 5.16542C5.36495 5.30243 5.10593 5.56169 4.95978 5.83505C4.78332 6.16511 4.75867 6.5277 4.70936 7.25288C4.66639 7.88476 4.64453 8.52297 4.64453 9.16667Z" stroke="#00B094" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                {/* <i className="fa fa-phone fa-2x" style={{ color: '#00B094' }} aria-hidden="true" /> */}
              </a>
              <a className="" href={"mailto:" + data.email}>
                {/* <i className="fa la-rocketchat fa-2x mx-2" style={{ color: '#20127A' }} /> */}
                <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.1705 30C30.7639 28.7499 31.0986 27.3337 31.0986 25.8333C31.0986 20.7707 27.2877 16.6667 22.5867 16.6667C17.8857 16.6667 14.0748 20.7707 14.0748 25.8333C14.0748 30.8959 17.8857 35 22.5867 35L32.6462 35C32.6462 35 31.0986 33.3333 30.1922 30.0486M29.3188 20C29.471 19.1922 29.551 18.3562 29.551 17.5C29.551 10.5964 24.3543 5 17.9438 5C11.5334 5 6.33668 10.5964 6.33668 17.5C6.33668 18.961 6.56942 20.3634 6.99715 21.6667C8.65963 26.6862 4.78906 30 4.78906 30H14.8486" stroke="#20127A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </a>
            </div>
          </td>
          <td>{getDate(data.createdAt)}</td>
          <td className="text-center">646</td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                5    <i className="fa-solid fa-star text-warning"></i>
                {/* <StartRatings
                  rating={Number(data?.rating)}
                  starRatedColor="yellow"
                  name="rating"
                  starDimension="20px"
                  starSpacing="0px"
                /> */}
              </div>
            </div>
          </td>
          <td>
            <div className="">
              <Link to={"/worker/Profile/" + data._id}>
                {/* <i className="fa fa-eye fa-2x mx-3" style={{ color: '#00B094' }} /> */}
                <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5728 23.3332C20.2823 23.3332 21.668 21.8408 21.668 19.9998C21.668 18.1589 20.2823 16.6665 18.5728 16.6665C16.8633 16.6665 15.4776 18.1589 15.4776 19.9998C15.4776 21.8408 16.8633 23.3332 18.5728 23.3332Z" fill="#00B094" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.32893 19.5004C4.49779 12.0639 10.9481 6.6665 18.5731 6.6665C26.1981 6.6665 32.6485 12.0639 34.8173 19.5005C34.9121 19.8256 34.9121 20.1742 34.8173 20.4993C32.6484 27.9358 26.1981 33.3332 18.5731 33.3332C10.9481 33.3332 4.49775 27.9357 2.32892 20.4992C2.23411 20.1741 2.23411 19.8255 2.32893 19.5004ZM12.3823 19.9998C12.3823 16.3179 15.1539 13.3332 18.5728 13.3332C21.9917 13.3332 24.7633 16.3179 24.7633 19.9998C24.7633 23.6817 21.9917 26.6665 18.5728 26.6665C15.1539 26.6665 12.3823 23.6817 12.3823 19.9998Z" fill="#00B094" />
                </svg>

              </Link>
            </div>
          </td>
        </tr>
      );
    });
  };

  const changePage = async (data) => {
    console.log(" data >>>>> ", data)
    dispatch(allworkers(data))
    setPageNumber(data);
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

                <div className="row my-5">
                  <div className="col-lg-2 mb-2">
                    <h1 className="text-black fs-35 font-w600">
                      Workers
                    </h1>
                    <h6 className="fs-16 mb-1">
                      {(pageVisted + userPerPage > total_pages ? total_pages : pageVisted + userPerPage) - pageVisted} Rows per page
                    </h6>
                  </div>
                  <div className="col-lg-10 col-sm-12 mb-2">
                    <Form className="d-flex flex-wrap gap-2 w-100 justify-content-end">
                      <div className="date-picker-container position-relative">
                        {/* <div className="placeholder-text">Pending Invoice Date</div> */}
                        <ReactDatePicker
                          selected={startDatePicker}
                          onChange={(date) => setStartDatePicker(date)}
                          style={{ maxWidth: '200px' }}
                          className="form-control rounded-4 border-dark w-100 custom-dropdown-toggle bg-transparent pl-4 py-3"
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Joining Date"
                        />
                        <i className="fa-solid fa-chevron-down fa-sm position-absolute calendar-icon-worker " style={{ color: '#00B094' }} />
                      </div>
                      <Dropdown onSelect={(key) => handleSelectOption(key, { target: { getAttribute: () => 'Shifts' } })} className="flex-grow-1" style={{ maxWidth: '260px' }}>
                        <Dropdown.Toggle id="dropdown-basic" className="py-3 rounded-4 border-dark  w-100 custom-dropdown-toggle bg-transparent text-success">
                          <span className="mx-3" style={{ color: '#626262' }}>{selectedShift}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="Most Complete Shifts">Most Complete Shifts</Dropdown.Item>
                          <Dropdown.Item eventKey="Less Complete Shifts">Less Complete Shifts</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Dropdown onSelect={(key) => handleSelectOption(key, { target: { getAttribute: () => 'Status' } })} className="flex-grow-1" style={{ maxWidth: '150px' }}>
                        <Dropdown.Toggle id="dropdown-basic" className="py-3 rounded-4 border-dark  w-100 custom-dropdown-toggle bg-transparent text-success">
                          <span className="mx-3" style={{ color: '#626262' }}>{selectedStatus}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="Active">Active</Dropdown.Item>
                          <Dropdown.Item eventKey="Inactive">Inactive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Dropdown onSelect={(key) => handleSelectOption(key, { target: { getAttribute: () => 'Approval' } })} className="flex-grow-1" style={{ maxWidth: '150px' }}>
                        <Dropdown.Toggle id="dropdown-basic" className="py-3 rounded-4 border-dark  w-100 custom-dropdown-toggle bg-transparent text-success">
                          <span className="mx-3" style={{ color: '#626262' }}>{selectedApproval}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="Approved">Approved</Dropdown.Item>
                          <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                          <Dropdown.Item eventKey="Declined">Declined</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Dropdown onSelect={handleSelectOption} className="flex-grow-1" style={{ maxWidth: '200px' }}>
                        <Dropdown.Toggle id="dropdown-basic" className="py-3 rounded-4 border-dark w-100 custom-dropdown-toggle bg-transparent text-success">
                          <span style={{ color: '#626262' }}>
                            {selectedRating.value}
                          </span>
                          <span className="text-black mx-2">
                            {selectedRating.icon}
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="Select Rating" aria-label="Rating" onClick={() => setSelectedRating({ value: 'Select Rating', icon: null })} disabled>
                            Select Rating
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="5" aria-label="Rating">
                            5 <i className="fa-solid fa-star text-warning"></i>
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="4" aria-label="Rating">
                            4 <i className="fa-solid fa-star text-warning"></i>
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="3" aria-label="Rating">
                            3 <i className="fa-solid fa-star text-warning"></i>
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="2" aria-label="Rating">
                            2 <i className="fa-solid fa-star text-warning"></i>
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="1" aria-label="Rating">
                            1 <i className="fa-solid fa-star text-warning"></i>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Link to="/worker-all-jobs">
                        <Button type="button" className="btn btn-success btn-lg rounded-5 mb-3 mt-md-1">See All Jobs</Button>
                      </Link>
                    </Form>
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
                          <thead className="bg-primary">
                            <tr role="row">
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="ID: activate to sort column ascending"
                                style={{ width: 150, backgroundColor: '#00B094', color: 'white' }}
                              >
                                ID
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Company: activate to sort column ascending"
                                style={{ width: 150, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Image
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
                                Name
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Contact: activate to sort column ascending"
                                style={{ width: 116, backgroundColor: '#00B094', color: 'white', }}
                              >
                                Status
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
                                Verification
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
                                Contact
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
                                Date of Joining
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
                                Completed Shifts
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
                                Ratings
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
                          <tbody>{getWorkr()}</tbody>
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

                        {/* <App 
                        totalPages={pageCount}
                        currentPage={pageVisted + 1}
                        onPageChange={changePage}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      )}
    </>
  );
}

export default Worker;