import React from "react";
import "./Attendance.css";
import { Col, Row } from "react-bootstrap";

function Attendance() {
  return (
    <div
      className="attendance  p-3"
      style={{
        
        borderRadius: "10px",
        border: "1px solid #D9D9D9",
      }}
    >
      <div className="d-flex flex-row align-content-between justify-content-between">
        <div
          style={{
            fontSize: "20px",
            fontFamily: "plus jakarta sans",
            fontWeight: "600",
          }}
        >
          Attendance{" "}
        </div>
        <div
          class="dropdown"
          style={{ fontSize: "16px", fontWeight: "500", color: "#737373" }}
        >
          <p style={{ fontSize: "15px" }}>
            Filter{" "}
            <i
              className="fa-solid fa-angle-down"
              style={{ color: "#858585" }}
            ></i>
          </p>
          <div className="dropdown-content">
            <a href="#">daily</a>
            <a href="#">monthly</a>
          </div>
        </div>
      </div>

<Row className="row gap-3 mt-4">
    <Col md={1} lg={1}>
        <div style={{width:'24px',height:'24px', borderRadius:'3px',border:'1px solid #4B2E85'}}>
        <i className="fa-solid fa-plus p-1" style={{color:'#5135b6'}}></i>
        </div>
    </Col>

    <Col md={7} lg={7}>
    <div>
            <p style={{fontSize:'14px', fontWeight:'800', fontFamily:'Inter', lineHeight:'5px'}}>Total Classes</p>
            <p style={{fontSize:'12px', fontWeight:'500', fontFamily:'Inter', color:'#737373', lineHeight:'5px'}}>Till 20 June 2023</p>
            </div>
    </Col>


    <Col>
        <div>
            <p style={{fontSize:'18px', fontWeight:'800', fontFamily:'Inter', lineHeight:'5px'}}>20</p>
            </div>
        </Col>
</Row>



<Row className="gap-3 mt-4">
    <Col md={1} lg={1}>
        <div style={{width:'24px',height:'24px', borderRadius:'3px',border:'1px solid #148B47', backgroundColor:'#E9FCF1'}}>
        <i className="fa-solid fa-check p-1" style={{color:'#22c335'}}></i>
        </div>
    </Col>

    <Col md={7} lg={7}>
    <div>
            <p style={{fontSize:'14px', fontWeight:'800', fontFamily:'Inter', lineHeight:'5px'}}>Class Attended</p>
            <p style={{fontSize:'12px', fontWeight:'500', fontFamily:'Inter', color:'#737373', lineHeight:'5px'}}>Till 20 June 2023</p>
            </div>
    </Col>


    <Col>
        <div>
            <p style={{fontSize:'18px', fontWeight:'800', fontFamily:'Inter', lineHeight:'5px'}}>10</p>
            <p style={{fontSize:'12px', fontWeight:'800', fontFamily:'Inter', lineHeight:'5px', color:'#148B47'}}>81%</p>
            </div>
        </Col>
</Row>



<Row className="gap-3 mt-4">
    <Col md={1} lg={1}>
        <div>
        <i className="fa-solid fa-triangle-exclamation p-1 fs-4" style={{color:'#D2402D'}}></i>
        </div>
    </Col>

    <Col md={7} lg={7}>
    <div>
            <p style={{fontSize:'14px', fontWeight:'800', fontFamily:'Inter', lineHeight:'5px'}}>Class Missed</p>
            <p style={{fontSize:'12px', fontWeight:'500', fontFamily:'Inter', color:'#737373', lineHeight:'5px'}}>Till 20 June 2023</p>
            </div>
    </Col>


    <Col>
        <div>
            <p style={{fontSize:'18px', fontWeight:'800', fontFamily:'Inter', lineHeight:'5px'}}>11</p>
            <p style={{fontSize:'12px', fontWeight:'800', fontFamily:'Inter', lineHeight:'5px', color:'#148B47'}}>2%</p>
            </div>
        </Col>
</Row>
    </div>
  );
}

export default Attendance;
