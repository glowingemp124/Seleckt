
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {Button,Modal} from 'react-bootstrap';
import {Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { allFaqs, createfaq, reset } from "../../../features/faq/faqSlice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";

function FAQS() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [fmessage, setFMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { faqs, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.faqs
  );



  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createfaq({ title, fmessage, pageno: pageNumber === 0 ? 1 : pageNumber }));
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
    dispatch(allFaqs(1));
    return () => reset();
  }, [user, navigate, isError, isSuccess, message, dispatch]);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pageVisted = pageNumber;
  // let workers;
  let pageCount;
  const total_pages = faqs?.total_pages
  const FAQSData = faqs?.body
  const getFAQS = () => {
    pageCount = total_pages;
    return FAQSData?.map((data, index) => {
      return (
        <>
          <Accordion.Item eventKey={index}>
            <Accordion.Header className="p-2">{data.title}</Accordion.Header>
            <Accordion.Body className="p-2">{data.message}</Accordion.Body>
          </Accordion.Item>
        </>
      );
    });
  };

  const changePage = async (data) => {
    setPageNumber(data.selected);
    dispatch(allFaqs(data.selected + 1))
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
                                            FAQ's
                                        </h1>
                    <h6 className="text-black fs-16 font-w600 mb-1">
                      {userPerPage}
                      Rows per page
                    </h6>
                    {/* <span className="fs-14">Based your preferences</span> */}
                  </div>
                  <div className="col-3 offset-6"> <button className="btn btn-rounded btn-md btn-success float-right" onClick={handleShow}>Add FAQ</button></div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="table-responsive">
                      <div
                        id="example5_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <div className="card">
                          <Accordion defaultActiveKey="0" flush>
                            {getFAQS()}
                          </Accordion>
                        </div>
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
                <Modal.Title>Add FAQ</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="form-group" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="">Message</label>
                      <textarea required className="form-control" onChange={(e) => setFMessage(e.target.value)} value={fmessage} autoFocus cols="10" rows="5"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">Title</label>
                      <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} />
                    </div>
                  </div>
                  <Modal.Footer>
                    <Button type="submit" variant="success" className="btn-block rounded-4">
                      Save Changes
                    </Button>
                    <Button variant="primary" className="btn-block rounded-4" onClick={handleClose}>
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

export default FAQS;
