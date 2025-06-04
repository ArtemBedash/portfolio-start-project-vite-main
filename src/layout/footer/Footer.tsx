import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {IconList} from "../../components/iconlist/IconList.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify="space-between">

                <FlexWrapper direction="column">
                    <PhoneNumber>Call me:</PhoneNumber>
                    <StyledContactsLink href="tel:+1234567890">11-11111-111</StyledContactsLink>
                </FlexWrapper>

                    <FlexWrapper direction="column">
                        <Email>text me</Email>
                        <StyledContactsLink href="mailto:example@mail.com">example@mail.com</StyledContactsLink>
                    </FlexWrapper>

                 <IconList/>
                </FlexWrapper>
                <Copyright> (c) all rights are reserved to their respective owners</Copyright>
        </StyledFooter>
);
};

const StyledFooter = styled.footer`
background-color: #0F1624;
height: 30vh;
`

const PhoneNumber = styled.h4`
color: white;
`

const Email = styled.h4`
color: white;
`

const StyledContactsLink = styled.a`


`



const Copyright = styled.small`
color: white;
`

