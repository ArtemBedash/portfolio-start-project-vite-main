import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import styled, {keyframes} from "styled-components";
import {IconList} from "../../components/iconlist/IconList.tsx";
import {Container} from "../../components/Container.tsx";
import {Theme} from "../../styles/Theme.ts";

export const Footer = () => {
    return (
        <StyledFooter id={"footer"}>
            <Container>

                <FlexWrapper justify="space-between" mobileJustify={"space-between"}  mobileDirection={"column-reverse"} >

                    <FlexWrapper direction="column">
                        <PhoneNumber>Call me:</PhoneNumber>
                        <StyledContactsLink href="tel:+1234567890">11-11111-111</StyledContactsLink>
                    </FlexWrapper>

                    <FlexWrapper direction="column" >
                        <Email>Email:</Email>
                        <StyledContactsLink href="mailto:example@mail.com">example@mail.com</StyledContactsLink>
                    </FlexWrapper>
                    <IconContainer>
                        <IconList/>
                    </IconContainer>

                </FlexWrapper>

                <CopyrightWrapper>
                    <Copyright>(c) all rights are reserved to their respective owners</Copyright>
                </CopyrightWrapper>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #0F1624;
    padding: 40px 0;

    @media ${Theme.media.tablet} {
        padding: 20px 0;
    }

`

const PhoneNumber = styled.h4`
    color: white;
    font-weight: 600;
    font-size: 22px;
    max-width: 130px;
    @media ${Theme.media.tablet} {
        margin-top: 20px;
    }
`

const Email = styled.h4`
    color: white;
    font-weight: 600;
    font-size: 22px;
    max-width: 130px;
    @media ${Theme.media.tablet} {
        margin-top: 20px;
    }
    
   

`

const moveGradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 200% 50%;
    }
`

const StyledContactsLink = styled.a`
    font-weight: 600;
    font-size: 22px;
    color: white;
    transition: background-color 0.3s ease;


    &:hover {

        background: linear-gradient(
                270deg,
                #13ADC7,
                #6978D1,
                #945DD6,
                #13ADC7
        );
        background-size: 200%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        animation: ${moveGradient} 3s linear infinite;
    }


`

const IconContainer = styled.div`
margin-top: 20px;
    
`


const Copyright = styled.small`
    color: white;
    text-align: center;
    
`
const CopyrightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
    padding-top: 50px;
`

