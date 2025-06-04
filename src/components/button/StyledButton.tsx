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

    background: linear-gradient(
            to right,
            #13ADC7 0%,
            #6978D1 67%,
            #945DD6 100%
    );
    color: #ffff;


    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 0 24px;
    transition: all 0.4s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 0 20px rgba(147, 93, 214, 0.6),
        0 0 40px rgba(19, 173, 199, 0.4);
    }

    &::before {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        z-index: -1;
        background: linear-gradient(
                to right,
                #13ADC7 0%,
                #6978D1 67%,
                #945DD6 100%
        );
        border-radius: ${props => props.borderRadius};
        opacity: 0;
        transition: opacity 0.4s ease;
        filter: blur(8px);
    }

    &:hover::before {
        opacity: 1;
    }

    &:active {
        transform: translateY(-2px);
        box-shadow: 0 0 10px rgba(147, 93, 214, 0.5);
    }

    



`