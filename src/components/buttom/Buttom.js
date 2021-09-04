import React from 'react'
import {ButtonsStyled,ButtonStyled} from './StyledButtom'

function Buttom({ filter, button }) {
    return (
        <ButtonsStyled>
        {button.map((but, i) => {
          return (
            <ButtonStyled key={i} onClick={() => filter(but)}>
              {but}
            </ButtonStyled>
          );
        })}
      </ButtonsStyled>
    )
}


export default Buttom
