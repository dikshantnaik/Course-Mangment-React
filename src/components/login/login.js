import React, { Fragment, useState } from "react";
import "./login.css";
import Cookies from "universal-cookie";
import { useHistory } from "react-router";
const cookies = new Cookies();

// const SERVER_URL = "https://coursemangmentapi.herokuapp.com/register";
const SERVER_URL = "http://127.0.0.1:5000/login";
const Login = (props) => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const make_req = (e) => {
    e.preventDefault();
    props
      .apiCall({ username: username, password: password }, "post", SERVER_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data["token"]) {
          cookies.set("token", data["token"], { path: "/" });
          history.push("/");

          alert("Loged In ");
        } else if (data === "No user") {
          alert("No User Found ..Please Register");
        }
      });
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form onSubmit={(e) => make_req(e)} className="box">
                <h1>Login</h1>
                <h7> Please enter your login and password!</h7>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  name=""
                  placeholder="Username"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name=""
                  placeholder="Password"
                />
                <a className="forgot text-muted" href="/">
                  Forgot password?
                </a>
                <input type="submit" name="" value="Login" href="#" />
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
export default Login;
