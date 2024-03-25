import * as React from "react";

import { request, setAuthHeader } from "../../config/axiosConfig";
import AuthContent from "./AuthContent";
import Login from "../login/MainLogin";

export default class AppContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentToShow: "login",
    };
  }

  onLogin = (e, username, password) => {
    e.preventDefault();
    request("POST", "/login", {
      login: username,
      password: password,
    })
      .then((response) => {
        setAuthHeader(response.data.token);
        this.setState({ componentToShow: "messages" });
      })
      .catch((error) => {
        setAuthHeader(null);
        this.setState({ componentToShow: "login" });
      });
  };

  onRegister = (event, firstName, lastName, username, password) => {
    event.preventDefault();
    request("POST", "/register", {
      firstName: firstName,
      lastName: lastName,
      login: username,
      password: password,
    })
      .then((response) => {
        setAuthHeader(response.data.token);
        this.setState({ componentToShow: "messages" });
      })
      .catch((error) => {
        setAuthHeader(null);
        this.setState({ componentToShow: "login" });
      });
  };

  render() {
    return (
      <>
        <p></p>
        {this.state.componentToShow === "login" && (
          <Login onLogin={this.onLogin} onRegister={this.onRegister} />
        )}
        {this.state.componentToShow === "messages" && <AuthContent />}
      </>
    );
  }
}
