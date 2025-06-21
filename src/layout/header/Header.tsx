import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {IconList} from "../../components/iconlist/IconList.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {Theme} from "../../styles/Theme.ts";

export const Header = () => {


    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <SocialIconLink href="">

                        <Logo/>
                        <Name>Portfolio</Name>

                    </SocialIconLink>

                    <MenuWrapper>
                        <Menu/>
                        <MobileMenu/>

                    </MenuWrapper>
                    <IconWrap>
                        <IconList/>
                    </IconWrap>



                </FlexWrapper>


            </Container>


        </StyledHeader>

    );

}


const StyledHeader = styled.header`

    background: #0F1624;
    padding: 25px 0;
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
    overflow: visible;
`

const Name = styled.span`
    margin-left: 10px;
    font-weight: 500;
    font-size: 30px;
`
const MenuWrapper = styled.div`
    margin-top: 15px;
`
const IconWrap = styled.div`
    margin-top: 10px;
    @media ${Theme.media.tablet} {
        
        display: none;
    }
`



