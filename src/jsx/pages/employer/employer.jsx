import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allemployers, toggleStatus, toggleApproved, toggleAdminInput, reset } from "../../../features/employers/employerSlice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import dateFormat from "dateformat";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";
import { Button, Dropdown, Form, } from "react-bootstrap";

function Employer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [selectedTier, setSelectedTier] = useState('Select Tier');
  const [selectedStatus, setSelectedStatus] = useState('Active');
  const [selectedApproval, setSelectedApproval] = useState('Approved');

  const [rating, setRating] = useState('Rating');
  const [selectedShift, setSelectedShift] = useState('Select Tier');
  // const [selectedStatus, setSelectedStatus] = useState('Active');
  // const [selectedApproval, setSelectedApproval] = useState('Approved');

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

  // const handleSelect = (eventKey) => {
  //   setRating(eventKey);
  // };

  // const { id } = useParams();
  // const { user } = useSelector((state) => state.auth);
  // const { workers, isLoading, isError, message } = useSelector((state) => state.workers);

  // const getDate = (date) => {
  //   return dateFormat(date, "mmmm dS, yyyy, h:MM:ss TT");
  // };



  const handleSelectTier = (eventKey) => {
    setSelectedTier(eventKey);
  };

  const handleSelectStatus = (eventKey) => {
    setSelectedStatus(eventKey);
  };

  const handleSelectApproval = (eventKey) => {
    setSelectedApproval(eventKey);
  };

  const { employers, isLoading, isError, message } = useSelector(
    (state) => state.employers
  );

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
    dispatch(allemployers(1));
    return () => reset();
  }, [user, navigate, isError, message, dispatch]);

  // State for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pageVisted = pageNumber;
  let pageCount;
  const total_pages = employers?.total_pages
  const employersData = employers?.body


  const getEmployer = () => {
    pageCount = total_pages;
    return Array.isArray(employersData) && employersData?.map((data, index) => {
      return (
        <tr role="row" className="odd" key={index}>
          <td className="text-success">{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}.</td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black font-w600 fs-16 mb-0">
                  <img src={data.image} height={50} width={50} alt="" onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = `${process.env.REACT_APP_IMAGEBASEURL}noImg.png`;
                  }} />
                </h6>
              </div>
            </div>
          </td>

          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black font-w600 fs-16 mb-0">
                  {data.name}
                </h6>
              </div>
            </div>
          </td>


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
                    } else {
                      return (
                        <button onClick={() => {
                          dispatch(toggleApproved({ user_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                        }} className='btn btn-rounded btn-success-two'>Approved</button>
                      )
                    }
                  })()}
                </div>
              </div>
            </div>
          </td>

          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <div className="text-black font-w600 fs-16 mb-0">
                  {(() => {
                    if (data.admin_input === false) {
                      return (
                        <button onClick={() => {
                          dispatch(toggleAdminInput({ user_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                        }} className='btn btn-rounded' style={{ backgroundColor: '#20127A', color: 'white' }}>Disabled</button>
                      )
                    } else if (data.admin_input === true) {
                      return (
                        <button onClick={() => {
                          dispatch(toggleAdminInput({ user_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                        }} className='btn btn-rounded' style={{ backgroundColor: '#2E294E', color: 'white' }}>Enabled</button>
                      )

                    }
                    else {
                      return (
                        <button onClick={() => {
                          dispatch(toggleAdminInput({ user_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                        }} className='btn btn-rounded' style={{ backgroundColor: '#68078a', color: 'white' }}>Pending</button>
                      )

                    }

                  })()}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <div className="text-black font-w600 fs-16 mb-0">
                  {data.fee ? data.fee : 0}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="d-flex justify-content-center">
              <a className=" mr-3" href={"tel:" + data.mobile}>
                <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.64453 9.16667C4.64453 23.434 15.3844 35 28.6326 35C29.2303 35 29.823 34.9765 30.4097 34.9302C31.0831 34.8771 31.4198 34.8505 31.7263 34.6605C31.9801 34.5031 32.2208 34.2242 32.3481 33.94C32.5017 33.597 32.5017 33.1969 32.5017 32.3966V27.7011C32.5017 27.0282 32.5017 26.6917 32.3988 26.4033C32.308 26.1485 32.1604 25.9216 31.9691 25.7426C31.7526 25.54 31.459 25.425 30.8717 25.195L25.9087 23.2515C25.2255 22.9839 24.8839 22.8501 24.5598 22.8729C24.274 22.8929 23.9989 22.9979 23.7653 23.1763C23.5003 23.3786 23.3133 23.7142 22.9392 24.3856L21.6683 26.6667C17.5674 24.6665 14.2427 21.0815 12.3826 16.6667L14.5007 15.298C15.1242 14.8952 15.4359 14.6938 15.6237 14.4084C15.7893 14.1568 15.8869 13.8606 15.9055 13.5528C15.9265 13.2038 15.8023 12.8359 15.5539 12.1001L15.5539 12.1001L13.7492 6.75535C13.5356 6.12294 13.4288 5.80672 13.2407 5.57349C13.0744 5.36748 12.8638 5.20858 12.6272 5.11075C12.3593 5 12.0469 5 11.422 5H7.06193C6.31887 5 5.94733 5 5.62878 5.16542C5.36495 5.30243 5.10593 5.56169 4.95978 5.83505C4.78332 6.16511 4.75867 6.5277 4.70936 7.25288C4.66639 7.88476 4.64453 8.52297 4.64453 9.16667Z" stroke="#00B094" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </a>
              <a className="" href={"mailto:" + data.email}>
                <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.1705 30C30.7639 28.7499 31.0986 27.3337 31.0986 25.8333C31.0986 20.7707 27.2877 16.6667 22.5867 16.6667C17.8857 16.6667 14.0748 20.7707 14.0748 25.8333C14.0748 30.8959 17.8857 35 22.5867 35L32.6462 35C32.6462 35 31.0986 33.3333 30.1922 30.0486M29.3188 20C29.471 19.1922 29.551 18.3562 29.551 17.5C29.551 10.5964 24.3543 5 17.9438 5C11.5334 5 6.33668 10.5964 6.33668 17.5C6.33668 18.961 6.56942 20.3634 6.99715 21.6667C8.65963 26.6862 4.78906 30 4.78906 30H14.8486" stroke="#20127A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* <i className="fa-regular fa-comments fa-lg mx-2" style={{ color: '#20127A' }} /> */}
              </a>
            </div>
          </td>

          <td>{getDate(data.createdAt)}</td>
          <td className="text-success">Tier 1</td>


          {/* <td>FREELANCE</td>
          <td>Intern UI Designer</td> */}
          <td>
            <div className="text-center">
              <Link to={`/employer/Profile/${data?._id}`}>
                <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5728 23.3332C20.2823 23.3332 21.668 21.8408 21.668 19.9998C21.668 18.1589 20.2823 16.6665 18.5728 16.6665C16.8633 16.6665 15.4776 18.1589 15.4776 19.9998C15.4776 21.8408 16.8633 23.3332 18.5728 23.3332Z" fill="#00B094" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.32893 19.5004C4.49779 12.0639 10.9481 6.6665 18.5731 6.6665C26.1981 6.6665 32.6485 12.0639 34.8173 19.5005C34.9121 19.8256 34.9121 20.1742 34.8173 20.4993C32.6484 27.9358 26.1981 33.3332 18.5731 33.3332C10.9481 33.3332 4.49775 27.9357 2.32892 20.4992C2.23411 20.1741 2.23411 19.8255 2.32893 19.5004ZM12.3823 19.9998C12.3823 16.3179 15.1539 13.3332 18.5728 13.3332C21.9917 13.3332 24.7633 16.3179 24.7633 19.9998C24.7633 23.6817 21.9917 26.6665 18.5728 26.6665C15.1539 26.6665 12.3823 23.6817 12.3823 19.9998Z" fill="#00B094" />
                </svg>

                {/* <i className="fa fa-eye fa-2x mx-3" style={{ color: '#00B094' }} /> */}
              </Link>
            </div>
          </td>
        </tr>
      );
    });
  };

  const changePage = async (data) => {
    console.log('change page :: ', data);
    dispatch(allemployers(data.selected + 1))
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
                <div className="d-flex flex-wrap mb-4 row">
                  <div className="row">
                    <div className="col-lg-4 mb-2">
                      <h1 className="text-black fs-35 font-w600">Employer</h1>
                      <h6 className="fs-16 mb-1">
                        {(pageVisted + userPerPage > total_pages ? total_pages : pageVisted + userPerPage) - pageVisted} Rows per page
                      </h6>
                    </div>
                    <div className="col-lg-8 col-sm-12 mb-2 justify-content-end">
                      <Form className="d-flex flex-wrap gap-2 w-100 justify-content-end">
                        <Dropdown onSelect={(key) => handleSelectOption(key, { target: { getAttribute: () => 'Shifts' } })} className="flex-grow-1" style={{ maxWidth: '180px' }}>
                          <Dropdown.Toggle id="dropdown-basic" className="py-3 rounded-4 border-dark  w-100 custom-dropdown-toggle bg-transparent text-success">
                            <span className="text-black mx-3">{selectedShift}</span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {/* <Dropdown.Item eventKey="Select Tier">Select Tier</Dropdown.Item> */}
                            <Dropdown.Item eventKey="Tier 1" className="text-success">Tier 1</Dropdown.Item>
                            <Dropdown.Item eventKey="Tier 2" className="text-primary">Tier 2</Dropdown.Item>
                            <Dropdown.Item eventKey="Tier 3" style={{ color: '#03269e' }}>Tier 3</Dropdown.Item>
                            <Dropdown.Item eventKey="Tier 4" className="text-black">Tier 4</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown onSelect={(key) => handleSelectOption(key, { target: { getAttribute: () => 'Status' } })} className="flex-grow-1" style={{ maxWidth: '150px' }}>
                          <Dropdown.Toggle id="dropdown-basic" className="py-3 rounded-4 border-dark  w-100 custom-dropdown-toggle bg-transparent text-success">
                            <span className="text-black mx-3">{selectedStatus}</span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item eventKey="Active">Active</Dropdown.Item>
                            <Dropdown.Item eventKey="Inactive">Inactive</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown onSelect={(key) => handleSelectOption(key, { target: { getAttribute: () => 'Approval' } })} className="flex-grow-1" style={{ maxWidth: '170px' }}>
                          <Dropdown.Toggle id="dropdown-basic" className="py-3 rounded-4 border-dark  w-100 custom-dropdown-toggle bg-transparent text-success">
                            <span className="text-black mx-3">{selectedApproval}</span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item eventKey="Approved">Approved</Dropdown.Item>
                            <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown> 
                        <Link to="/employer-all-jobs">
                          <Button type="button" className="btn btn-success rounded-5">See All Jobs</Button>
                        </Link>
                      </Form>

                    </div>
                  </div>
                  {/* <div className="col-xl-9 col-lg-8 d-flex flex-wrap align-items-end">
                    <div className="mr-auto">
                      <Link
                        to="#"
                        className="btn btn-primary btn-rounded mr-2 mb-2"
                      >
                        ALL
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-primary btn-rounded mr-2 light mb-2"
                      >
                        Pending
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-primary btn-rounded mr-2 light mb-2"
                      >
                        On-Hold
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-primary btn-rounded mr-2 light mb-2"
                      >
                        Candidate
                      </Link>
                    </div>
                    <Dropdown className="dropdown custom-dropdown mb-0 mr-4 mt-3 mt-sm-0 mb-2">
                      <Dropdown.Toggle
                        variant=""
                        className="btn border border-primary text-black btn-rounded"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          className="mr-2 scale5"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2932 16.293L8.00016 18.5859V3C8.00016 2.73478 7.89481 2.48043 7.70727 2.29289C7.51973 2.10536 7.26538 2 7.00016 2C6.73495 2 6.48059 2.10536 6.29306 2.29289C6.10552 2.48043 6.00016 2.73478 6.00016 3V18.5859L3.70716 16.293C3.51856 16.1108 3.26596 16.01 3.00376 16.0123C2.74156 16.0146 2.49075 16.1198 2.30534 16.3052C2.11994 16.4906 2.01477 16.7414 2.01249 17.0036C2.01021 17.2658 2.111 17.5184 2.29316 17.707L6.29316 21.707C6.48086 21.8942 6.73513 21.9993 7.00021 21.9993C7.2653 21.9993 7.51956 21.8942 7.70726 21.707L11.7073 17.707C11.8901 17.5185 11.9914 17.2657 11.9894 17.0031C11.9874 16.7405 11.8822 16.4893 11.6965 16.3036C11.5109 16.118 11.2596 16.0128 10.997 16.0108C10.7345 16.0088 10.4816 16.1102 10.2932 16.293Z"
                            fill="#40189D"
                          />
                          <path
                            d="M11.0002 6H21.0002C21.2655 6 21.5198 5.89464 21.7074 5.7071C21.8949 5.51957 22.0002 5.26521 22.0002 5C22.0002 4.73478 21.8949 4.48043 21.7074 4.29289C21.5198 4.10536 21.2655 4 21.0002 4H11.0002C10.735 4 10.4807 4.10536 10.2931 4.29289C10.1056 4.48043 10.0002 4.73478 10.0002 5C10.0002 5.26521 10.1056 5.51957 10.2931 5.7071C10.4807 5.89464 10.735 6 11.0002 6Z"
                            fill="#40189D"
                          />
                          <path
                            d="M21.0002 8H11.0002C10.735 8 10.4807 8.10536 10.2931 8.29289C10.1056 8.48043 10.0002 8.73478 10.0002 9C10.0002 9.26521 10.1056 9.51957 10.2931 9.7071C10.4807 9.89464 10.735 10 11.0002 10H21.0002C21.2655 10 21.5198 9.89464 21.7074 9.7071C21.8949 9.51957 22.0002 9.26521 22.0002 9C22.0002 8.73478 21.8949 8.48043 21.7074 8.29289C21.5198 8.10536 21.2655 8 21.0002 8Z"
                            fill="#40189D"
                          />
                          <path
                            d="M18.0002 12H11.0002C10.735 12 10.4807 12.1054 10.2931 12.2929C10.1056 12.4804 10.0002 12.7348 10.0002 13C10.0002 13.2652 10.1056 13.5196 10.2931 13.7071C10.4807 13.8947 10.735 14 11.0002 14H18.0002C18.2655 14 18.5198 13.8947 18.7074 13.7071C18.8949 13.5196 19.0002 13.2652 19.0002 13C19.0002 12.7348 18.8949 12.4804 18.7074 12.2929C18.5198 12.1054 18.2655 12 18.0002 12Z"
                            fill="#40189D"
                          />
                        </svg>
                        Newest
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                        <Dropdown.Item
                          className="dropdown-item"
                          to="/application"
                        >
                          Details
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropdown-item text-danger"
                          to="/application"
                        >
                          Cancel
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
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
                                style={{ width: 116, backgroundColor: '#00B094', color: 'white' }}
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
                                aria-label="Status: activate to sort column ascending"
                                style={{ width: 100, backgroundColor: '#00B094', color: 'white' }}
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
                                style={{ width: 100, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Approval
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Contact: activate to sort column ascending"
                                style={{ width: 160, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Admin Inputs
                              </th>


                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Contact: activate to sort column ascending"
                                style={{ width: 66, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Fee
                              </th>

                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Date Applied: activate to sort column ascending"
                                style={{ width: 64, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Contact
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
                                Date of Joining
                              </th>


                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Tier: activate to sort column ascending"
                                style={{ width: 116, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Tier
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
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>{getEmployer()}</tbody>
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
        </span >
      )
      }
    </>
  );
}

export default Employer;
