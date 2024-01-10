import React from "react";
import { Col,Row } from "react-bootstrap";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Cards from "../components/Cards";
import Assignments from "../components/Assignments";
import Attendance from "../components/Attendance";
import Badges from "../components/Badges";
import Calender from "../components/Calender";
import Progress from "../components/Progress";
import "./home.css";

function Home() {
  return (
    <div>
      <Header></Header>
      <div className="main" style={{ paddingLeft: "50px" }}>
        <Row className="p-3 mt-5">
          <Aside></Aside>

          <Col xs={8} md={8} lg={10} className="first ps-5">
            <h2 style={{ fontWeight: "700", fontFamily: "Inter" }}>Home</h2>
            <Cards></Cards>

            <div
              className="maintwo d-flex flex-row gap-2"
              style={{ marginTop: "50px", marginLeft: "15px" }}
            >
              <div className="threediv d-flex flex-column">
                <div
                  style={{
                    borderRadius: "16px",
                    backgroundColor: "#FFF8F8",
                    padding: "20px",
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "600",
                      fontSize: "25px",
                      fontFamily: "Inter",
                    }}
                  >
                    Ongoing Courses{" "}
                  </h1>

                  <div
                    className="teacher p-3 d-flex flex-row"
                    style={{
                      borderRadius: "16px",
                      border: "1px solid #E7E7E7",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      className="greybox"
                      style={{
                        width: "141px",
                        height: "290px",
                        borderRadius: "12px",
                        backgroundColor: "#C4C4C4",
                      }}
                    ></div>
                    <div className="data px-4">
                      <h1
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "600",
                          fontSize: "24px",
                          lineHeight: "32px",
                        }}
                      >
                        900 Hour Teacher Training
                      </h1>

                      <Badges></Badges>

                      <Progress></Progress>

                      <div
                        className="mt-4"
                        style={{ border: "1px dotted #D9D9D9", width: "395px" }}
                      ></div>
                      <div className="d-flex flex-row  align-items-center justify-content-evenly mt-3">
                        <div
                          style={{
                            color: "#FCA311",
                            fontSize: "12px",
                            fontFamily: "Inter",
                            fontWeight: "600",
                          }}
                        >
                          NEXT CLASS DUE ON 23 JUNE 2023
                        </div>
                        <div>
                          <button
                            className="btn btn-md text-white"
                            style={{ width: "130px" }}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="twodiv d-flex flex-row gap-5 mt-3">
                  <Assignments></Assignments>
                  <Attendance></Attendance>
                </div>
              </div>

              <Calender></Calender>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
