import styled from "styled-components";
// import {SkillBar} from "../../../components/skillbar/SkillBar.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {SkillBar} from "../../../components/skillbar/SkillBar.tsx";


const expirience = [
    {year: 2015, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut"},
    {year: 2016, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut"},
    {year: 2017, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut"},
    {year: 2018, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut"},

]


export const Expirience = () => {
    return (
        <StyledExpirience>

            <Container>
                <StyledHeader>Expirience</StyledHeader>
                <FlexWrapper justify={'space-around'}>
                    {expirience.map((item, index) => (
                        <FlexWrapper direction={"column"} key={index}>
                            <StyledYears>{item.year}</StyledYears>
                        </FlexWrapper>
                    ))}
                </FlexWrapper>
                <SkillBar widthOfFill={"100%"} width={"100%"} height={"8px"}/>

                <FlexWrapper justify={'space-around'}>
                    {expirience.map((item, index) => (
                        <FlexWrapper direction={"column"} key={index}>
                            <StyledParagraph>{item.text}</StyledParagraph>
                        </FlexWrapper>
                    ))}
                </FlexWrapper>

            </Container>
        </StyledExpirience>
    );
};

const StyledExpirience = styled.section`

    padding: 100px 0 140px 0;
`

const StyledHeader = styled.h2`
    color: #ffff;
    font-weight: 600;
    font-size: 46px;
    margin-bottom: 70px;
`

const StyledYears = styled.span`
    color: white;
    text-align: center;
`

const StyledParagraph = styled.p`
    color: white;
    text-align: center;
`

