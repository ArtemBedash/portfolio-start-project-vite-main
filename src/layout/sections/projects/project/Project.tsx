import styled from "styled-components";
import {StyledButton} from "../../../../components/button/StyledButton.tsx";
import {Theme} from "../../../../styles/Theme.ts";
import {SkillBar} from "../../../../components/skillbar/SkillBar.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type ProjectPropsType = {

    title: string;
    text: string;
    src: string;


}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src}/>
            <FlexWrapper direction={"column"} align={"center"} >
                <Title>{props.title}</Title>
                <SkillBar width={"300px"} height={"4px"}/>
            </FlexWrapper>

            <Text>{props.text}</Text>
            <StyledButton width={"200px"} borderRadius={"83px"} height={'60px'}>Look it up</StyledButton>


        </StyledWork>
    );
};


const StyledWork = styled.div`

    background-color: ${Theme.colors.primaryBg};
    width: calc(50% - 21px);
    max-width: 550px;
    border: 1px solid #a39d9d;
    border-radius: 50px 0;
    height: auto;
    padding: 25px 25px 40px 25px;


`
const Image = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 24px 8px 8px 8px;
    margin-bottom: 40px;

`
const Title = styled.h3`
    font-weight: 600;
    font-size: 30px;
    line-height: 89%;
    color: ${Theme.colors.font};
    margin-bottom: 25px;


`
const Text = styled.p`
    color: ${Theme.colors.font};
    margin: 40px 0 50px;
`
