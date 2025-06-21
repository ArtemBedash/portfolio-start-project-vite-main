import { Icon } from "../icon/Icon.tsx";
import styled from "styled-components";

export const Logo = () => {
    return (
        <LogoLink href="">
            <Icon iconId={"logo"} width={"47px"} height={"47px"} viewBox={"0 0 47 48"} />
        </LogoLink>
    );
};



const LogoLink = styled.a`
  padding-left: 0;
  margin: 0;
  line-height: 0;
    

`;

