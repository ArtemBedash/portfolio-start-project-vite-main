import styled, {css, keyframes} from "styled-components";
import {Theme} from "../../../styles/Theme.ts";
import {useState} from "react";

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
        href: "expirienceMob"
    }]

export const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {

        setIsOpen(!isOpen)
    }


    return (
        <StyledMobileMenu>
            <BurgerButton onClick={handleOpen} isOpen={isOpen}>
               <span></span>
            </BurgerButton>

            <MobileMenuWrapper isOpen={isOpen}>
                <ul>
                    {menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <StyledLink onClick={handleOpen} href={`#${item.href}`}>
                                {item.title}
                            </StyledLink>
                        </ListItem>;
                    })}

                </ul>


            </MobileMenuWrapper>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`


    display: none;
    
    @media ${Theme.media.tablet} {
        display: block;

    }



`

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: black;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 50;
    display: none;
    

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;

    `
    }
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`

    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 90;


    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: white;
        position: absolute;
        left: 40px;
        bottom: 50px;


        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);

        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: white;
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);


            `}
        }
    


        &::after {

            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: white;
            position: absolute;
            transform: translateY(10px);
            z-index:9999999999;
            
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);

                width: 36px;

            `}

        }
        
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
