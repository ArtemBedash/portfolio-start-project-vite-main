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
`
const Title = styled.h3`
    margin: 0;
    color: white;
`


// const SkillBar = styled.div`
//   height: 18px;
//   width: 100%;
//   background-color: #162950;
//   border-radius: 10px;
//   margin-bottom: 10px;
//   overflow: hidden;
// `;
//
// const Fill = styled.div<{width:string}>`
//     height: 100%;
//     width:${props => props.width || "100%"};
//     background: linear-gradient(
//             to right,
//             #13ADC7 0%,
//             #6978D1 67%,
//             #945DD6 100%
//     );
//
// `;
//
