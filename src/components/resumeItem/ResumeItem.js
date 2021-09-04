import React from "react";
import ResumeItemStyled from "./StyledResumeItem";
function ResumeItem({ year, title, subTitle }) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
      </div>
    </ResumeItemStyled>
  );
}


export default ResumeItem;