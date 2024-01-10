import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import "./Calender.css";
import Dates from "./Dates";

function Calender() {
  return (
    <div
      className="calander"
      style={{
        width: "320px",
        height: "790px",
        borderRadius: "16px",
        border: "1px solid #D9D9D9 ",
      }}
    >
      <div
        style={{
          width: "312px",
          height: "127px",
          borderRadius: "10px",
          backgroundColor: "#FFF8F8",
          margin: "5px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            padding: "8px",
            fontFamily: "Plus Jakarta Sans",
            fontWeight: "600",
          }}
        >
          September 2023
        </h2>
        <Row className="dates p-2 gap-2">
          <Col className="coldate text-center p-3">
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Inter",
                lineHeight: "5px",
              }}
            >
              3
            </h3>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "5px",
              }}
            >
              mon
            </p>
          </Col>
          <Col className="coldate text-center p-3">
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Inter",
                lineHeight: "5px",
              }}
            >
              4
            </h3>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "5px",
              }}
            >
              tue
            </p>
          </Col>
          <Col className="coldate text-center p-3">
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Inter",
                lineHeight: "5px",
              }}
            >
              5
            </h3>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "500",

                lineHeight: "5px",
              }}
            >
              wed
            </p>
          </Col>
          <Col className="coldate text-center p-3">
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Inter",
                lineHeight: "5px",
              }}
            >
              6
            </h3>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "500",

                lineHeight: "5px",
              }}
            >
              thu
            </p>
          </Col>
        </Row>
      </div>
      
      <Dates></Dates>
    </div>
  );
}

export default Calender;
