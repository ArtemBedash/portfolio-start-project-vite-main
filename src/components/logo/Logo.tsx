import { Icon } from "../icon/Icon.tsx";
import styled from "styled-components";

export const Logo = () => {
    return (
        <LogoLink href="">
            <Icon iconId={"logo"} viewBox={"0 0 100 100"} />
        </LogoLink>
    );
};

const LogoLink = styled.a`
  padding: 0;
  margin: 0;
  line-height: 0;
`;