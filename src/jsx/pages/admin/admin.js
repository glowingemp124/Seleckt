import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../layouts/nav";

import { Dropdown, Button, Modal, InputGroup, FormControl } from "react-bootstrap";

const Admin = () => {
   const tableData = {
      columns: [
         { name: "ID", width: 150 },
         { name: "Name", width: 200 },
         { name: "Mobile", width: 187 },
         { name: "Role", width: 189 },
         { name: "Status", width: 164 },
         { name: "Edit", width: 164 }
      ],
      rows: [
         {
            id: "#APL-0003",
            name: "John",
            mobile: "+12345678",
            role: "Super Admin",
            status: "Inactive",
            actions: ["Details", "Cancel"]
         },
         {
            id: "#APL-0002",
            name: "Michel",
            mobile: "+12345678",
            role: "Super Admin",
            status: "Inactive",
            actions: ["Details", "Cancel"]
         }
      ]
   };



   const [modalWithTooltip, setModalWithTooltip] = useState(false);
   const [modalOfNextKin, setModalOfNextKin] = useState(false);
   return (
      <>
         <Nav />
         <div className="content-body">
            <div className="container-fluid">
               <div className="h-80">
                  <div className=" mb-4 row">
                     <div className="col-xl-3 col-lg-4 mb-2">
                        <h1 className="text-black fs-35 font-w600 mb-3">
                           Admins
                        </h1>
                        <h6 className="fs-16 mb-1">
                           10 Rows per page
                        </h6>
                        {/* {/* <span className="fs-14">Based your preferences</span> */}
                     </div>

                     <div className="col-xl-9 col-lg-8 text-end">
                        <Button
                           variant="primary"
                           className="btn btn-rounded "
                           onClick={() => setModalWithTooltip(true)}
                        >
                           +   Add Admin
                        </Button>
                     </div>

                  </div>
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="table-responsive">
                           <div
                              id="example5_wrapper"
                              className="dataTables_wrapper no-footer"
                           >
                              <table className="table display mb-4 dataTablesCard card-table dataTable no-footer">
                                 <thead>
                                    <tr>
                                       <th style={{ width: 54, backgroundColor: '#00B094', color: 'white' }}>
                                          <div className="checkbox mr-0 align-self-center">
                                             <div className="custom-control custom-checkbox ">
                                                <input type="checkbox" className="custom-control-input" id="checkAll" />
                                                <label className="custom-control-label" htmlFor="checkAll" />
                                             </div>
                                          </div>
                                       </th>
                                       {tableData.columns.map((col, index) => (
                                          <th key={index} style={{ width: 100, backgroundColor: '#00B094', color: 'white' }}>
                                             {col.name}
                                          </th>
                                       ))}
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {tableData.rows.map((row, rowIndex) => (
                                       <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'even' : 'odd'}>
                                          <td>
                                             <div className="checkbox mr-0 align-self-center">
                                                <div className="custom-control custom-checkbox ">
                                                   <input type="checkbox" className="custom-control-input" id={`check${rowIndex + 1}`} />
                                                   <label className="custom-control-label" htmlFor={`check${rowIndex + 1}`} />
                                                </div>
                                             </div>
                                          </td>
                                          <td>{row.id}</td>
                                          <td>
                                             <div className="media">
                                                <div className="media-body text-nowrap">
                                                   <h6 className="text-black fs-16 mb-0">
                                                      {row.name}
                                                   </h6>
                                                </div>
                                             </div>
                                          </td>
                                          <td>{row.mobile}</td>
                                          <td>{row.role}</td>
                                          <td>
                                             <div className="d-flex justify-content-center">
                                                <a className="btn btn-rounded btn-danger" href="#">
                                                   {row.status}
                                                </a>
                                             </div>
                                          </td>
                                          <td>
                                             <Dropdown className="dropdown custom-dropdown mb-0">
                                                <Dropdown.Toggle variant="" data-toggle="dropdown border-light">
                                                   <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M15.4766 9.99984C15.4766 8.15889 16.8623 6.6665 18.5718 6.6665C20.2813 6.6665 21.667 8.15889 21.667 9.99984C21.667 11.8408 20.2813 13.3332 18.5718 13.3332C16.8623 13.3332 15.4766 11.8408 15.4766 9.99984ZM15.4766 19.9998C15.4766 18.1589 16.8623 16.6665 18.5718 16.6665C20.2813 16.6665 21.667 18.1589 21.667 19.9998C21.667 21.8408 20.2813 23.3332 18.5718 23.3332C16.8623 23.3332 15.4766 21.8408 15.4766 19.9998ZM15.4766 29.9998C15.4766 28.1589 16.8623 26.6665 18.5718 26.6665C20.2813 26.6665 21.667 28.1589 21.667 29.9998C21.667 31.8408 20.2813 33.3332 18.5718 33.3332C16.8623 33.3332 15.4766 31.8408 15.4766 29.9998Z" fill="#00B094" />
                                                   </svg>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                                   {row.actions.map((action, actionIndex) => (
                                                      <Dropdown.Item key={actionIndex} className={action === "Cancel" ? "dropdown-item text-danger" : "dropdown-item"} href="#">
                                                         {action}
                                                      </Dropdown.Item>
                                                   ))}
                                                </Dropdown.Menu>
                                             </Dropdown>
                                          </td>
                                       </tr>
                                    ))}
                                 </tbody>
                              </table>
                              <div className="d-flex align-items-center justify-content-between pb-2">
                                 <div
                                    className="dataTables_info"
                                    id="example5_info"
                                    role="status"
                                    aria-live="polite"
                                 >
                                    Showing 1 to 6 of 6 entries
                                 </div>
                                 <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="example5_paginate"
                                 >
                                    <a
                                       className="paginate_button previous disabled"
                                       aria-controls="example5"
                                       data-dt-idx={0}
                                       tabIndex={0}
                                       id="example5_previous"
                                    >
                                       Previous
                                    </a>
                                    <span>
                                       <a
                                          className="paginate_button current"
                                          aria-controls="example5"
                                          data-dt-idx={1}
                                          tabIndex={0}
                                       >
                                          1
                                       </a>
                                    </span>
                                    <a
                                       className="paginate_button next disabled"
                                       aria-controls="example5"
                                       data-dt-idx={2}
                                       tabIndex={0}
                                       id="example5_next"
                                    >
                                       Next
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* create new admin modal */}
         <Modal className="fade mt-5" show={modalWithTooltip}>
            <Modal.Header>
               <Modal.Title>Create New Admin</Modal.Title>
               <Button
                  variant=""
                  className="close"
                  onClick={() => setModalWithTooltip(false)}
               >
                  <span>&times;</span>
               </Button>
            </Modal.Header>
            <Modal.Body>
               <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                  <InputGroup className="">
                     <InputGroup.Text className="bg-transparent text-success">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                           <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" fill="#00B094" stroke="#00B094" strokeWidth="2" />
                        </svg>
                     </InputGroup.Text>
                     <FormControl
                        className="rounded-3 border-0"
                        type="name"
                        placeholder="Enter admin name"
                     />
                  </InputGroup>
               </div>
               <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                  <InputGroup className="">
                     <InputGroup.Text className="bg-transparent">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1.5 8.5H22.5M17.8333 13.1683L6.16667 13.1667M10.0556 17.8339L6.16667 17.8333M6.16667 1.5V3.83333M17.8333 1.5V3.83333M5.23333 22.5H18.7667C20.0735 22.5 20.7269 22.5 21.226 22.2457C21.665 22.022 22.022 21.665 22.2457 21.226C22.5 20.7269 22.5 20.0735 22.5 18.7667V7.56667C22.5 6.25988 22.5 5.60648 22.2457 5.10736C22.022 4.66831 21.665 4.31136 21.226 4.08765C20.7269 3.83333 20.0735 3.83333 18.7667 3.83333L5.23333 3.83333C3.92654 3.83333 3.27315 3.83333 2.77402 4.08765C2.33498 4.31136 1.97802 4.66831 1.75432 5.10736C1.5 5.60648 1.5 6.25988 1.5 7.56667L1.5 18.7667C1.5 20.0735 1.5 20.7269 1.75432 21.226C1.97802 21.665 2.33498 22.022 2.77402 22.2457C3.27315 22.5 3.92654 22.5 5.23333 22.5Z" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </InputGroup.Text>
                     <FormControl
                        className="rounded-3 border-0"
                        type="date"
                        placeholder="DOB"
                     />
                  </InputGroup>
               </div>
               <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                  <InputGroup className="">
                     <InputGroup.Text className="bg-transparent">
                        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10.0026 22.5C14.0859 18.3 18.1693 14.5392 18.1693 9.9C18.1693 5.26081 14.5129 1.5 10.0026 1.5C5.49228 1.5 1.83594 5.26081 1.83594 9.9C1.83594 14.5392 5.91927 18.3 10.0026 22.5Z" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M10.0026 13.1667C11.9356 13.1667 13.5026 11.5997 13.5026 9.66667C13.5026 7.73367 11.9356 6.16667 10.0026 6.16667C8.06961 6.16667 6.5026 7.73367 6.5026 9.66667C6.5026 11.5997 8.06961 13.1667 10.0026 13.1667Z" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </InputGroup.Text>
                     <FormControl
                        className="rounded-3 border-0"
                        type="text"
                        placeholder="Enter Address"
                     />
                  </InputGroup>
               </div>
               <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                  <InputGroup className="">
                     <InputGroup.Text className="bg-transparent">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1.5 4.41667C1.5 14.4038 9.59618 22.5 19.5833 22.5C20.0339 22.5 20.4807 22.4835 20.923 22.4511C21.4306 22.414 21.6844 22.3954 21.9155 22.2623C22.1068 22.1522 22.2883 21.9569 22.3842 21.758C22.5 21.5179 22.5 21.2378 22.5 20.6777V17.3908C22.5 16.9197 22.5 16.6842 22.4225 16.4823C22.354 16.304 22.2428 16.1452 22.0986 16.0198C21.9353 15.878 21.7139 15.7975 21.2713 15.6365L17.5299 14.276C17.0149 14.0887 16.7574 13.9951 16.513 14.011C16.2976 14.025 16.0902 14.0985 15.9141 14.2234C15.7143 14.365 15.5733 14.6 15.2914 15.0699L15.2914 15.0699L14.3333 16.6667C11.2418 15.2666 8.73555 12.757 7.33333 9.66667L8.93007 8.70862C9.40003 8.42665 9.635 8.28566 9.7766 8.08591C9.90146 7.90976 9.97498 7.70243 9.989 7.48698C10.0049 7.24265 9.91125 6.98512 9.72396 6.47006L9.72396 6.47005L8.36348 2.72875C8.20251 2.28606 8.12201 2.06471 7.98015 1.90145C7.85485 1.75724 7.69604 1.64601 7.51769 1.57753C7.31578 1.5 7.08026 1.5 6.6092 1.5H3.32235C2.76219 1.5 2.48211 1.5 2.24198 1.61579C2.04309 1.7117 1.84783 1.89318 1.73765 2.08454C1.60463 2.31558 1.58604 2.56939 1.54887 3.07701C1.51648 3.51934 1.5 3.96608 1.5 4.41667Z" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                     </InputGroup.Text>
                     <FormControl
                        className="rounded-3 border-0"
                        type="number"
                        placeholder="Enter mobile number"
                     />
                  </InputGroup>
               </div>
               <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                  <InputGroup className="">
                     <InputGroup.Text className="bg-transparent">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M17.8116 16.988L18.3309 21.0125C18.4078 21.5927 18.4462 21.8828 18.5647 22.1317C18.6695 22.3519 18.8192 22.5478 19.0042 22.7068C19.2132 22.8865 19.483 22.9998 20.0227 23.2263L20.8397 23.5694C21.6383 23.9047 22.0376 24.0723 22.4201 24.0597C22.7571 24.0485 23.0838 23.9402 23.3607 23.7478C23.675 23.5295 23.8951 23.1565 24.3352 22.4105L25.0136 21.2606C18.4842 14.8271 9.41032 14.8939 2.97656 21.4235L3.67214 22.5633C4.12325 23.3027 4.3488 23.6724 4.66628 23.8861C4.94603 24.0744 5.27423 24.1779 5.61139 24.184C5.99401 24.191 6.3908 24.0175 7.18437 23.6704L7.77612 23.4116C8.38789 23.1441 8.69377 23.0103 8.91746 22.7968C9.11516 22.6081 9.26592 22.3758 9.35767 22.1184C9.46148 21.8271 9.45902 21.4932 9.45408 20.8255L9.42601 17.2629M5.66842 7C7.78583 4.84008 10.7365 3.5 14.0001 3.5C17.2637 3.5 20.2144 4.84008 22.3318 7M19.2176 10.5C17.9359 9.06792 16.0732 8.16667 14.0001 8.16667C11.9269 8.16667 10.0642 9.06792 8.78248 10.5" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                     </InputGroup.Text>
                     <FormControl
                        className="rounded-3 border-0"
                        type="number"
                        placeholder="Enter telephone number"
                     />
                  </InputGroup>
               </div>
               <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                  <InputGroup className="">
                     <InputGroup.Text className="bg-transparent">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M3.5 10.4997C3.5 10.4997 6.65 13.9997 14 13.9997C21.35 13.9997 24.5 10.4997 24.5 10.4997M9.1 22.1663H18.9C20.8602 22.1663 21.8403 22.1663 22.589 21.7849C23.2475 21.4493 23.783 20.9139 24.1185 20.2553C24.5 19.5066 24.5 18.5265 24.5 16.5663V11.433C24.5 9.47282 24.5 8.49273 24.1185 7.74404C23.783 7.08547 23.2475 6.55004 22.589 6.21448C21.8403 5.83301 20.8602 5.83301 18.9 5.83301H9.1C7.13982 5.83301 6.15972 5.83301 5.41103 6.21448C4.75247 6.55004 4.21703 7.08547 3.88148 7.74404C3.5 8.49273 3.5 9.47282 3.5 11.433V16.5663C3.5 18.5265 3.5 19.5066 3.88148 20.2553C4.21703 20.9139 4.75247 21.4493 5.41103 21.7849C6.15972 22.1663 7.13982 22.1663 9.1 22.1663Z" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                     </InputGroup.Text>
                     <FormControl
                        className="rounded-3 border-0"
                        type="email"
                        placeholder="Enter email address"
                     />
                  </InputGroup>
               </div>
               <div className="d-flex flex-column mx-5">
                  <Button variant="success" className="rounded-4 my-3">Create Admin</Button>
                  <Button variant="outline-primary" className="rounded-4 mb-4" onClick={() => setModalOfNextKin(true)}>Add Next of Kin</Button>
               </div>
            </Modal.Body>
            {/* <Modal.Footer>
                        <Button
                           variant="danger light"
                           onClick={() => setModalWithTooltip(false)}
                        >
                           Close
                        </Button>
                        <Button variant="primary">Save changes</Button>
                     </Modal.Footer> */}
         </Modal>

         {/* Add next of kin modal */}
         <Modal className="fade mt-5" show={modalOfNextKin}>
            <Modal.Header>
               <Modal.Title>Add Next of Kin</Modal.Title>
               <Button
                  variant=""
                  className="close"
                  onClick={() => setModalOfNextKin(false)}
               >
                  <span>&times;</span>
               </Button>
            </Modal.Header>
            <Modal.Body>
               <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                  <InputGroup className="">
                     <InputGroup.Text className="bg-transparent text-success">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                           <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" fill="#00B094" stroke="#00B094" strokeWidth="2" />
                        </svg>
                     </InputGroup.Text>
                     <FormControl
                        className="rounded-3 border-0"
                        type="name"
                        placeholder="Enter admin name"
                     />
                  </InputGroup>
               </div>
               <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                  <InputGroup className="">
                     <InputGroup.Text className="bg-transparent">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1.5 8.5H22.5M17.8333 13.1683L6.16667 13.1667M10.0556 17.8339L6.16667 17.8333M6.16667 1.5V3.83333M17.8333 1.5V3.83333M5.23333 22.5H18.7667C20.0735 22.5 20.7269 22.5 21.226 22.2457C21.665 22.022 22.022 21.665 22.2457 21.226C22.5 20.7269 22.5 20.0735 22.5 18.7667V7.56667C22.5 6.25988 22.5 5.60648 22.2457 5.10736C22.022 4.66831 21.665 4.31136 21.226 4.08765C20.7269 3.83333 20.0735 3.83333 18.7667 3.83333L5.23333 3.83333C3.92654 3.83333 3.27315 3.83333 2.77402 4.08765C2.33498 4.31136 1.97802 4.66831 1.75432 5.10736C1.5 5.60648 1.5 6.25988 1.5 7.56667L1.5 18.7667C1.5 20.0735 1.5 20.7269 1.75432 21.226C1.97802 21.665 2.33498 22.022 2.77402 22.2457C3.27315 22.5 3.92654 22.5 5.23333 22.5Z" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </InputGroup.Text>
                     <FormControl
                        className="rounded-3 border-0"
                        type="date"
                        placeholder="DOB"
                     />
                  </InputGroup>
               </div>
               <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                  <InputGroup className="">
                     <InputGroup.Text className="bg-transparent">
                        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10.0026 22.5C14.0859 18.3 18.1693 14.5392 18.1693 9.9C18.1693 5.26081 14.5129 1.5 10.0026 1.5C5.49228 1.5 1.83594 5.26081 1.83594 9.9C1.83594 14.5392 5.91927 18.3 10.0026 22.5Z" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M10.0026 13.1667C11.9356 13.1667 13.5026 11.5997 13.5026 9.66667C13.5026 7.73367 11.9356 6.16667 10.0026 6.16667C8.06961 6.16667 6.5026 7.73367 6.5026 9.66667C6.5026 11.5997 8.06961 13.1667 10.0026 13.1667Z" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </InputGroup.Text>
                     <FormControl
                        className="rounded-3 border-0"
                        type="text"
                        placeholder="Enter Address"
                     />
                  </InputGroup>
               </div>

               <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                  <InputGroup className="">
                     <InputGroup.Text className="bg-transparent">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M15.1667 23.3337V21.0003C15.1667 17.7787 12.555 15.167 9.33333 15.167C6.11167 15.167 3.5 17.7787 3.5 21.0003V23.3337H15.1667ZM15.1667 23.3337H24.5V22.167C24.5 18.7306 21.8883 16.3337 18.6667 16.3337C17.0178 16.3337 15.5287 17.0634 14.4678 18.2366M12.8333 8.16699C12.8333 10.1 11.2663 11.667 9.33333 11.667C7.40034 11.667 5.83333 10.1 5.83333 8.16699C5.83333 6.234 7.40034 4.66699 9.33333 4.66699C11.2663 4.66699 12.8333 6.234 12.8333 8.16699ZM21 10.5003C21 11.789 19.9553 12.8337 18.6667 12.8337C17.378 12.8337 16.3333 11.789 16.3333 10.5003C16.3333 9.21166 17.378 8.16699 18.6667 8.16699C19.9553 8.16699 21 9.21166 21 10.5003Z" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </InputGroup.Text>
                     <FormControl
                        className="rounded-3 border-0"
                        type="text"
                        placeholder="Enter your relationship"
                     />
                  </InputGroup>
               </div>
               <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                  <InputGroup className="">
                     <InputGroup.Text className="bg-transparent">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1.5 4.41667C1.5 14.4038 9.59618 22.5 19.5833 22.5C20.0339 22.5 20.4807 22.4835 20.923 22.4511C21.4306 22.414 21.6844 22.3954 21.9155 22.2623C22.1068 22.1522 22.2883 21.9569 22.3842 21.758C22.5 21.5179 22.5 21.2378 22.5 20.6777V17.3908C22.5 16.9197 22.5 16.6842 22.4225 16.4823C22.354 16.304 22.2428 16.1452 22.0986 16.0198C21.9353 15.878 21.7139 15.7975 21.2713 15.6365L17.5299 14.276C17.0149 14.0887 16.7574 13.9951 16.513 14.011C16.2976 14.025 16.0902 14.0985 15.9141 14.2234C15.7143 14.365 15.5733 14.6 15.2914 15.0699L15.2914 15.0699L14.3333 16.6667C11.2418 15.2666 8.73555 12.757 7.33333 9.66667L8.93007 8.70862C9.40003 8.42665 9.635 8.28566 9.7766 8.08591C9.90146 7.90976 9.97498 7.70243 9.989 7.48698C10.0049 7.24265 9.91125 6.98512 9.72396 6.47006L9.72396 6.47005L8.36348 2.72875C8.20251 2.28606 8.12201 2.06471 7.98015 1.90145C7.85485 1.75724 7.69604 1.64601 7.51769 1.57753C7.31578 1.5 7.08026 1.5 6.6092 1.5H3.32235C2.76219 1.5 2.48211 1.5 2.24198 1.61579C2.04309 1.7117 1.84783 1.89318 1.73765 2.08454C1.60463 2.31558 1.58604 2.56939 1.54887 3.07701C1.51648 3.51934 1.5 3.96608 1.5 4.41667Z" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                     </InputGroup.Text>
                     <FormControl
                        className="rounded-3 border-0"
                        type="number"
                        placeholder="Enter mobile number"
                     />
                  </InputGroup>
               </div>
               <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                  <InputGroup className="">
                     <InputGroup.Text className="bg-transparent">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M17.8116 16.988L18.3309 21.0125C18.4078 21.5927 18.4462 21.8828 18.5647 22.1317C18.6695 22.3519 18.8192 22.5478 19.0042 22.7068C19.2132 22.8865 19.483 22.9998 20.0227 23.2263L20.8397 23.5694C21.6383 23.9047 22.0376 24.0723 22.4201 24.0597C22.7571 24.0485 23.0838 23.9402 23.3607 23.7478C23.675 23.5295 23.8951 23.1565 24.3352 22.4105L25.0136 21.2606C18.4842 14.8271 9.41032 14.8939 2.97656 21.4235L3.67214 22.5633C4.12325 23.3027 4.3488 23.6724 4.66628 23.8861C4.94603 24.0744 5.27423 24.1779 5.61139 24.184C5.99401 24.191 6.3908 24.0175 7.18437 23.6704L7.77612 23.4116C8.38789 23.1441 8.69377 23.0103 8.91746 22.7968C9.11516 22.6081 9.26592 22.3758 9.35767 22.1184C9.46148 21.8271 9.45902 21.4932 9.45408 20.8255L9.42601 17.2629M5.66842 7C7.78583 4.84008 10.7365 3.5 14.0001 3.5C17.2637 3.5 20.2144 4.84008 22.3318 7M19.2176 10.5C17.9359 9.06792 16.0732 8.16667 14.0001 8.16667C11.9269 8.16667 10.0642 9.06792 8.78248 10.5" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </InputGroup.Text>
                     <FormControl
                        className="rounded-3 border-0"
                        type="number"
                        placeholder="Enter telephone number"
                     />
                  </InputGroup>
               </div>
               <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                  <InputGroup className="">
                     <InputGroup.Text className="bg-transparent">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M3.5 10.4997C3.5 10.4997 6.65 13.9997 14 13.9997C21.35 13.9997 24.5 10.4997 24.5 10.4997M9.1 22.1663H18.9C20.8602 22.1663 21.8403 22.1663 22.589 21.7849C23.2475 21.4493 23.783 20.9139 24.1185 20.2553C24.5 19.5066 24.5 18.5265 24.5 16.5663V11.433C24.5 9.47282 24.5 8.49273 24.1185 7.74404C23.783 7.08547 23.2475 6.55004 22.589 6.21448C21.8403 5.83301 20.8602 5.83301 18.9 5.83301H9.1C7.13982 5.83301 6.15972 5.83301 5.41103 6.21448C4.75247 6.55004 4.21703 7.08547 3.88148 7.74404C3.5 8.49273 3.5 9.47282 3.5 11.433V16.5663C3.5 18.5265 3.5 19.5066 3.88148 20.2553C4.21703 20.9139 4.75247 21.4493 5.41103 21.7849C6.15972 22.1663 7.13982 22.1663 9.1 22.1663Z" stroke="#00B094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </InputGroup.Text>
                     <FormControl
                        className="rounded-3 border-0"
                        type="email"
                        placeholder="Enter email address"
                     />
                  </InputGroup>
               </div>
               <div className="d-flex flex-column">
                  <Button variant="success" className="rounded-4 my-3 mx-5">Save</Button>
               </div>
            </Modal.Body>
         </Modal>

      </>
   );
};

export default Admin;
