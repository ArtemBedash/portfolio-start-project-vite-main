import mainPhoto from '../../../assets/images/avatarMy.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {StyledButton} from "../../../components/button/StyledButton.tsx";

export const Main = () => {


    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>


                <div>
                    <MainTitle>A Web Developer</MainTitle>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                    <StyledButton width={"220px"}>Lets begin</StyledButton>

                </div>

                <Photo src={mainPhoto} alt=""/>
            </FlexWrapper>

        </StyledMain>


    );


};

const StyledMain = styled.div`
min-height: 100vh;
    background-color: #4d4283;
`



const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;

`

const MainTitle = styled.h1`



`