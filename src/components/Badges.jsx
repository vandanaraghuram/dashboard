import React from "react";
import { Badge } from "react-bootstrap";

function Badges() {
  return (
    <div className=" mt-5">
      <i className="fa-solid fa-clock ms-3" style={{ color: "#e66b19" }}>
        {" "}
        <span
          style={{
            color: "#8c8c8c",
            fontSize: "14px",
            fontFamily: "Inter",
          }}
        >
          12 Week
        </span>{" "}
      </i>
      <i className="fa-solid fa-video ms-3" style={{ color: "#37a444" }}>
        {" "}
        <span
          style={{
            color: "#8c8c8c",
            fontSize: "14px",
            fontFamily: "Inter",
          }}
        >
          35 Lesson
        </span>{" "}
      </i>
      <Badge className="bg-dark w-25 ms-3">HYBRID</Badge>
    </div>
  );
}

export default Badges;
