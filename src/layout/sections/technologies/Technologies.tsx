import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Technologie} from "./technologie/Technologie.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.tsx";


export const Technologies = () => {

    return (

        <StyledTechnologies>

            <Container>
            <StyledHeader>Technologies</StyledHeader>
            <FlexWrapper direction={'column'}>
                <Technologie title={"Html"} widthOfFill={"90%"}  height={"18px"} />
                <Technologie title={"CSS/StyledComponents/MUI"} widthOfFill={"85%"}  height={"18px"}/>
                <Technologie title={"React"} widthOfFill={"90%"} height={"18px"}/>
                <Technologie title={"ReduxToolkit/RTK Query"} widthOfFill={"80%"} height={"18px"}/>
                <Technologie title={"Next JS"} widthOfFill={"60%"} height={"18px"}/>


            </FlexWrapper>
            <SecondStyledHeader>Additional technologies and skills</SecondStyledHeader>
            <FlexWrapper justify={"center"} gap="50px">
                <Icon iconId={"html"} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"css"} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>

                <Icon iconId={"js"} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"react"} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"gittech"} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>

                <Icon iconId={"figma"} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"gitRed"} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>


            </FlexWrapper>

            </Container>


        </StyledTechnologies>

    )
}

const StyledTechnologies = styled.section`
    min-height: 100vh;
    padding: 100px 0px 170px 0px;
`
const StyledHeader = styled.h2`
    color: #ffff;
    margin-bottom: 70px;
    font-weight: 600;
    font-size: 46px;
`

const SecondStyledHeader = styled.h2`
    color: #ffff;
    font-weight: 600;
    font-size: 46px;
    margin: 120px 0 70px 0;
    text-align: center;

`