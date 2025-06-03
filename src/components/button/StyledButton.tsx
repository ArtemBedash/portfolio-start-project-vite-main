import styled from "styled-components";

type StyledButtonPropsType = {

    width?:string;
    height?:string;
    borderRadius?:string;

}

export const StyledButton = styled.button<StyledButtonPropsType>`

    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius};

    height: 60px;
    background: linear-gradient(
            to right,
            #13ADC7 0%,
            #6978D1 67%,
            #945DD6 100%
    );
    color: #ffff;


`