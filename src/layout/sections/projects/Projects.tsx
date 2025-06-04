import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Project} from "./project/Project.tsx";
import Acoustic from "../../../assets/images/Projects/acoustic.jpg"
import {Container} from "../../../components/Container.tsx";
import Guitar from "../../../assets/images/Projects/guitar-fender-strat-2d4a6b-1024.jpg"
import Trombone from "../../../assets/images/Projects/trombon.jpeg"
import Harp from "../../../assets/images/Projects/harp.jpg"
export const Projects = () => {


    return (


        <StyledProjects>
            <Container>
                <StyledHeader>Projects</StyledHeader>
                <FlexWrapper gap={"42px"} wrap={"wrap"}>

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

`
const StyledHeader = styled.h2`
    color: #fff;
    margin-top: 0;
    font-weight: 600;
    font-size: 46px;
    margin-bottom: 70px;
`