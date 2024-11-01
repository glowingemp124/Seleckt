
import { Link, useNavigate } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import avatar from "../../../images/avatar/1.jpg";
import { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const Header = ({ onNote, toggle, onProfile, onNotification }) => {

   const dynamicStyle = {
      color: 'blue',
      backgroundColor: 'lightgray',
      padding: '10px',
      borderRadius: '5px'
   };

   const navigate = useNavigate();
   function logOut() {
      localStorage.removeItem('user');
      navigate("/logout");
   }

   let user = JSON.parse(localStorage.getItem('user'));
   let accessToken;
   if (!user || user === undefined || user === null) {
      localStorage.removeItem('user');
      navigate("admin/login");

   }
   else {
      accessToken = user.accesstoken;
   }
   let userName = user?.name;
   let userImage = user?.image;
   const [userInfo] = useState({
      token: accessToken,
      name: userName,
      image: userImage,
   });

   let path = window.location.pathname.split("/");
   let name = path[path.length - 1].split("-");
   let filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
   let finalName = filterName.includes("app")
      ? filterName.filter((f) => f !== "app")
      : filterName.includes("ui")
         ? filterName.filter((f) => f !== "ui")
         : filterName.includes("uc")
            ? filterName.filter((f) => f !== "uc")
            : filterName.includes("basic")
               ? filterName.filter((f) => f !== "basic")
               : filterName.includes("form")
                  ? filterName.filter((f) => f !== "form")
                  : filterName.includes("table")
                     ? filterName.filter((f) => f !== "table")
                     : filterName.includes("page")
                        ? filterName.filter((f) => f !== "page")
                        : filterName.includes("email")
                           ? filterName.filter((f) => f !== "email")
                           : filterName.includes("ecom")
                              ? filterName.filter((f) => f !== "ecom")
                              : filterName.includes("chart")
                                 ? filterName.filter((f) => f !== "chart")
                                 : filterName.includes("editor")
                                    ? filterName.filter((f) => f !== "editor")
                                    : filterName;

   return (
      <div className="header">
         <div className="header-content">
            <nav className="navbar navbar-expand">
               <div className="collapse navbar-collapse justify-content-between">
                  <div className="header-left">
                     <li className="nav-item">
                        <div class="container " style={{ border: '1px solid #cccccc', borderRadius: '20px', }}>
                           <div class="d-flex align-items-center rounded-5 bg-transparent">
                              <span class="icon "><i class="fas fa-search text-success "></i>
                              </span>
                              <input type="text" class="form-control border-0 bg-transparent" placeholder="Search something here.." />
                           </div>
                        </div>
                     </li>
                  </div>

                  <ul className="navbar-nav header-right">

                     <li className="nav-item dropdown mx-2">
                        <a className="nav-link bell bell-link" href="#" onClick={() => onNote()}>
                           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0026 28.3333H9.34328C7.2459 28.3333 6.19721 28.3333 5.97657 28.1705C5.72868 27.9875 5.66811 27.8795 5.64127 27.5726C5.61738 27.2994 6.26012 26.2477 7.54562 24.1443C8.87286 21.9726 9.99986 18.8104 9.99986 14.3333C9.99986 11.858 11.0534 9.48401 12.9288 7.73367C14.8042 5.98333 17.3477 5 19.9999 5C22.652 5 25.1956 5.98333 27.0709 7.73367C28.9463 9.48401 29.9999 11.858 29.9999 14.3333C29.9999 18.8104 31.1269 21.9726 32.4541 24.1443C33.7396 26.2477 34.3823 27.2994 34.3584 27.5726C34.3316 27.8795 34.271 27.9875 34.0231 28.1705C33.8025 28.3333 32.7538 28.3333 30.6564 28.3333H24.9999M15.0026 28.3333L14.9999 30C14.9999 32.7614 17.2384 35 19.9999 35C22.7613 35 24.9999 32.7614 24.9999 30V28.3333M15.0026 28.3333H24.9999" stroke="#00B094" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>


                        </a>
                     </li>
                     <li className="nav-item dropdown mr-4">
                        <a className="nav-link  ai-icon" href="#" role="button" data-toggle="dropdown" onClick={() => onNotification()}>
                           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M32.3338 30C32.9729 28.7499 33.3333 27.3337 33.3333 25.8333C33.3333 20.7707 29.2293 16.6667 24.1667 16.6667C19.1041 16.6667 15 20.7707 15 25.8333C15 30.8959 19.1041 35 24.1667 35L35 35C35 35 33.3333 33.3333 32.3572 30.0486M31.4166 20C31.5806 19.1922 31.6667 18.3562 31.6667 17.5C31.6667 10.5964 26.0702 5 19.1667 5C12.2631 5 6.66667 10.5964 6.66667 17.5C6.66667 18.961 6.91731 20.3634 7.37794 21.6667C9.1683 26.6862 5 30 5 30H15.8333" stroke="#00B094" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="28" cy="8" r="6" fill="#FF0000" />
                           </svg>


                        </a>
                        <div
                           className={`dropdown-menu dropdown-menu-right ${toggle === "notification" ? "show" : ""
                              }`}
                        >
                           <PerfectScrollbar
                              id="DZ_W_Notification1"
                              className={` widget-media dz-scroll p-3 height500 ${toggle === "notification"
                                 ? "ps ps--active-y"
                                 : ""
                                 }`}
                           >
                              <ul className="timeline">
                                 <li>
                                    <div className="timeline-panel">
                                       <div className="media mr-2">
                                          <img
                                             alt="avatar"
                                             className="rounded-circle"
                                             width="50"
                                             src={avatar}
                                             onError={({ currentTarget }) => {
                                                currentTarget.onerror = null; // prevents looping
                                                currentTarget.src = `${process.env.REACT_APP_IMAGEBASEURL}noImg.png`;
                                             }}
                                          />
                                       </div>
                                       <div className="media-body">
                                          <h6 className="mb-1">
                                             Dr sultads Send you Photo
                                          </h6>
                                          <small className="d-block">
                                             29 July 2020 - 02:26 PM
                                          </small>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="timeline-panel">
                                       <div className="media mr-2 media-info">
                                          KG
                                       </div>
                                       <div className="media-body">
                                          <h6 className="mb-1">
                                             Resport created successfully
                                          </h6>
                                          <small className="d-block">
                                             29 July 2020 - 02:26 PM
                                          </small>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="timeline-panel">
                                       <div className="media mr-2 media-success">
                                          <i className="fa fa-home"></i>
                                       </div>
                                       <div className="media-body">
                                          <h6 className="mb-1">
                                             Reminder : Treatment Time!
                                          </h6>
                                          <small className="d-block">
                                             29 July 2020 - 02:26 PM
                                          </small>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="timeline-panel">
                                       <div className="media mr-2">
                                          <img
                                             alt="avatar"
                                             width="50"
                                             src={avatar}
                                          />
                                       </div>
                                       <div className="media-body">
                                          <h6 className="mb-1">
                                             Dr sultads Send you Photo
                                          </h6>
                                          <small className="d-block">
                                             29 July 2020 - 02:26 PM
                                          </small>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="timeline-panel">
                                       <div className="media mr-2 media-danger">
                                          KG
                                       </div>
                                       <div className="media-body">
                                          <h6 className="mb-1">
                                             Resport created successfully
                                          </h6>
                                          <small className="d-block">
                                             29 July 2020 - 02:26 PM
                                          </small>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="timeline-panel">
                                       <div className="media mr-2 media-primary">
                                          <i className="fa fa-home"></i>
                                       </div>
                                       <div className="media-body">
                                          <h6 className="mb-1">
                                             Reminder : Treatment Time!
                                          </h6>
                                          <small className="d-block">
                                             29 July 2020 - 02:26 PM
                                          </small>
                                       </div>
                                    </div>
                                 </li>
                              </ul>
                           </PerfectScrollbar>
                           <a className="all-notification" href="#">
                              See all notifications{" "}
                              <i className="ti-arrow-right"></i>
                           </a>
                        </div>
                     </li>
                     <li
                        className={`nav-item dropdown header-profile ${toggle === "profile" ? "show" : ""
                           }`}
                        onClick={() => onProfile()}
                        style={{ width: '150%' }}
                     >
                        <a
                           className="nav-link"
                           href="#"
                           role="button"
                           data-toggle="dropdown"
                           style={{ width: '100%' }}
                        >
                           <img src={`${process.env.REACT_APP_IMAGEBASEURL}${userImage}`}
                              onError={({ currentTarget }) => {
                                 currentTarget.onerror = null; // prevents looping
                                 currentTarget.src = `${process.env.REACT_APP_IMAGEBASEURL}noImg.png`;
                              }} width="20" alt="" />
                           <div className="header-info">
                              {/* <span className="text-black" title={user && user.name}></span>
                              <p className="fs-12 mb-0">{userInfo.name}</p> */}
                           </div>
                        </a>
                        <div
                           className={`dropdown-menu dropdown-menu-right ${toggle === "profile" ? "show" : ""
                              }`}
                        >
                           <Link
                              to="/profile"
                              className="dropdown-item ai-icon"
                           >
                              <svg
                                 id="icon-user1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="text-primary"
                                 width="18"
                                 height="18"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                 <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                              <span className="ml-2">Profile </span>
                           </Link>
                           <Link
                              to="/email-inbox"
                              className="dropdown-item ai-icon"
                           >
                              <svg
                                 id="icon-inbox"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="text-success"
                                 width="18"
                                 height="18"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                 <polyline points="22,6 12,13 2,6"></polyline>
                              </svg>
                              <span className="ml-2">Inbox </span>
                           </Link>
                           <Link
                              to="/login"
                              className="dropdown-item ai-icon"
                           >
                              <svg
                                 id="icon-logout"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="text-danger"
                                 width="18"
                                 height="18"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                 <polyline points="16 17 21 12 16 7"></polyline>
                                 <line x1="21" y1="12" x2="9" y2="12"></line>
                              </svg>
                              <span className="ml-2" onClick={logOut}>Logout </span>
                           </Link>
                        </div>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </div>

   )
};

export default Header;
