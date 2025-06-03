import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

const menuItems = ["Projects", "Technologies", "About me"]

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                {menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <StyledLink href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </StyledLink>
                    </ListItem>;
                })}

            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

`

const StyledLink = styled.a`

    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #fff;
`



const Mask = styled.span`
position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    outline: 1px solid red;
    color: ${Theme.colors.font};
    
    & + & {
    top: 50%;
        span {
            display: inline-block;
            trasform: translateY(-50%);
        }
}
`
const ListItem = styled.li`
    
    position: relative;
    
    &:hover {
        ${Mask} {
            
            transform: skewX(12deg) translateX(5px);
        }
        
        & + & {
            transform: skew(12deg) translateX(-5px);
        }
    }
`
