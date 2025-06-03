import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {Container} from "../../components/Container.tsx";

export const Header = () => {


    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <SocialIconLink href="">
                        <Logo/>
                        Portfolio
                    </SocialIconLink>


                    <Menu/>
                    <FlexWrapper justify="space-around">
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

            </Container>


        </StyledHeader>

    );

}


const StyledHeader = styled.header`

    background: #0F1624;
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

`

const SocialIconLink = styled.a`
    color: white;
    font-weight: bold;
    display: flex;
`
