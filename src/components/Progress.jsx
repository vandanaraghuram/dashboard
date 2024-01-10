import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
function Progress() {
  const now = 25;

  return (
    <div className="mt-5">
      <p style={{ fontSize: "15px", fontFamily: "Inter" }}>25% Completed</p>
      <ProgressBar
        variant="danger"
        now={now}
        label={`${now}%`}
        visuallyHidden
      />
    </div>
  );
}

export default Progress;
