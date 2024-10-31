import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import dateFormat from "dateformat";
import { allExpenses, createExpense, reset } from "../../../features/expenses/expensesSlice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";
import { Form } from "react-bootstrap";


const getDate = (date) => {
  return dateFormat(date, "mmmm dS, yyyy, h:MM:ss TT");
};


function Expenses() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [amount, setAmount] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { expenses, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.expenses
  );



  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createExpense({ description, category_id, amount, pageno: pageNumber === 0 ? 1 : pageNumber }));
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
    dispatch(allExpenses(1));
    return () => reset();
  }, [user, navigate, isError, isSuccess, message, dispatch]);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pageVisted = pageNumber;
  // let workers;
  let pageCount;
  const total_pages = expenses?.total_pages
  const expenseData = expenses.body?.expenses
  const categories = expenses.body?.expenseCategories
  const getExpensesFun = () => {
    pageCount = total_pages;
    return expenseData?.map((data, index) => {
      return (
        <tr role="row" className="odd" key={index}>
          <td className="text-success fw-bold">{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}</td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black font-w600 fs-16 mb-0 text-center">
                  {data.category.title}
                </h6>
              </div>
            </div>
          </td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black font-w600 fs-16 mb-0 text-center">
                  {data.category.title}
                </h6>
              </div>
            </div>
          </td>

          <td>
            <div className="media">
              <div className="media-body">
                <h6 className="text-black font-w600 fs-16 mb-0 text-center">
                  {data.amount}
                </h6>
              </div>
            </div>
          </td>

          <td>
            <div className="media">
              <div className="media-body text-center">
                <h6 className="text-black font-w600 fs-16 mb-0 text-nowrap text-center">
                  {data.description}
                </h6>
              </div>
            </div>
          </td>


          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black font-w600 fs-16 mb-0 text-center">
                  {data.user.user_type === 3 ? `${data.user.name}` : `SubAdmin ${data.user.name}`}
                </h6>
              </div>
            </div>
          </td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black font-w600 fs-16 mb-0 text-center">
                  {getDate(data.createdAt)}
                </h6>
              </div>
            </div>
          </td>
          <td>
            <div className="media">
              <div className="media-body text-nowrap">
                <h6 className="text-black font-w600 fs-16 mb-0 text-center">
                  <i className="fa-regular fa-file-lines fa-2x text-success"></i>
                </h6>
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };

  const getCategories = () => {
    return categories?.map((jdata, jindex) => {
      return (
        <option value={jdata._id} key={jindex}>
          {jdata.title}
        </option>
      )
    })
  }

  const changePage = async (data) => {
    setPageNumber(data.selected);
    dispatch(getExpensesFun(data.selected + 1))
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
                  <div className="col-xl-6 col-xs-6 mb-2">
                    <h1 className="text-black fs-35 font-w600 mb-3">
                      Expenses
                    </h1>
                    <h6 className="fs-16 mb-1">
                      {userPerPage} Rows per page
                    </h6>
                  </div>
                  <div className="col-xl-6 col-xs-6 text-end">
                    <Link to="/expense-category">
                    
                    <button className="btn btn-rounded btn-lg text-white " style={{ backgroundColor: '#1f1179' }}> Categories</button>
                    </Link>
                    <button className="btn btn-rounded btn-lg btn-success mx-3" onClick={handleShow}>+ Add Expense</button>
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
                                className="sorting "
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
                                className="sorting text-center"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Date Applied: activate to sort column ascending"
                                style={{ width: 124, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Name
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
                                Category
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
                                Amount
                              </th>
                              <th
                                className="sorting text-center"
                                tabIndex={0}
                                aria-controls="example5"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Date Applied: activate to sort column ascending"
                                style={{ width: 250, backgroundColor: '#00B094', color: 'white' }}
                              >
                                Description
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
                                Owner
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
                                Date
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
                                Attachments
                              </th>
                            </tr>
                          </thead>
                          <tbody>{getExpensesFun()}</tbody>
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
                <Modal.Title>Add Expense</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="form-group" onSubmit={onSubmit}>
                  <textarea
                    className="form-control rounded-3 my-4"
                    placeholder="Decription"
                    rows={5}
                    autoFocus
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                  />

                  <input
                    className="form-control rounded-3 my-4"
                    type="name"
                    placeholder="Enter Your Name"
                  />
                  <input
                    className="form-control rounded-3 my-4"
                    type="number"
                    placeholder="Enter Your Amount"
                    onChange={(e) => setAmount(e.target.value)} 
                    value=""
                  />

                  <Form.Select className="form-control rounded-3" onChange={(e) => setCategory_id(e.target.value)} value={category_id}>
                    <option value="" required defaultValue disabled>Select Category</option>
                    {getCategories()}
                  </Form.Select>
                  <Modal.Footer>
                    <Button type="submit" variant="success" className="btn-block rounded-4">
                      Save Changes
                    </Button>
                    <Button className="btn-block rounded-4" onClick={handleClose} style={{backgroundColor:'#21117c'}}>
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

export default Expenses;
