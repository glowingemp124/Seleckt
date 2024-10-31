import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getTAC, createTAC, reset } from "../../../features/settings/settingsSlice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import Spinner from "../../components/Spinner";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TermsAndConditions() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.auth);
   const [tac, setTAC] = useState("");

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
      dispatch(getTAC());

      return () => reset();
   }, [user, navigate, isError, isSuccess, message, dispatch]);
   const TACData = data?.body?.tac
   if (TACData !== undefined && tac === "") {
      setTAC(TACData)
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
                        <div className="row my-5">

                           <div className="col-lg-6">
                              <h1><b>Terms & Conditions</b></h1>
                           </div>

                           <div className="col-lg-6">
                              <button onClick={() => { dispatch(createTAC({ tac })); }} className="btn btn-md btn-success rounded-5 float-right">Save</button>
                           </div>

                        </div>
                        <div className="card">
                           <ReactQuill
                              modules={{ toolbar: toolbarOptions }}
                              theme="snow"
                              value={tac}
                              onChange={setTAC}
                           />
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

export default TermsAndConditions;
