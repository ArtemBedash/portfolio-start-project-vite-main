import mainPhoto from '../../../assets/images/avatarMy.webp'
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
    padding-top: 80px;
`


const Photo = styled.img`
    width: 100%;
    max-width: 350px;
    height: auto;
    object-fit: cover;
    border-radius: 50px 0;
    background: linear-gradient(to right, #8643DC, #00C0FD);
    padding: 5px;
    background-clip: padding-box;



`

const MyInfo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 693px;
    padding: 200px 40px 200px 40px;
`

const MainTitle = styled.h1`
    color: white;
    font-weight: 600;
    font-size: 54px;
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    text-align: left;

`

const AboutMe = styled.p`
    
    margin: 15px 0 60px 5px;
    
    text-align: left;
   
    color: #bcbcbc;
`
