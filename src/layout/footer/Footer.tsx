import {Icon} from "../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify="space-between">
                <PhoneNumber>Call me:<br/>1111-111-11</PhoneNumber>
                <Email>e-mail:<br/>jdjdhj@kjjhk.cd</Email>
                <FlexWrapper>
                    <SocialIconLink>
                        <Icon iconId={"telegram"}></Icon>
                    </SocialIconLink>

                    <SocialIconLink>
                        <Icon iconId={"git"} height={"70%"} viewBox={"0 0 100 100"}></Icon>
                    </SocialIconLink>
                    <SocialIconLink>
                        <Icon iconId={"linkedIn"}></Icon>
                    </SocialIconLink>
                </FlexWrapper>
            </FlexWrapper>
            <Copyright> (c) all rights are reserved to their respective owners</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #0F1624;
    height: 30vh;
`

const PhoneNumber = styled.span`
    color: white;
`

const Email = styled.span`
    color: white;
`


const SocialIconLink = styled.a``

const Copyright = styled.small`
    color: white;
`

