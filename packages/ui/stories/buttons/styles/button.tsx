import styled, {css, createGlobalStyle} from "styled-components";

export const StyledFont = createGlobalStyle`
    @font-face {
        font-family: "yg-jalnan";
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;

export const StyledButtonWrapper = styled.div`
  background-color: #c9c9c9;
  box-shadow: inset 3px 3px 7px 0 rgba(6, 0, 1, 0.21);
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-size: 0.95rem;
  font-family: "yg-jalnan";
  min-width: 130px;
  padding: 0.3rem 0.3rem;
  margin: 0;
  
  border-radius: 35.5px;
  border-style: none;  
`;

export const StyledButton = styled.div`
  background-color: #c9c9c9;
  ${props => {
    if(props.active && props.activeType === 'red') 
      return css`background-image: linear-gradient(to top, #ec3068, #ea4a7a);`
    if(props.activeType === 'blue')
      return css` background-image: linear-gradient(to right bottom, #649CE1, #0977FF);`
  }}
  color: rgb(255, 255, 255);
  
  width: 100%;
  
  padding: 0.6rem 0.8rem 0.4rem 0.8rem;
  margin: 0;
  border-radius: 32px;
  border-style: none;
  text-align: center;
`