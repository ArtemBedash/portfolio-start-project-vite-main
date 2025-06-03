import styled from "styled-components";
import {SkillBar} from "../../../components/skillbar/SkillBar.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Expirience = () => {
    return (
        <StyledExpirience>
            <StyledHeader>Expirience</StyledHeader>
            <FlexWrapper justify="space-around">

            <FlexWrapper direction="column">
                <StyledYears>2015</StyledYears>
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut
                    labore et dolore magna aliqua.</StyledParagraph>
            </FlexWrapper>
            <FlexWrapper direction="column">
                <StyledYears>2015</StyledYears>
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut
                    labore et dolore magna aliqua.</StyledParagraph>
            </FlexWrapper>
            <FlexWrapper direction="column">
                <StyledYears>2015</StyledYears>
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut
                    labore et dolore magna aliqua.</StyledParagraph>
            </FlexWrapper>
            <FlexWrapper direction="column">
                <StyledYears>2015</StyledYears>
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut
                    labore et dolore magna aliqua.</StyledParagraph>
            </FlexWrapper>
            </FlexWrapper>


            {/*<SkillBar width={"100%"} height={"8px"}/>*/}


        </StyledExpirience>
    );
};

const StyledExpirience = styled.section`
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
`

