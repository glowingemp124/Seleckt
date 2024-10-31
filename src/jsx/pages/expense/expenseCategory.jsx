import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import dateFormat from "dateformat";
import { allExpenseCat, createExpenseCat, reset, } from "../../../features/expenseCategories/expenseCatSlice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";

const getDate = (date) => {
  return dateFormat(date, "mmmm dS, yyyy, h:MM:ss TT");
};

function ExpensesCat() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { expenseCat, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.expenseCat
  );

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createExpenseCat({ title, pageno: pageNumber === 0 ? 1 : pageNumber })
    );
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
    dispatch(allExpenseCat(1));
    return () => reset();
  }, [user, navigate, isError, isSuccess, message, dispatch]);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pageVisted = pageNumber;
  // let workers;
  let pageCount;
  const total_pages = expenseCat?.total_pages;
  const expenseData = expenseCat?.body;
  const getExpensesCatFun = () => {
    pageCount = total_pages;
    return expenseData?.map((data, index) => {
      return (
        <tr role="row" className="odd" key={index}>
          <td>{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}</td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black fs-16 mb-0">
                  {data.title}
                </h6>
              </div>
            </div>
          </td>

          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black fs-16 mb-0">
                  {data.user.user_type === 3
                    ? `${data.user.name}`
                    : `SubAdmin ${data.user.name}`}
                </h6>
              </div>
            </div>
          </td>

          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black fs-16 mb-0">
                  {getDate(data.createdAt)}
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
    dispatch(getExpensesCatFun(data.selected + 1));
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
                <div className="mb-4 row">
                  <div className="col-xl-4 col-xs-6 mb-2">
                    <h1 className="text-black fs-35 font-w600 mb-3">
                      Expense
                    </h1>
                    <h6 className="">
                      {userPerPage} Rows per page
                    </h6>
                  </div>
                  <div className="col-xl-8 col-xs-6 ">
                    <div className="d-flex align-items-end flex-column">
                      <button
                        className="btn btn-rounded btn-md mb-2 btn-success float-right"
                        onClick={handleShow}
                      >
                        + Add Expense Category
                      </button>
                      <Link to="/expenses">
                        <button className="btn btn-rounded btn-md btn-primary float-right mr-2" style={{ backgroundColor: '#21127b' }}>Expenses</button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="d-flex flex-wrap mb-4 row">
                  <div className="col-xl-3 col-lg-4 mb-2">
                    <h1 className="text-black fs-35 font-w600 mb-3">
                      Expense Category
                    </h1>
                    <h6 className="text-black fs-16 font-w600 mb-1">
                      {userPerPage}
                      Rows per page
                    </h6>
                    <span className="fs-14">Based your preferences</span>
                  </div>
                  <div className="col-3 offset-6">
                    <div className="col">
                      <button
                        className="btn btn-rounded btn-lg mb-2 btn-success float-right"
                        onClick={handleShow}
                      >
                        Add Expense Category
                      </button>
                    </div>
                    <div className="col">
                      <button className="btn btn-rounded btn-lg btn-primary float-right mr-2"><a style={{ color: '#fff' }} href="/admin/expenses">Expenses</a></button>
                    </div>
                  </div>
                </div> */}
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
                                aria-label="Date Applied: activate to sort column ascending"
                                style={{ width: 124, backgroundColor: '#00B094', color: 'white' }}
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
                                style={{ width: 164, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Date
                              </th>
                            </tr>
                          </thead>
                          <tbody>{getExpensesCatFun()}</tbody>
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
                <Modal.Title>Add Expense Category</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="form-group" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Category" className="form-control rounded-4 text-black"></textarea>
                      {/* <input
                        type="text"
                        required
                        className="form-control rounded-3 "
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder="Category"
                        autoFocus
                      /> */}
                    </div>
                  </div>
                  <Modal.Footer>
                    <Button type="submit" variant="success" className="btn-block rounded-4 mt-3">
                      Save Changes
                    </Button>
                    <Button style={{ backgroundColor: '#1f1179' }} className="btn-block rounded-4" onClick={handleClose}>
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

export default ExpensesCat;
