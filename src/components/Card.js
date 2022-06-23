import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "../App.css";

import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaBirthdayCake,
} from "react-icons/fa";
const Cards = ({ details }) => {
  //  designing a ui that can handel api
  const myImg = details.picture?.large;
  const title = details.name?.title;
  const firstName = details.name?.first;
  const lastName = details.name?.last;
  const city = details.location?.city;
  const phone = details.phone;
  const email = details.email;
  const dob = details.dob?.age;

  return (
    <div>
      <Card
        className="rounded"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          backgroundColor: "#00000000",
        }}
      >
        <CardBody className="text-center">
          <img
            src={myImg}
            alt="img"
            height="150"
            width="150"
            className="rounded-circle img-thumbnail border-danger"
          />
          <CardTitle className="text-white h2">
            Hey I'm
            <span className="pe-2 ps-2">{title}</span>
            <span className="pe-2">{firstName}</span>
            <span>{lastName}</span>
          </CardTitle>
          <CardText>
            <FaMapMarkedAlt className="me-2" />
            {city}
            <p>
              <FaPhone className="me-2" />
              {phone}
              <br />
              <FaEnvelope className="me-2" />
              {email}
              <br />
              <span className="bg-warning mt-2 btn text-center border border-primary rounded-pill text-white h2">
                <FaBirthdayCake className="me-2" />
                {dob}
              </span>
            </p>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
