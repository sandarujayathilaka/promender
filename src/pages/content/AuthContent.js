import * as React from "react";
import { request, setAuthHeader } from "../../config/axiosConfig";

export default class AuthContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    request("GET", "/", {})
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setAuthHeader(null);
        } else {
          this.setState({ data: error.response.code });
        }
      });
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Backend response</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
