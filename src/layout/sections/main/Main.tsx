import mainPhoto from '../../../assets/images/avatar.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {StyledButton} from "../../../components/button/StyledButton.tsx";
import {Container} from "../../../components/Container.tsx";

export const Main = () => {


    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>


                    <MyInfo>
                        <MainTitle>A Web Developer</MainTitle>
                        <AboutMe>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. </AboutMe>
                        <StyledButton width="220px" borderRadius="83px" height="60px">Lets begin</StyledButton>

                    </MyInfo>

                    <Photo src={mainPhoto} alt=""/>
                </FlexWrapper>
            </Container>


        </StyledMain>


    );


};

const StyledMain = styled.section`
    display: flex;
    min-height: 100vh;
    margin-top: 90px;
`


const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    border-radius: 50px 0;
    background: linear-gradient(to right, #8643DC, #00C0FD);
    padding: 5px;
    background-clip: padding-box;




`

const MyInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 693px;
`

const MainTitle = styled.h1`
    color: white;
    font-weight: 600;
    font-size: 54px;
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

`

const AboutMe = styled.p`
   
    color: #bcbcbc;
`
