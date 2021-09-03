import React from 'react';
import AboutMeStyled from './StyledAbout';
import {MainLayout} from '../../Styles/Layout'
import Title from '../../components/title/Title'
import ImageSection from '../../components/imagesection/ImageSection'

function About() {
    return (
        <MainLayout>
        <AboutMeStyled>
            <Title title={"About Me"} span={"About Me"} />
            <ImageSection />
            {/* <ServicesSection /> */}
        </AboutMeStyled>
        </MainLayout>
    )
}

export default About
