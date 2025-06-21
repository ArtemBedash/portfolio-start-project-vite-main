import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

export const IconList = () => {
    return (

        <StyledList>
            <StyledItem>
                <SocialIconLink href="https://github.com/ArtemBedash/" >

                    <Icon iconId={"git"} viewBox={"0 0 32 32"} width={"35px"} height={"35px"}/>

                </SocialIconLink>
            </StyledItem>

            <StyledItem>

                <SocialIconLink href={"https:/linkedin.com/in/artem-bedash-b13688348"}>

                    <Icon iconId={"linkedIn"} viewBox={"0 0 32 32"} width={"35px"} height={"35px"}/>

                </SocialIconLink>

            </StyledItem>

            <StyledItem>
                <SocialIconLink href={"https://t.me/andothersband"}>

                    <Icon iconId={"telegram"} width={'40px'} height={'35px'} viewBox={'0 0 35 30'}/>

                </SocialIconLink>
            </StyledItem>

        </StyledList>

    );
};


const StyledList = styled.ul`

    display: flex;
    
`

const StyledItem = styled.li`
    transition: transform 0.2s ease-in-out;
    transform-origin: center;

    & + & {
        margin-left: 25px;
    }
    &:hover{
        transform: scale(1.05);
        box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
        cursor: pointer;
    }
`

const SocialIconLink = styled.a`
    color: white;
    font-weight: bold;
    

`
