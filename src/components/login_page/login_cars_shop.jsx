import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/login_page/login.css";

export default function LoginCarsShop() {
  const [errorValue, seterrorValue] = useState("");
  const navigate = useNavigate();
  const baseURL = "http://localhost:5000/carsshops/login";
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const getFormValues = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  function setAuthToken(token) {
    localStorage.setItem('authToken', token);
  } 

  const gologin = (e) => {
    console.log(formValue);
    axios
      .post(baseURL, formValue)
      .then((res) => {
        if (res.data.error) {
          console.log(res.data);
          seterrorValue(res.data.error);
        } else {
          setAuthToken(res.data.token)
          console.log(res.data.id);
          navigate(`/dashboard`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, [errorValue]);
  return (
    <div class="login-container">
      <div class="row login-row">
        <div class="col-md-6 offset-md-3">
          <div class="card my-2">
            <div class="card-body cardbody-color p-lg-5">
              <div class="text-center">
                <img
                  src="/login.png"
                  class="img-fluid profile-image-pic img-thumbnail rounded-circle my-2"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div class="mb-3 input-1">
                <input
                  name="email"
                  type="text"
                  class="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                  onChange={getFormValues}
                />
              </div>
              <div class="mb-3 input-1">
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="password"
                  onChange={getFormValues}
                />
                <div className="text-center">
                  <span className="text-danger  fs-4">
                    {errorValue.toLocaleUpperCase()}
                  </span>
                </div>
              </div>
              <div class="text-center input-1">
                <button onClick={gologin} class="btn btn-color px-5 mb-5 w-100">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
