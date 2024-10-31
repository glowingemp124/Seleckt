import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAbout, createAbout, reset } from "../../../features/settings/settingsSlice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import Spinner from "../../components/Spinner";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AboutUs() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.auth);
   const [about, setAbout] = useState("");

   const { data, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.settings
   );


   const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      [{ container: "#toolbar" }]
      ['clean']                                         // remove formatting button
   ];


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
      dispatch(getAbout());

      return () => reset();
   }, [user, navigate, isError, isSuccess, message, dispatch]);
   const AboutData = data?.body?.about
   if (AboutData !== undefined && about === "") {
      setAbout(AboutData)
   }

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
                        <div className="row">
                           <div className="col-xl-12">
                              <div className="row my-5">

                                 <div className="col-lg-6">
                                    <h1><b>About Us</b></h1>
                                 </div>

                                 <div className="col-lg-6">
                                    <button onClick={() => { dispatch(createAbout({ about })); }} className="btn btn-md btn-success rounded-5 float-right">Save</button>
                                 </div>

                              </div>

                              <div className="card">
                                 <ReactQuill modules={{ toolbar: toolbarOptions }} theme="snow" value={about} onChange={setAbout} />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
               </div>
            </span>
         )}
      </>
   );
}

export default AboutUs;
