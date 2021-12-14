import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import FeedbackForm from "./pages/FeedbackForm/FeedbackForm";

function App() {
  return (
    <Router>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to={"/tutorials"} className="navbar-brand">
            Feedback App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/feedback-form"} className="nav-link">
                  FeedbackForm
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <div className="container mt-3">
        <Switch>
          <Route
            exact
            path={["/", "/feedback-form"]}
            component={FeedbackForm}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
