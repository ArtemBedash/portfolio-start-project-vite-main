import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Project} from "./project/Project.tsx";
import project from "../../../assets/images/img_project.webp"

export const Projects = () => {


    return (


        <StyledProjects>
            <StyledHeader>Projects</StyledHeader>
            <FlexWrapper justify="space-around">

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

        </StyledProjects>


    )
}


const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #4e367a;
`
const StyledHeader = styled.h2`
color:#ffff;
    margin-top: 0;
`