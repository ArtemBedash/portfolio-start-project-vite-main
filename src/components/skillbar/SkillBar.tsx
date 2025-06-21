import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

type SkillBarPropsType = {
    widthOfFill?:string;
    height?:string;
    width?:string;

}



export const SkillBar = (props:SkillBarPropsType) => {
    return (
        <SkillBarr width={props.width} height={props.height}>
            <Fill widthOfFill={props.widthOfFill} />
        </SkillBarr>
    );
};


 const SkillBarr = styled.div<SkillBarPropsType>`
     height: ${props => props.height};
     width: ${props => props.width || "100%"};
     background-color: #162950;
     border-radius: 10px;
     margin-bottom: 10px;
     overflow: hidden;

     // @media ${Theme.media.tablet} {
     //     max-width: 100%;
     // }
 `;

const Fill = styled.div<SkillBarPropsType>`
    height: 100%;
    width: ${props => props.widthOfFill || "100%"};
    background: linear-gradient(
            to right,
            #13ADC7 0%,
            #6978D1 67%,
            #945DD6 100%
    );

`;