import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Icon} from "../../components/icon/Icon.tsx";

export const Header = () => {


    return (
        <StyledHeader>
            <Logo />
            <Menu/>
            <FlexWrapper justify="space-around">
                <Icon iconId={"telegram"} height={"100%"}  viewBox={"0 0 50 50"}></Icon>
                <Icon iconId={"git"}  height={"70%"} viewBox={"0 0 100 100"}></Icon>
                <Icon iconId={"linkedIn"} height={"100%"} viewBox={"0 0 50 50"}></Icon>
            </FlexWrapper>


        </StyledHeader>

    );

}


const StyledHeader = styled.header`

    background-color: black;
    display: flex;
    justify-content: space-between;

`