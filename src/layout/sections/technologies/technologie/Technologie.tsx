import styled from "styled-components";
import {SkillBar} from "../../../../components/skillbar/SkillBar.tsx";

type TechnologiePropsType = {
    title: string;
    widthOfFill: string;
    height: string;


}


export const Technologie = (props: TechnologiePropsType) => {
    return (
        <StyledTechnologie>

            <Title>{props.title}</Title>
            <SkillBar widthOfFill={props.widthOfFill} height={props.height}/>
        </StyledTechnologie>


    );
};


const StyledTechnologie = styled.div`

    background-color: #0F1624;
    width: 100%;
    
    & + &{
        
        margin-top: 20px;
    }
`
const Title = styled.h3`
    color: white;
    margin-bottom: 5px;
    text-align: left;
`


