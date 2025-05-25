import styled from "styled-components";
import {StyledButton} from "../../../../components/button/StyledButton.tsx";

type ProjectPropsType = {

    title: string;
    text: string;
    src: string;



}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <StyledButton width={"200px"}>Look it up</StyledButton>




        </StyledWork>
    );
};


const StyledWork = styled.div`
    
    background-color: #43657a;
    max-width: 550px;
    width: 100%;
    
`
const Image =styled.img`
    width: 500px;
    height: 280px;
    object-fit: cover;

`
const Title =styled.h3`


`
const Text =styled.p`


`

