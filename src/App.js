import { Fragment } from "react";
import "./App.css";
import "./components/navbar/Navbar";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/sign_up/sign_up";

function App() {
  const apiCall = (data, method, url) => {
    let config = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    return fetch(url, config);
  };
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Route exact path="/">
          <h1>Hello World this is "/"</h1>
        </Route>
        <Route exact path="/login">
          <Login apiCall={apiCall} />
        </Route>
        <Route exact path="/signup">
          <Signup apiCall={apiCall} />
        </Route>
      </Router>
    </Fragment>
  );
}

export default App;
