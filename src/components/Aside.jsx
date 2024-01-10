
import React, { useEffect, useState } from 'react'
import './Aside.css'
import { Col } from 'react-bootstrap'


function Aside() {


  const[userId,setUserId]=useState(null)

  useEffect(()=>{
    const loggedUser=()=>{
      const luser=localStorage.getItem('user')
      setUserId(luser)
    }
    loggedUser()
  },[])


  return (
    <Col className='asides' md={4} lg={2} style={{ borderRight: "1px solid #E7E7E7" }}>
    <div className="d-flex align-items-center justify-content-start gap-3">
      <div
        style={{
          width: "60px",
          height: "60px",
          backgroundColor: "#D9D9D9",
          borderRadius:"100px"
        }}
      ></div>
      <div className='names'>
      <p style={{ fontSize: "10px" , lineHeight:'5px'}}>{userId}</p>
        <h5 style={{ fontSize: "18px",lineHeight:'5px' }}>Kalyani Khona </h5>
        
        <a
          style={{
            textDecoration: "none",
            color: "#8c8c8c",
            fontSize: "14px",
            textAlign: "center",
            lineHeight:'10px'
          }}
        >
          View Profile  {" "}
        </a>
      </div>
    </div>

    <div className="d-flex align-items-start mt-5">
      <ol style={{ listStyle: "none" }}>
        <li style={{ color: "#FF5956" }}>
          <i
            className="fa-solid fa-house"
            style={{ color: "#FF5956" }}
          ></i>
          <div className='btn active'
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginLeft: "8px",
              textDecoration:'none'
            }}
          >
            {" "}
            Home
          </div>
        </li>

        <li className="mt-3" style={{ color: "black" }}>
          <i
            className="fa-regular fa-comment"
            style={{ color: "black" }}
          ></i>
          <div className='btn'
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginLeft: "8px",
              textDecoration:'none'
            }}
          >
            {" "}
            Messages
          </div>
        </li>

        <li className="mt-3" style={{ color: "black" }}>
          <i className="fa-solid fa-book" style={{ color: "black" }}></i>
          <div className='btn'
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginLeft: "8px",
              textDecoration:'none'
            }}
          >
            {" "}
            E-Library
          </div>
        </li>

        <li className="mt-3" style={{ color: "black" }}>
          <i
            className="fa-regular fa-calendar-days"
            style={{ color: "black" }}
          ></i>
          <div className='btn'
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginLeft: "8px",
              textDecoration:'none'
            }}
          >
            {" "}
            Calendar
          </div>
        </li>

        <li className="mt-3" style={{ color: "black" }}>
          <i className="fa-solid fa-gear" style={{ color: "black" }}></i>
          <div className='btn'
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginLeft: "8px",
              textDecoration:'none'
            }}
          >
            {" "}
            Settings
          </div>
        </li>

        <li className="mt-3" style={{ color: "black" }}>
          <i
            className="fa-solid fa-circle-info"
            style={{ color: "black" }}
          ></i>
          <div className='btn'
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginLeft: "8px",
              textDecoration:'none'
            }}
          >
            {" "}
            Support
          </div>
        </li>
      </ol>
    </div>
    
  </Col>
  )
}

export default Aside