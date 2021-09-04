import React from 'react'
import ProgressBarStyled from './StyledProgressBar'

function ProgressBar({title, text, width}) {
    return (
    <ProgressBarStyled>
      <h4>{title}</h4>
      <div className="progress-bar">
        <p>{text}</p>
        <div className="progress">
          <span style={{ width: width }}></span>
        </div>
      </div>
    </ProgressBarStyled>
    )
}

export default ProgressBar
