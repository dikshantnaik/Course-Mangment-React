import React, { Fragment, useState } from "react";

import "./../login/login.css";
// apiCall(ca);
const SERVER_URL = "https://coursemangmentapi.herokuapp.com/register";
// const SERVER_URL = "http://127.0.0.1:5000/register";
const Sign_up = (props) => {
  const [email, setemail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const make_req = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      alert("Password Dosent Match");
    } else {
      props
        .apiCall(
          { username: username, password: password, email: email },
          "post",
          SERVER_URL
        )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data["resp"]);
          if (data["resp"] === "Registered") {
            alert("Registered ");
          } else if (data["resp"]["error"] === "username Exists") {
            alert("Username Exists");
          } else {
            console.log(data["resp"["error"]]);
          }
        });
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form onSubmit={(e) => make_req(e)} className="box">
                <h1>Sign-Up</h1>

                <input
                  type="text"
                  name=""
                  placeholder="UserName"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="text"
                  name=""
                  placeholder="Email"
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type="text"
                  name=""
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  name=""
                  placeholder="Retype Password"
                  onChange={(e) => setCpassword(e.target.value)}
                />
                <a className="forgot text-muted" href="/">
                  Forgot password?
                </a>
                <input type="submit" name="" value="Register" href="#" />
                <div className="col-md-12">
                  <ul className="social-network social-circle">
                    <li>
                      <a href="/" className="icoFacebook" title="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="icoTwitter" title="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="icoGoogle" title="Google +">
                        <i className="fab fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
      <script src="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </Fragment>
  );
};
export default Sign_up;
