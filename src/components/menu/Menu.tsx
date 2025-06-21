import styled, {keyframes} from "styled-components";
import {Theme} from "../../styles/Theme.ts";

const menuItems = [
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Technologies",
        href: "technologies"
    },
    {
        title: "Expirience",
        href: "expirience"
    }]

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                {menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <StyledLink href={`#${item.href}`}>
                            {item.title}
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

    @media ${Theme.media.tablet} {

        display: none;

    }


`

const moveGradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 200% 50%;
    }
`

export const StyledLink = styled.a`
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #fff;
    position: relative;
    text-decoration: none;
    padding: 4px 12px;
    transition: color 0.3s ease;

    //&:hover {
    //    color: #945DD6; 
    //}

    &::before {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 8px;
        background: linear-gradient(
                270deg,
                #13ADC7,
                #6978D1,
                #945DD6,
                #13ADC7
        );
        background-size: 400% 400%;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
        animation: none;
    }

    &:hover::before {
        opacity: 1;
        animation: ${moveGradient} 3s linear infinite;
    }
`


const ListItem = styled.li`



`
