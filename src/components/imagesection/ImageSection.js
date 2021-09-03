import React from "react";
import ImageSectionStyled from "./StyledImgSection";
import resume from '../../asset/images/ImgHeader.jpg';
import PrimaryButton from '../primaryButtom/PrimaryButtom';

function ImageSection() {
    return (
<ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume" />
      </div>
      <div className="right-content">
        <div className="sub-title">
          <h4>
            Hi! My name is <span>Guillero Agusín Borquez</span>
          </h4>
        </div>
        <p className="paragraph">
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in 
        </p>
        <p className="paragraph">
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in 
        their exact original form,
        accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
        <p className="paragraph">
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in 
        their exact original form,
        </p>

        <PrimaryButton title={"Download Cv"} />
      </div>
    </ImageSectionStyled>
    )
}

export default ImageSection
