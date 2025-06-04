import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

export const IconList = () => {
    return (

        <StyledList>
            <StyledItem>
                <SocialIconLink>
                    <Icon iconId={"telegram"}></Icon>
                </SocialIconLink>
            </StyledItem>

            <StyledItem>

                <SocialIconLink>
                    <Icon iconId={"git"} height={"70%"} viewBox={"0 0 100 100"}></Icon>
                </SocialIconLink>

            </StyledItem>

            <StyledItem>
                <SocialIconLink>
                    <Icon iconId={"linkedIn"}></Icon>
                </SocialIconLink>
            </StyledItem>

        </StyledList>

    );
};


const StyledList = styled.ul`

    display: flex;
`

const StyledItem = styled.li``

const SocialIconLink = styled.a`
    color: white;
    font-weight: bold;
`
