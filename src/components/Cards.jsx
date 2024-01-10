import React from 'react'

function Cards() {
  return (
    <div className="cards mt-4 d-flex flex-row flex-wrap ">
            <div
              style={{
                width: "230px",
                height: "94px",
                borderRadius: "16px",
                border: "1px solid #D9D9D9",
                marginTop:'15px',
                marginLeft:'15px'
                
              }}
            >
              <div className="d-flex align-items-center justify-content-center flex-row py-2">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100px",
                    backgroundColor: "#FCEFCD",
                  }}
                >
                  <i
                    className="fa-solid fa-check "
                    style={{ color: "#000000", marginTop:'11px', marginLeft:'11px'}}
                  ></i>
                </div>

                <div className="ms-4">
                  <h1 style={{ fontWeight: "600", fontFamily: "Inter" }}>4</h1>
                  <h3
                    style={{
                      fontWeight: "500",
                      fontFamily: "sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    OngoingCourse
                  </h3>
                </div>
              </div>
            </div>






            <div
              style={{
                width: "230px",
                height: "94px",
                borderRadius: "16px",
                border: "1px solid #D9D9D9",
                marginTop:'15px',
                marginLeft:'15px'
              }}
            >
              <div className="d-flex align-items-center justify-content-center flex-row py-2">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100px",
                    backgroundColor: "#E9FCF1",
                  }}
                >
                  <i
                    className="fa-solid fa-check "
                    style={{ color: "#06a220", marginTop:'11px', marginLeft:'11px' }}
                  ></i>
                </div>

                <div className="ms-4">
                  <h1 style={{ fontWeight: "600", fontFamily: "Inter" }}>4</h1>
                  <h3
                    style={{
                      fontWeight: "500",
                      fontFamily: "sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    Assignments
                  </h3>
                </div>
              </div>
            </div>




            <div
              style={{
                width: "230px",
                height: "94px",
                borderRadius: "16px",
                border: "1px solid #D9D9D9",
                marginTop:'15px',
                marginLeft:'15px'
              }}
            >
              <div className="d-flex align-items-center justify-content-center flex-row py-2">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100px",
                    backgroundColor: "#E0DAF2",
                    
                  }}
                >
                  <i
                    className="fa-solid fa-video"
                    style={{ color: "#592272", marginTop:'11px', marginLeft:'11px'}}
                  ></i>
                </div>

                <div className="ms-4">
                  <h1 style={{ fontWeight: "600", fontFamily: "Inter" }}>40h</h1>
                  <h3
                    style={{
                      fontWeight: "500",
                      fontFamily: "sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    Watch Time
                  </h3>
                </div>
              </div>
            </div>




            <div
              style={{
                width: "230px",
                height: "94px",
                borderRadius: "16px",
                border: "1px solid #D9D9D9",
                marginTop:'15px',
                marginLeft:'15px'
              }}
            >
              <div className="d-flex align-items-center justify-content-center flex-row py-2">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100px",
                    backgroundColor: "#FFF8F8",
                    
                  }}
                >
                  <i
                    className="fa-solid fa-file"
                    style={{ color: "#e96d07", marginTop:'11px', marginLeft:'12px'}}
                  ></i>
                </div>

                <div className="ms-4">
                  <h1 style={{ fontWeight: "600", fontFamily: "Inter" }}>4</h1>
                  <h3
                    style={{
                      fontWeight: "500",
                      fontFamily: "sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    Certificates
                  </h3>
                </div>
              </div>
            </div>

          </div>
  )
}

export default Cards