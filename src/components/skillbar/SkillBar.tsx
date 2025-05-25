import styled from "styled-components";



export const SkillBar = (props:{width:string}) => {
    return (
        <SkillBarr>
            <Fill width={props.width}/>
        </SkillBarr>
    );
};


 const SkillBarr = styled.div`
  height: 18px;
  width: 100%;
  background-color: #162950;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const Fill = styled.div<{ width:string}>`
    height: 100%;
    width: ${props => props.width || "100%"};
    background: linear-gradient(
            to right,
            #13ADC7 0%,
            #6978D1 67%,
            #945DD6 100%
    );

`;