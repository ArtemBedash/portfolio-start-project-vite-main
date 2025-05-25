import styled from "styled-components";

type StyledButtonPropsType = {

    width:string;

}

export const StyledButton = styled.button<StyledButtonPropsType>`

    width: ${props => props.width};
    height: 60px;
    background: linear-gradient(
            to right,
            #13ADC7 0%,
            #6978D1 67%,
            #945DD6 100%
    );
    color:#ffff;


`