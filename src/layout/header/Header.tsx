import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {IconList} from "../../components/iconlist/IconList.tsx";

export const Header = () => {


    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <SocialIconLink href="">
                        <Logo/>
                        <Name>Portfolio</Name>

                    </SocialIconLink>


                    <Menu/>
                    <IconList/>
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

const Name = styled.span`
    font-weight: 500;
    font-size: 30px;
`




