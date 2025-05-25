import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Technologie} from "./technologie/Technologie.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";


export const Technologies = () => {

    return (

        <StyledTechnologies>
            <StyledHeader>Technologies</StyledHeader>
            <FlexWrapper direction={'column'}>
                <Technologie title={"Html"} width={"70%"}/>
                <Technologie title={"CSS"} width={"60%"}/>
                <Technologie title={"StyledComponents"} width={"70%"}/>
            </FlexWrapper>
            <StyledHeader>Additional technologies and skills</StyledHeader>
            <FlexWrapper justify={"center"}>
                <Icon iconId={"figma"} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"git"} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"gitRed"} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>

            </FlexWrapper>


        </StyledTechnologies>

    )
}

const StyledTechnologies = styled.div`
    background-color: #0F1624;
    min-height: 100vh;
`
const StyledHeader = styled.h2`
    color: #ffff;
    margin-top: 0;
`