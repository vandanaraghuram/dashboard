import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Assignments.css";
function Assignments() {
  return (
    <div
      className="assignment p-3"
      style={{
        width: "304px",
        height: "370px",
        borderRadius: "10px",
        border: "1px solid #D9D9D9",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontFamily: "plus jakarta sans",
          fontWeight: "600",
        }}
      >
        Assignments{" "}
        <span style={{ fontSize: "16px", fontWeight: "500", color: "#737373" }}>
          {" "}
          (12){" "}
        </span>{" "}
      </div>
      <div className=" d-flex flex-row gap-3 mt-3">
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "3px",
            backgroundColor: "#148B47",
          }}
        >
          <i className="fa-solid fa-check" style={{ color: "#ffffff" }}></i>
        </div>
        <div>
          <p style={{ fontWeight: "600" }}>2/5 Completed</p>
        </div>
      </div>

      <Row className="mt-3 gap-3">
        <Col md={1} lg={1}>
          <label class="container">
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>
        </Col>

        <Col md={6} lg={6}>
          <div>
            <p className="plan"
              style={{
                fontSize: "14px",
                fontWeight: "800",
                fontFamily: "Inter",
                lineHeight: "5px",
              }}
            >
              Lesson Plan
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Inter",
                color: "#737373",
                lineHeight: "5px",
              }}
            >
              01 Sep 2022
            </p>
          </div>
        </Col>

        <Col>
          <div className="pass">
            <p
              style={{
                fontSize: "14px",
                fontWeight: "800",
                fontFamily: "Inter",
                lineHeight: "5px",
              }}
            >
              PASS
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Inter",
                color: "#737373",
                lineHeight: "5px",
              }}
            >
              Grade
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mt-3 gap-3">
        <Col md={1} lg={1}>
          <label class="container">
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>
        </Col>

        <Col md={6} lg={6}>
          <div>
            <p  className="plan"
              style={{
                fontSize: "14px",
                fontWeight: "800",
                fontFamily: "Inter",
                lineHeight: "5px",
              }}
            >
              Philosophy
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Inter",
                color: "#737373",
                lineHeight: "5px",
              }}
            >
              01 Sep 2022
            </p>
          </div>
        </Col>

        <Col>
          <div className="pass">
            <p
              style={{
                fontSize: "14px",
                fontWeight: "800",
                fontFamily: "Inter",
                lineHeight: "5px",
              }}
            >
              90/100
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Inter",
                color: "#737373",
                lineHeight: "5px",
              }}
            >
              Grade
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mt-3 gap-3">
        <Col md={1} lg={1}>
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </Col>

        <Col md={6} lg={6}>
          <div>
            <p  className="plan"
              style={{
                fontSize: "14px",
                fontWeight: "800",
                fontFamily: "Inter",
                lineHeight: "5px",
              }}
            >
              Yoga Mudra
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Inter",
                color: "#737373",
                lineHeight: "5px",
              }}
            >
              03 Sep 2022
            </p>
          </div>
        </Col>

        <Col>
          <div className="pass">
            <p
              style={{
                fontSize: "14px",
                fontWeight: "800",
                fontFamily: "Inter",
                lineHeight: "5px",
              }}
            >
              0/100
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Inter",
                color: "#737373",
                lineHeight: "5px",
              }}
            >
              To Do
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mt-3 gap-3">
        <Col md={1} lg={1}>
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </Col>

        <Col md={6} lg={6}>
          <div>
            <p  className="plan"
              style={{
                fontSize: "14px",
                fontWeight: "800",
                fontFamily: "Inter",
                lineHeight: "5px",
              }}
            >
              Mock Test
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Inter",
                color: "#737373",
                lineHeight: "5px",
              }}
            >
              06 Sep 2022
            </p>
          </div>
        </Col>

        <Col>
          <div className="pass">
            <p
              style={{
                fontSize: "14px",
                fontWeight: "800",
                fontFamily: "Inter",
                lineHeight: "5px",
              }}
            >
              0/100
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Inter",
                color: "#737373",
                lineHeight: "5px",
              }}
            >
              To Do
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Assignments;
