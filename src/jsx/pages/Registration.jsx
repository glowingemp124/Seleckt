// import React from "react";
// import { Link } from "react-router-dom";
// import img from "../../images/logo-full.png";
// import axios from "axios";
// export const Registration = () => {
//   const [state, setState] = React.useState({
//     name: "",
//     email: "",
//     password: "",
//     // userType:"",
//     // deviceId:"",
//     // deviceType:"",
//     // timzeZone: "",
//     // status: ""
//   });

//   const hanldeChange = (e) => {
//     const { name, value } = e.target;
//     setState({
//       ...state,
//       [name]: value,
//     });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     console.log("submit", state);
//     let header = {
//       header: "Content-type:application/json",
//     };
//     const body = {
//       name: state.name,
//       email: state.email,
//       password: state.password,
//     };
//     let response = await axios.post(
//       "http://mockapi.glowingsoft.com/api/admin/signup",
//       body,
//       header
//     );
//     console.log(state, header);
//     //  console.log("response==>", response)/
//     console.log("response==>", response.token);
//     //  localStorage.setItem('session',JSON.stringify(response.token));
//   };
//   return (
//     <>
//       {console.log(state)}
//       <div className="row justify-content-center  align-items-center h-80">
//         <div className="col-md-6">
//           <div className="authincation-content">
//             <div className="row no-gutters">
//               <div className="col-xl-12">
//                 <div className="auth-form">
//                   <div className="text-center mb-3">
//                     <Link to="/">
//                       <img src={img} alt="" />
//                     </Link>
//                   </div>
//                   <h4 className="text-center mb-4 text-white">
//                     Sign up your account
//                   </h4>
//                   <form>
//                     <div className="form-group">
//                       <label className="mb-1 text-white">
//                         {" "}
//                         <strong>Name</strong>{" "}
//                       </label>
//                       <input
//                         type="name"
//                         value={state.name}
//                         className="form-control"
//                         name="name"
//                         onChange={hanldeChange}
//                         id="name"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label className="mb-1 text-white">
//                         {" "}
//                         <strong>Email</strong>{" "}
//                       </label>
//                       <input
//                         type="email"
//                         value={state.email}
//                         className="form-control"
//                         onChange={hanldeChange}
//                         name="email"
//                         id="email"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label className="mb-1 text-white">
//                         {" "}
//                         <strong>Password</strong>{" "}
//                       </label>
//                       <input
//                         type="password"
//                         value={state.password}
//                         className="form-control"
//                         name="password"
//                         onChange={hanldeChange}
//                         id="password"
//                       />
//                     </div>
//                     <div className="text-center mt-4">
//                       <button
//                         type="submit"
//                         className="btn bg-white text-primary btn-block"
//                         onClick={onSubmit}
//                       >
//                         {" "}
//                         Sign Me Up{" "}
//                       </button>
//                     </div>
//                   </form>
//                   <div className="new-account mt-3">
//                     <p className="text-white">
//                       Already have an account?{" "}
//                       <Link className="text-white" to="/login">
//                         Sign in
//                       </Link>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Registration;
