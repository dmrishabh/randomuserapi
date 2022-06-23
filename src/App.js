import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";

import { Container, Row, Col } from "reactstrap";

import Axios from "axios";

const App = () => {
  const [details, setDetails] = useState({});
  // whenever we want to send a asynchronus request then use async and await
  const fetchDetails = async () => {
    // const response = await Axios.get("https://randomuser.me/api/");
    const { data } = await Axios.get("https://randomuser.me/api/");
    // console.log("RESPONSE:", data);
    // console.log("RESPONSE:", response);
    // console.log("RESPONSE:", response.data);
    // console.log("RESPONSE:", response.data.info);
    // console.log("RESPONSE:", response.data.info.version);
    const details = data.results[0];
    setDetails(details);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  function refreshPage() {
    window.location.reload();
  }
  return (
    <Container fluid className="p-4 App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <Card details={details} />
        </Col>
      </Row>
      <Row>
        <Col className="p-5">
          <button
            onClick={refreshPage}
            className="btn btn-primary"
            style={{
              color: "white",
              backgroundColor: "#fc466b",
              border: "none",
            }}
          >
            New User
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
