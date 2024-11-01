import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { alluniforms, toggleStatus, createUniform, reset } from "../../../features/uniforms/uniformsSlice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";

function Uniforms() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [description, setDescription] = useState("");
  const [jobrole, setJobRole] = useState("");
  const [icon, setIcon] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleEditShow = () => setShowEdit(true);
  const handleEditClose = () => setShowEdit(false);

  const { uniforms, isLoading, isError, isSuccess, message } = useSelector((state) => state.uniforms);



  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createUniform({ description, jobrole, icon, pageno: pageNumber === 0 ? 1 : pageNumber }));
    setShow(false);
    toast.success(message);
  };

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
    dispatch(alluniforms(1));
    return () => reset();
  }, [user, navigate, isError, isSuccess, message, dispatch]);

  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 10;
  const pageVisted = pageNumber;
  let pageCount;
  const total_pages = uniforms?.total_pages
  const UnifromsData = uniforms.body?.uniforms
  const jobroles = uniforms.body?.jobroles

  const getUniforms = () => {
    pageCount = total_pages;

    return UnifromsData?.map((data, index) => {
      return (
        <tr role="row" className="odd" key={index}>
          <td className="text-success fw-bold">{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}</td>
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
                  <img src={data.jobrole.icons} height={50} width={50} alt="" onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = `${process.env.REACT_APP_IMAGEBASEURL}noImg.png`;
                  }} /> {data.jobrole.title}
                </h6>
              </div>
            </div>
          </td>

          <td>
            <div className="media">
              <div className="media-body">
                <h6 className="text-black font-w600 fs-16 mb-0 text-nowrap">
                  {data.description}
                </h6>
              </div>
            </div>
          </td>

          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black font-w600 fs-16 mb-0">
                  {data.user.user_type === 3 ? "Admin" : "Employer"}
                </h6>
              </div>
            </div>
          </td>

          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <div className="text-black font-w600 fs-16 mb-0">
                  {data.status === true ? <button onClick={() => {
                    dispatch(toggleStatus({ uniform_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                  }} className='btn btn-rounded btn-success'>Active</button> : <button onClick={() => {
                    dispatch(toggleStatus({ uniform_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                  }} className='btn btn-rounded btn-danger'>Inactive</button>}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black font-w600 fs-16 mb-0">
                  <button onClick={
                    () => { handleEditShow() }
                  } ><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3307 2.66665H6.9974C5.13055 2.66665 4.19713 2.66665 3.48409 3.02996C2.85689 3.34954 2.34695 3.85948 2.02737 4.48668C1.66406 5.19972 1.66406 6.13314 1.66406 7.99998V24C1.66406 25.8668 1.66406 26.8002 2.02737 27.5133C2.34695 28.1405 2.85689 28.6504 3.48409 28.97C4.19713 29.3333 5.13055 29.3333 6.9974 29.3333H22.9974C24.8642 29.3333 25.7977 29.3333 26.5107 28.97C27.1379 28.6504 27.6478 28.1405 27.9674 27.5133C28.3307 26.8002 28.3307 25.8668 28.3307 24V16.8333M20.8307 5.16665L25.5448 9.8807M12.9353 13.0621L24.0157 1.98168C25.3174 0.679935 27.428 0.679933 28.7297 1.98168C30.0315 3.28343 30.0315 5.39398 28.7297 6.69573L17.2931 18.1323C16.0237 19.4017 15.389 20.0365 14.6661 20.5412C14.0244 20.9892 13.3323 21.3604 12.604 21.647C11.7836 21.97 10.9037 22.1475 9.14394 22.5026L8.33073 22.6667L8.40982 22.1131C8.68967 20.1541 8.82959 19.1746 9.14788 18.2602C9.43031 17.4487 9.81614 16.6771 10.2958 15.9643C10.8364 15.161 11.536 14.4613 12.9353 13.0621Z" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </h6>
              </div>
            </div>
          </td>

        </tr>
      );
    });
  };

  const getJobroles = () => {
    return jobroles?.map((jdata, jindex) => {
      return (
        <option value={jdata._id} key={jindex}>
          {jdata.title}
        </option>
      )
    })
  }

  const changePage = async (data) => {
    setPageNumber(data.selected);
    dispatch(alluniforms(data.selected + 1))
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
                      Uniforms
                    </h1>
                    <h6 className="fs-16 mb-1">
                      {userPerPage} Rows per page
                    </h6>
                  </div>
                  <div className="col-3 offset-6"> <button className="btn btn-rounded btn-lg btn-success  float-right" onClick={handleShow}>+  Add Uniform</button></div>
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
                                style={{ width: 100, backgroundColor: '#00B094', color: 'white' }}
                              >
                                ID
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Date Applied: activate to sort column ascending"
                                style={{ width: 20, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Image
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Date Applied: activate to sort column ascending"
                                style={{ width: 20, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Jobrole
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Date Applied: activate to sort column ascending"
                                style={{ width: 200, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Description
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Date Applied: activate to sort column ascending"
                                style={{ width: 40, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Owner
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Status: activate to sort column ascending"
                                style={{ width: 150, backgroundColor: '#00B094', color: 'white' }}
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
                                style={{ width: 150, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>{getUniforms()}</tbody>
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
          <div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Uniform</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="form-group" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-12 my-3">
                      <textarea required className="form-control rounded-4" onChange={(e) => setDescription(e.target.value)} value={description} autoFocus cols="10" rows="5" placeholder="Description"></textarea>
                    </div>
                    <div className="col-12 my-3">
                      <input type="file" accept="image/*" required onChange={(e) => setIcon(e.target.files[0])} className="form-control rounded-4" />
                    </div>
                    <div className="col-12 my-2">
                      <select className="form-control rounded-4" onChange={(e) => setJobRole(e.target.value)} value={jobrole}>
                        <option value="" required defaultValue disabled>Select Jobrole</option>
                        {getJobroles()}
                      </select>
                    </div>
                  </div>
                  <Modal.Footer className="my-5">
                    <Button type="submit" variant="success" className="btn-block rounded-4">
                      Save Changes
                    </Button>
                    <Button className="btn-block rounded-4" onClick={handleClose} style={{ backgroundColor: '#21127b' }}>
                      Close
                    </Button>
                  </Modal.Footer>
                </form>
              </Modal.Body>
            </Modal>
            <Modal show={showEdit} onHide={handleEditClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Uniform</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="form-group" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-12 my-3">
                      
                      <textarea required className="form-control rounded-4" onChange={(e) => setDescription(e.target.value)} value={description} autoFocus cols="10" rows="5" placeholder="Description"></textarea>
                    </div>
                    <div className="col-12 my-3">
                      {/* <label htmlFor="">Image</label> */}
                      <input type="file" accept="image/*" required onChange={(e) => setIcon(e.target.files[0])} className="form-control rounded-4" />
                    </div>
                    <div className="col-12 my-2">
                      <select className="form-control rounded-4" onChange={(e) => setJobRole(e.target.value)} value={jobrole}>
                        <option value="" required defaultValue disabled>Select Jobrole</option>
                        {getJobroles()}
                      </select>
                    </div>
                  </div>
                  <Modal.Footer className="my-5">
                    <Button type="submit" variant="success" className="btn-block rounded-4">
                      Save Changes
                    </Button>
                    <Button className="btn-block rounded-4" onClick={handleClose} style={{ backgroundColor: '#21127b' }}>
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

export default Uniforms;
