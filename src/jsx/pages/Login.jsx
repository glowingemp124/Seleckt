import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminlogin, reset } from "../../features/auth/authSlice";
import Spinner from "../components/Spinner";
import img from "../../images/logo-full.png";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    timezone: timeZone,
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && user) {
      navigate("/home");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userdata = {
      email: formData.email,
      password: formData.password,
      timezone: formData.timezone,
    };
    dispatch(adminlogin(userdata));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row justify-content-center h-100 align-items-center h-80">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <Link to="/login">
                        <img src={img} alt="" />
                      </Link>
                    </div>
                    <h4 className="text-center mb-4 text-white">
                      Sign in your account
                    </h4>
                    <form onSubmit={onSubmit}>
                      <div className="form-group">
                        <label className="mb-1 text-white">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          value={email}
                          onChange={onChange}
                          required
                        />
                      </div>
                      Incorrent Email/Password Combinition
                      <div className="form-group">
                        <label className="mb-1 text-white">
                          <strong>Password</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="inputPassword"
                          value={password}
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div className="form-row d-flex justify-content-between mt-4 mb-2">
                        <div className="form-group">
                          <div className="custom-control custom-checkbox ml-1 text-white">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="basic_checkbox_1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="basic_checkbox_1"
                            >
                              Remember my preference
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <Link
                            className="text-white"
                            to="/page-forgot-password"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                      </div>

                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn bg-white text-primary btn-block"
                        >
                          Sign Me In
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
                      <p className="text-white">
                        Don't have an account?
                        <Link className="text-white" to="/adminpage-register">
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
