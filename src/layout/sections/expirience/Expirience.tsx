import styled from "styled-components";
// import {SkillBar} from "../../../components/skillbar/SkillBar.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {SkillBar} from "../../../components/skillbar/SkillBar.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {font} from "../../../styles/Common.ts";
import {Theme} from "../../../styles/Theme.ts";
import {MobileExpirience} from "./mobileExpirience/MobileExpirience.tsx";


const expirience = [
    {year: 2015, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut"},
    {year: 2016, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut"},
    {year: 2017, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut"},
    {year: 2018, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut"},

]


export const Expirience = () => {
    return (<>
        <StyledExpirience id="expirience">

            <Container>

                <StyledHeader>Expirience</StyledHeader>
                <FlexWrapper justify={'space-around'}>
                    {expirience.map((item, index) => (
                        <FlexWrapper direction={"column"} key={index}>
                            <StyledYears>{item.year}</StyledYears>
                        </FlexWrapper>
                    ))}

                </FlexWrapper>

                <SkillBarContainer>


                    {expirience.map((_item, index) => (
                        <IconContainer key={index} style={{left: `${(index + 0.5) * 25}%`}}>
                            <Icon iconId="ellipse" width="25" height="25" viewBox="0 0 25 25"/>
                        </IconContainer>))}


                    <SkillBar widthOfFill={"100%"} width={"100%"} height={"8px"}/>

                </SkillBarContainer>


                <FlexWrapper justify={'space-around'}>
                    {expirience.map((item, index) => (
                        <FlexWrapper direction={"column"} key={index}>
                            <StyledParagraph>{item.text}</StyledParagraph>
                        </FlexWrapper>
                    ))}
                </FlexWrapper>


            </Container>
        </StyledExpirience>

            <MobileExpirience/>

        </>
    );
};

const StyledExpirience = styled.section`

    padding: 100px 0 140px 0;
    overflow-x: hidden;
    
    @media ${Theme.media.tablet} {

        display: none;

    }
`

const StyledHeader = styled.h2`
    color: #ffff;
    margin-bottom: 70px;
    ${font({weight: 600, Fmin: 32, Fmax: 46})}


`

const StyledYears = styled.span`
    color: white;
    text-align: center;
    position: relative;
    font-weight: 600;
    font-size: 26px;


`

const StyledParagraph = styled.p`
    color: white;
    text-align: center;


    ${font({weight: 500, Fmin: 14, Fmax: 18})}
`

const SkillBarContainer = styled.div`
    position: relative;
    height: 30px;
    margin-top: 15px;

    & > div {
        position: absolute;
        left: 12.5%;
        width: 75%;
    }


`;

const IconContainer = styled.div`
    position: absolute;
    top: -30%;
    z-index: 9999999;
    transform: translateX(-5px);

`