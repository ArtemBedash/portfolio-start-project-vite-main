import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";


type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?:string;
    wrap?:string;
    gap?:string;
    mobileDirection?:string;
    mobileWrap?:string;
    mobileGap?:string;
    position?:string;
    mobileAlign?:string;
    mobileTextAlign?:string;
    mobileJustify?:string;


}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};

    gap: ${props => props.gap || "0"};
    
    width: 100%;
    overflow: hidden;
    
    position: ${props => props.position};
    
    
    @media ${Theme.media.tablet} {
        flex-direction: ${props => props.mobileDirection };
        text-align: ${props => props.mobileTextAlign || "center"};
        align-items: ${props => props.mobileAlign || "center"};
        flex-wrap: ${props => props.mobileWrap};
        gap: ${props => props.mobileGap || "0"};
        mobileJustify: ${props => props.mobileJustify};




    }
    


`