import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allsupport, reset } from "../../../features/support/supportSlice";
import { toast } from "react-toastify";
import dateFormat from "dateformat";
import Nav from "../../layouts/nav";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";


function Support() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const { support, isLoading, isError, message } = useSelector(
		(state) => state.support
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
		dispatch(allsupport(1));
		return () => reset();
	}, [user, navigate, isError, message, dispatch]);

	const [pageNumber, setPageNumber] = useState(0);

	const userPerPage = 10;
	const pageVisted = pageNumber;
	let pageCount;
	const total_pages = support?.total_pages
	const supportData = support?.body

	const getSupport = () => {
		pageCount = total_pages;
		return supportData?.map((data, index) => {
			return (
				<tr role="row" className="odd" key={index}>
					<td className="text-success"><b>{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}</b></td>
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
									<h6 className="text-black font-w600 fs-16 mb-0">
										{data.subject}
									</h6>
								</div>
							</div>
						</div>
					</td>
					<td>
						<div className="media">
							<div className="media-body text-nowrap">
								<div className="text-black font-w600 fs-16 mb-0">
									<h6 className="text-black font-w600 fs-16 mb-0">
										{data.email}
									</h6>
								</div>
							</div>
						</div>
					</td>

					<td>
						<div className="media">
							<div className="media-body text-nowrap">
								<div className="text-black font-w600 fs-16 mb-0">
									<h6 className="text-black font-w600 fs-16 mb-0" style={{ whiteSpace: "break-spaces" }}>
										<td>{getDate(data.createdAt)}</td>
									</h6>
								</div>
							</div>
						</div>
					</td>
					<td>
						<div className="media">
							<div className="media-body text-nowrap">
								<div className="text-black font-w600 fs-16 mb-0">
									<h6 className="text-black font-w600 fs-16 mb-0" style={{ whiteSpace: "break-spaces" }}>
										{data.message}
									</h6>
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
		dispatch(allsupport(data.selected + 1))
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
											Support
										</h1>
										<h6 className="text-black fs-16 font-w600 mb-1">
											{userPerPage} Rows per page
										</h6>
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
																aria-label="Date Applied: activate to sort column ascending"
																style={{ width: 100, backgroundColor: '#00B094', color: 'white' }}
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
																Subject
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
																Email
															</th>
															<th
																className="sorting"
																tabIndex={0}
																aria-controls="example5"
																rowSpan={1}
																colSpan={1}
																aria-label="Status: activate to sort column ascending"
																style={{ width: 250, backgroundColor: '#00B094', color: 'white' }}
															>
																Date
															</th>
															<th
																className="sorting"
																tabIndex={0}
																aria-controls="example5"
																rowSpan={1}
																colSpan={1}
																aria-label="Status: activate to sort column ascending"
																style={{ width: 250, backgroundColor: '#00B094', color: 'white' }}
															>
																Message
															</th>
														</tr>
													</thead>
													<tbody>{getSupport()}</tbody>
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
		</>
	);
}

export default Support;
