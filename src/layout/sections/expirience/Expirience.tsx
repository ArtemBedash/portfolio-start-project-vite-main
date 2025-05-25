import styled from "styled-components";
import {SkillBar} from "../../../components/skillbar/SkillBar.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Expirience = () => {
    return (
        <StyledExpirience>
            <StyledHeader>Expirience</StyledHeader>

            <FlexWrapper justify="space-around">
                <StyledYears>2015</StyledYears>
                <StyledYears>2017</StyledYears>
                <StyledYears>2018</StyledYears>
                <StyledYears>2019</StyledYears>
                <StyledYears>2025</StyledYears>
            </FlexWrapper>
            <SkillBar width={"100%"} height={"8px"}/>
            <FlexWrapper justify="space-around">
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut
                    labore et dolore magna aliqua.</StyledParagraph>
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut
                    labore et dolore magna aliqua.</StyledParagraph>
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut
                    labore et dolore magna aliqua.</StyledParagraph>
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut
                    labore et dolore magna aliqua.</StyledParagraph>
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut
                    labore et dolore magna aliqua.</StyledParagraph>


            </FlexWrapper>

        </StyledExpirience>
    );
};

const StyledExpirience = styled.div`
    background-color: #161D2A;
`

const StyledHeader = styled.h2`
    color: #ffff;
    margin-top: 0;
    min-height: 50vh;
`

const StyledYears = styled.span`
    color: white;
`

const StyledParagraph = styled.p`
    color: white;
    font-family: Poppins;
    font-size: 18px;
`

