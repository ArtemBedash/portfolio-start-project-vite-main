import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Project} from "./project/Project.tsx";
import project from "../../../assets/images/img_project.webp"
import {Container} from "../../../components/Container.tsx";

export const Projects = () => {


    return (


        <StyledProjects>
            <Container>
                <StyledHeader>Projects</StyledHeader>
                <FlexWrapper gap={"42px"} wrap={"wrap"}>

                    <Project
                        src={project}
                        title={"PROJECT"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
                    </Project>

                    <Project
                        src={project}
                        title={"PROJECT"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
                    </Project>

                    <Project
                        src={project}
                        title={"PROJECT"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
                    </Project>

                    <Project
                        src={project}
                        title={"PROJECT"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
                    </Project>




                </FlexWrapper>

            </Container>

        </StyledProjects>


    )
}


const StyledProjects = styled.section`
    
    padding: 100px 150px 140px 150px;

`
const StyledHeader = styled.h2`
    color: #ffff;
    margin-top: 0;
    font-weight: 600;
    font-size: 46px;
    margin-bottom: 70px;
`