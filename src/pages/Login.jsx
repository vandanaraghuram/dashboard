import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Login.css";
import Loginwith from "../components/Loginwith";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [logInput, setLogInput] = useState({
    email: "",
    psw: "",
  });

  const [emailValid, setEmailValid] = useState(true);
  const [pswValid, setPswValid] = useState(true);

  const navigate = useNavigate();

  const loginData=(e)=>{
    e.preventDefault()
    const { name, value } = e.target
    if(name=='email'){
      if(value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        setEmailValid(true)
        setLogInput({...logInput, [name]:value})
      }
      else{
        setEmailValid(false)
        
      }
    }

    if(name=='psw'){
      if(value.match(/^[a-zA-Z0-9]/)){
        setPswValid(true)
        setLogInput({...logInput, [name]:value})
      }
      else{
        setPswValid(false)
        
      }
    }
    
  }
  console.log(logInput);


  const handleLogin=()=>{
    const {email,psw}=logInput
   if(email==="" || psw===""){
  alert("ALL FIELDS ARE REQUIRED")
   }
   else{
    localStorage.setItem("user",logInput.email)
    alert("LOGIN SUCCESSFUL")
    navigate('/home')
   }
  }

  return (
    <div>
         
      <Row>
        <Col>
          <section className="section1">
            <h2
              style={{
                fontWeight: "700",
                fontFamily: "Inter",
                fontSize: "32px",
                lineHeight: "36px",
              }}
            >
              Welcome to LMS
            </h2>
            <span
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "20px",
                fontFamily: "sans-serif",
                color: "#595959",
              }}
            >
              Your step to flexibility begins here
            </span>
            <div className="input">
              <input
                name="email"
               
                type="email"
                placeholder="Email address"
                className="p-3"
                style={{ borderRadius: "5px" }}
                onChange={(e) => { loginData(e) }}
              />
              <input
                name="psw"
                type="password"
                placeholder="Password"
                className="p-3"
                
                style={{ borderRadius: "5px" }}
                onChange={(e) => { loginData(e) }}
              />
            </div>

            <span className="mt-2" style={{ color: "#8C8C8C" }}>
              Forgot your password? <a href="">Clik here</a>
            </span>

            <button onClick={handleLogin} className="mt-4">Continue</button>

            {/* login with */}
            <Loginwith></Loginwith>
          </section>
        </Col>

        <Col></Col>
    
      </Row>
      
    </div>
    
  );
}

export default Login;
