import React from "react";
import SmallTitleStyled from './StyledSmallTitle'

function SmallTitle({ icon, title }) {
  return (
    <SmallTitleStyled>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleStyled>
  );
}


export default SmallTitle;