import mainPhoto from '../../../assets/images/avatarMy.webp'
import styled, {keyframes} from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {StyledButton} from "../../../components/button/StyledButton.tsx";
import {Container} from "../../../components/Container.tsx";
import {Theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";
// import {Icon} from "../../../components/icon/Icon.tsx";
// import Abstract from "../../../assets/images/drawing (1).png"

export const Main = () => {


    return (
        <StyledMain>
            <Container>
                <FlexWrapper   mobileDirection={"column-reverse"}>

                    <MyInfo>
                        <MainTitle>A Web Developer</MainTitle>
                        <AboutMe>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. </AboutMe>
                        <StyledButton  width="220px" borderRadius="83px" height="60px">Contact Me</StyledButton>
                    </MyInfo>

                    <Photo src={mainPhoto} alt=""/>


                </FlexWrapper>
            </Container>


        </StyledMain>


    );


};

const moveGradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`

const StyledMain = styled.section`
    display: flex;
    //min-height: 100vh;
    padding-top: 200px;
    padding-bottom: 125px;
    
    
    
    
    //padding: 125px 140px 125px 160px ;

    @media ${Theme.media.tablet} {
        padding-top: 110px;
    }


`


const Photo = styled.img`
    width: 100%;
    max-width: 350px;
    height: 450px;
    object-fit: cover;
    border-radius: 50px 0;
    background: linear-gradient(to right, #8643DC, #00C0FD);
    padding: 5px;
    background-clip: padding-box;
    overflow: auto;
    

    @media ${Theme.media.mobile} {

        max-width: 335px;
        height: 400px;

    }



`

const MyInfo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 693px;
    margin: 75px 85px 0 85px;
    width: 100%;
    
    @media ${Theme.media.tablet} {
        margin: 50px 10px 70px 10px;
        max-width: 345px;

    }


`

const MainTitle = styled.h1`
    color: white;
    //font-weight: 600;
    font-size: 54px;
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    text-align: left;

    background: linear-gradient(
            270deg,
            #13ADC7,
            #ffffff,
            #6978D1,
            #ffffff,
            #945DD6,
            #ffffff,
            #13ADC7
    );
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${moveGradient} 10s linear infinite;


    ${font({weight:600,Fmax: 54,Fmin:36})}

`

const AboutMe = styled.p`

    margin: 15px 0 60px 0px;

    text-align: left;
    color: #bcbcbc;
    font-weight: 500;
    font-size: 18px;
    
    @media ${Theme.media.mobile} {


        margin: 25px 0 40px 0px;

    }
`
