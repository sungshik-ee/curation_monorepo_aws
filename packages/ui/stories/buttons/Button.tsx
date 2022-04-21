import React from "react";
import styled, {css} from "styled-components";
import {createGlobalStyle} from "styled-components";

const StyledFont = createGlobalStyle`
  @font-face {
    font-family: "yg-jalnan";
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
`;

const StyledButtonWrapper = styled.div`
  background-color: #c9c9c9;
  box-shadow: inset 0 3px 7px 0 rgba(6, 0, 1, 0.21);
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-size: 1.75rem;
  font-family: "yg-jalnan";
  min-width: 130px;
  padding: 0.3rem 0.3rem;
  margin: 0;
  border-radius: 35.5px;
  border-style: none;
`;

const StyledButton = styled.div`
  background-image: linear-gradient(to top, #ec3068, #ea4a7a);
  ${props => props.activeType === 'blue' && css`
    background-image: linear-gradient(to right bottom, #649CE1, #0977FF);
  `}
  box-shadow: inset 0 3px 7px 0 rgba(6, 0, 1, 0.21);
  color: rgb(255, 255, 255);
  
  min-width: 130px;
  padding: 0.6rem 2.8rem 0.4rem 2.8rem;
  margin: 0;
  border-radius: 32px;
  border-style: none;
  text-align: center;
`
interface Props {
    label: string,
    active: boolean,
    activeType: string,
    key: number
}

export const Button:React.FC<Props> = props => {
    return (
        <StyledButtonWrapper>
            <StyledFont/>
            <StyledButton {...props}>{props.label}</StyledButton>
        </StyledButtonWrapper>
    )
}

Button.defaultProps = {
    active: false,
    activeType: 'red',
    label: "play"
}