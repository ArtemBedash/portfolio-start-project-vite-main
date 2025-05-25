import styled from "styled-components";

type SkillBarPropsType = {
    width?:string;
    height?:string;

}



export const SkillBar = (props:SkillBarPropsType) => {
    return (
        <SkillBarr height={props.height}>
            <Fill width={props.width} />
        </SkillBarr>
    );
};


 const SkillBarr = styled.div<SkillBarPropsType>`
  height: ${props => props.height};
  width: 100%;
  background-color: #162950;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const Fill = styled.div<SkillBarPropsType>`
    height: 100%;
    width: ${props => props.width || "100%"};
    background: linear-gradient(
            to right,
            #13ADC7 0%,
            #6978D1 67%,
            #945DD6 100%
    );

`;