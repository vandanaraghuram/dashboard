import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './Header.css'
function Header() {
  return (
    <Navbar className='navbar-expand' expand="lg" bg="white" data-bs-theme="light">
    <Container>
      <Nav
        className="nav"
        style={{
          fontWeight: "500",
          fontSize: "18px",
          fontFamily: "Inter, sans-serif;",
          color: "#000000",
          lineHeight: "19px",

        }}
      >
        <Nav.Link className="navitem text-dark" href="#home">
          Community
        </Nav.Link>
        <Nav.Link className="navitem text-dark" href="#home">
          Courses
        </Nav.Link>
        <Nav.Link className="navitem text-dark" href="#home">
          My Classes
        </Nav.Link>
        <Nav.Link className="navitem text-dark p-1 d-flex flex-row gap-3" href="#home">
          <div
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "#F1F4F9",
              borderRadius: "100px",
            }}
          >
            <i
              className="fa-solid fa-magnifying-glass p-2"
              style={{ color: "#000000", height: "30px", width: "30px" }}
            ></i>
          </div>

          <div
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "#F1F4F9",
              borderRadius: "100px",
            }}
          >
            <i
              className="fa-regular fa-comment p-2"
              style={{ color: "#000000", height: "30px", width: "30px" }}
            ></i>
          </div>

          <div
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "#F1F4F9",
              borderRadius: "100px",
            }}
          >
            <i
              className="fa-regular fa-bell p-2"
              style={{ color: "#000000", height: "30px", width: "30px" }}
            ></i>
          </div>
        </Nav.Link>

        <Nav.Link className="navitem text-dark p-1" href="#home">
          <div style={{width:'80px',borderRadius:'100px', border:'1px'}}>

          
        <div style={{borderRadius:'100px', width:'36px', height:'36px', backgroundColor:'#FCECE1'}}>
        <p className="p-2">PP</p>
        </div>
         
          </div>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header