import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { alljobroles, toggleStatus, createJobrole, updateJobrole, reset } from "../../../features/jobroles/jobroleSlice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";

function Jobroles() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [_id, setId] = useState(false);
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState('');
  const [price, setPrice] = useState('');
  const { user } = useSelector((state) => state.auth);
  const { jobroles, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.jobroles
  );


  const handleClose = () => {
    setShow(false);
    setTitle();
    setIcon();
    setPrice();
    setId(false);
  };
  const handleShow = (data) => {
    if (data !== undefined && data != null) {
      setTitle(data?.title);
      setIcon(data?.icons);
      setPrice(data?.price);
      setId(data?._id)
    }
    setShow(true)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (_id !== false && _id !== undefined) {
      dispatch(updateJobrole({ title, icon, price, _id, pageno: pageNumber === 0 ? 1 : pageNumber }));
    }
    else {
      dispatch(createJobrole({ title, icon, price, pageno: pageNumber === 0 ? 1 : pageNumber }));
    }
    handleClose()
    toast.success(message);
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (!user) {
      navigate("/login");
    }
    if (isSuccess) {
      toast.success(message);
    }
    dispatch(alljobroles(1));
    return () => reset();
  }, [user, navigate, isError, isSuccess, message, dispatch]);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pageVisted = pageNumber;
  let pageCount;
  const total_pages = jobroles?.total_pages
  const jobrolesData = jobroles?.body

  const getJobroles = () => {
    pageCount = total_pages;
    return jobrolesData?.map((data, index) => {
      return (
        <tr role="row" className="odd" key={index}>
          <td className="text-success fw-bold">{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}.</td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap text-center">
                <h6 className="text-black font-w600 fs-16 mb-0">
                  {data.title}
                </h6>
              </div>
            </div>
          </td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap text-center">
                <h6 className="text-black font-w600 fs-16 mb-0">
                  <img src={data.icons} height={50} width={50} alt="" onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = `${process.env.REACT_APP_IMAGEBASEURL}noImg.png`;
                  }} />
                </h6>
              </div>
            </div>
          </td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap text-center">
                <h6 className="text-black font-w600 fs-16 mb-0">
                  {data.price}
                </h6>
              </div>
            </div>
          </td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap text-center">
                <div className="text-black font-w600 fs-16 mb-0">
                  {data.is_active === true ? <button onClick={() => {
                    dispatch(toggleStatus({ jobrole_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                  }} className='btn btn-sm btn-rounded btn-success'>Active</button> : <button onClick={() => {
                    dispatch(toggleStatus({ jobrole_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                  }} className='btn btn-sm btn-rounded btn-danger'>Inactive</button>}
                </div>
              </div>
            </div>
          </td>

          <td>
            <div className="media">
              <div className="media-body text-nowrap text-center">
                <div>
                  <Link to="/Skills">
                    <button className='btn btn-sm btn-rounded btn-success'>Skills</button>
                  </Link>
                </div>
              </div>
            </div>
          </td>

          <td>
            <div className="media">
              <div className="media-body text-nowrap text-center">
                <div>
                  <button onClick={
                    () => { handleShow(data) }
                  } ><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.3307 6.66665H11.9974C10.1306 6.66665 9.19713 6.66665 8.48409 7.02996C7.85689 7.34954 7.34695 7.85948 7.02737 8.48668C6.66406 9.19972 6.66406 10.1331 6.66406 12V28C6.66406 29.8668 6.66406 30.8002 7.02737 31.5133C7.34695 32.1405 7.85689 32.6504 8.48409 32.97C9.19713 33.3333 10.1306 33.3333 11.9974 33.3333H27.9974C29.8642 33.3333 30.7977 33.3333 31.5107 32.97C32.1379 32.6504 32.6478 32.1405 32.9674 31.5133C33.3307 30.8002 33.3307 29.8668 33.3307 28V20.8333M25.8307 9.16665L30.5448 13.8807M17.9353 17.0621L29.0157 5.98168C30.3174 4.67994 32.428 4.67993 33.7297 5.98168C35.0315 7.28343 35.0315 9.39398 33.7297 10.6957L22.2931 22.1323C21.0237 23.4017 20.389 24.0365 19.6661 24.5412C19.0244 24.9892 18.3323 25.3604 17.604 25.647C16.7836 25.97 15.9037 26.1475 14.1439 26.5026L13.3307 26.6667L13.4098 26.1131C13.6897 24.1541 13.8296 23.1746 14.1479 22.2602C14.4303 21.4487 14.8161 20.6771 15.2958 19.9643C15.8364 19.161 16.536 18.4613 17.9353 17.0621Z" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </td>

        </tr>
      );
    });
  };

  const changePage = async (data) => {
    setPageNumber(data.selected);
    dispatch(alljobroles(data.selected + 1))
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
                  <div className="col-xl-3 col-lg-4 mb-2">
                    <h1 className="text-black fs-35 font-w600 mb-3">
                      Job Roles
                    </h1>
                    <h6 className="">
                      {userPerPage} Rows per page
                    </h6>
                    {/* <span className="fs-14">Based your preferences</span> */}
                  </div>
                  <div className="col-3 offset-6"> <button className="btn btn-rounded btn-lg btn-success float-right" onClick={handleShow}>+ Add Job Role</button></div>
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
                                className="sorting text-center"
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
                                className="sorting text-center"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Company: activate to sort column ascending"
                                style={{ width: 216, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Icon
                              </th>
                              <th
                                className="sorting text-center"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Date Applied: activate to sort column ascending"
                                style={{ width: 124, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Price
                              </th>
                              <th
                                className="sorting text-center"
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
                                className="sorting text-center"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Status: activate to sort column ascending"
                                style={{ width: 164, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Skills
                              </th>
                              <th
                                className="sorting text-center"
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
                          <tbody>{getJobroles()}</tbody>
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
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{_id !== false && _id !== undefined ? "Update" : "Add"} Role</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="form-group" onSubmit={onSubmit}>
                  {/* <input
                  className="form-control rounded-3 my-4"
                  type="text"
                  placeholder="Add Skills"
               /> */}
                  <div className="row">
                    <div className="col-12 my-4">
                      <input type="text" className="form-control rounded-4" placeholder="Enter Title" name="" onChange={(e) => setTitle(e.target.value)} value={title} autoFocus id="" />
                    </div>
                    <div className="col-12 my-4">
                      {/* <label htmlFor="">Icon</label> */}
                      <input type="file" accept="image/*" placeholder="choose Icon" required={_id === false ? "required" : ""} onChange={(e) => setIcon(e.target.files[0])} className="form-control rounded-4" />
                    </div>
                    {
                      _id === false || _id === undefined ? "" : <><div className="mb-4">
                        <img src={icon} height={50} width={50} alt="" onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src = `${process.env.REACT_APP_IMAGEBASEURL}noImg.png`;
                        }} />
                      </div></>
                    }
                    <div className="col-12 mb-4">
                      <input type="number" placeholder="Price" required onChange={(e) => setPrice(e.target.value)} value={price} className="form-control rounded-4" />
                    </div>
                  </div>
                  <Modal.Footer className="border-none">
                    <Button type="submit" variant="success" className="btn-block rounded-4">
                      Save Changes
                    </Button>
                    <Button variant="primary" className="btn-block rounded-4" onClick={handleClose} style={{ backgroundColor: '#21127b' }}>
                      Close
                    </Button>
                  </Modal.Footer>
                </form>
              </Modal.Body>
            </Modal>
          </div>
        </span>
      )}
    </>
  );
}

export default Jobroles;
