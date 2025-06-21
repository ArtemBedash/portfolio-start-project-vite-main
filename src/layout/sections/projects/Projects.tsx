import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Project} from "./project/Project.tsx";
import Acoustic from "../../../assets/images/Projects/acoustic.jpg"
import {Container} from "../../../components/Container.tsx";
import Guitar from "../../../assets/images/Projects/guitar-fender-strat-2d4a6b-1024.jpg"
import Trombone from "../../../assets/images/Projects/trombon.jpeg"
import Harp from "../../../assets/images/Projects/harp.jpg"
import {Theme} from "../../../styles/Theme.ts";
export const Projects = () => {


    return (


        <StyledProjects id="projects">
            <Container>
                <StyledHeader>Projects</StyledHeader>
                <FlexWrapper mobileGap={"30px"} gap={"42px"} wrap={"wrap"} mobileDirection={"column"}>

                    <Project
                        src={Guitar}
                        title={"Electric Guitar"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
                    </Project>

                    <Project
                        src={Trombone}
                        title={"Trombone"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
                    </Project>

                    <Project
                        src={Harp}
                        title={"Harp"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
                    </Project>

                    <Project
                        src={Acoustic}
                        title={"Acoustic Guitar"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
                    </Project>




                </FlexWrapper>

            </Container>

        </StyledProjects>


    )
}


const StyledProjects = styled.section`
    
    padding: 100px 0 140px 0;
    
    @media${Theme.media.tablet}{
        
        padding: 70px 15px;
    }
    
   

`
const StyledHeader = styled.h2`
    color: #fff;
    margin-top: 0;
    font-weight: 600;
    font-size: 46px;
    margin-bottom: 70px;
    max-width: 100%;
    text-align: left;
    @media ${Theme.media.tablet} {

        text-align: center;

    }`