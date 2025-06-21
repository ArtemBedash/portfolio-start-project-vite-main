import styled from "styled-components";
// import {SkillBar} from "../../../components/skillbar/SkillBar.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Container} from "../../../../components/Container.tsx";
import {SkillBar} from "../../../../components/skillbar/SkillBar.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {font} from "../../../../styles/Common.ts";
import {Theme} from "../../../../styles/Theme.ts";


const expirience = [
    {year: 2015, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut"},
    {year: 2016, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut"},
    {year: 2017, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut"},
    {year: 2018, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut"},

]


export const MobileExpirience = () => {
    return (
        <StyledExpirience id="expirienceMob" style={{backgroundColor:"#161D2A"}}>

            <Container>

                <StyledHeader>Expirience</StyledHeader>

                <FlexWrapper >

                <SkillBarContainer>



                    {expirience.map((_item, index) => (
                        <IconContainer key={index} style={{ top: `${(index * 180) }px` }}>
                            <Icon iconId="ellipse" width="25" height="25" viewBox="0 0 25 25" />
                        </IconContainer>))}


                    <SkillBar widthOfFill={"100%"} width={"8px"} height={"100%"}/>

                </SkillBarContainer>
                    <ItemsWrapper>
                        {expirience.map((item, index) => (
                            <Item key={index}>
                                <StyledYears>{item.year}</StyledYears>
                                <StyledParagraph>{item.text}</StyledParagraph>
                            </Item>
                        ))}
                    </ItemsWrapper>

                </FlexWrapper>






            </Container>
        </StyledExpirience>
    );
};

const StyledExpirience = styled.section`

    padding: 100px 0 140px 0;
    overflow-x: hidden;
    display: none;
    
    
    @media ${Theme.media.tablet} {

        display: block ;
    }
`

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 720px; 
  margin-left: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
    height: 180px;
`;

const StyledHeader = styled.h2`
    color: #ffff;
    margin-bottom: 70px;
    ${font({weight:600,Fmin:32,Fmax:46})}


`

const StyledYears = styled.span`
    color: white;
    text-align: left;
    //position: relative;
    font-weight: 600;
    font-size: 26px;

  
`

const StyledParagraph = styled.p`
    color: white;
    text-align: left;
    max-width: 300px;
    
    
    ${font({weight:500,Fmin:14,Fmax:18})}
`

const SkillBarContainer = styled.div`
    position: relative;
    margin-top: 5px;
    width: 25px;
    height: 720px;


    & > div {
        position: absolute;
        left: 12.5%;
        width: 75%;
    }


`;

const IconContainer = styled.div`
position: absolute;
    z-index:99;
    transform: translateX(-3px);
   
   

`