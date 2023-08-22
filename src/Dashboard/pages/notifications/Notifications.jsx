import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuid } from 'uuid';
import Widget from "../../components/Widget/Widget";


function Notifications() {
  const state = {
    options: {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
    },
  };

  const addSuccessNotification = () =>
    toast.success(
      "Showing success message was successful!",
      state.options
    );



  const addErrorNotification = () => {
    let id = uuid();
    toast.error(
      "Showing success message was successful!",
      state.options,
      {toastId: id }
    );
  };

  
    return (
      <div>
        <h1 className="page-title">
          Messages - <span className="fw-semi-bold">Notifications</span>
        </h1>
        <Widget title={<h6> Messenger </h6>} close collapse settings>
          <Row>
            <Col lg="4" xs="12">
              <h5 className="mt-0 mt-md-2 mt-lg-0">Notification Types</h5>
              <p>
                Different types of notifications for lost of use cases. Custom
                classes are also supported.
              </p>
              
              <p className="mb-3">
                <Button
                  color="danger"
                  id="show-error-message"
                  onClick={addErrorNotification}
                >
                  Error + Retry Message
                </Button>
              </p>
              <p>
                <Button
                  color="success"
                  id="show-success-message"
                  onClick={addSuccessNotification}
                >
                  Success Message
                </Button>
              </p>
            </Col>
          </Row>
        </Widget>
      </div>
    );
  
}

export default Notifications;
