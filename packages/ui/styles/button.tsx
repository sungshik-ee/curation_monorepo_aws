import styled from "styled-components";

export const StyledButtonWrapper = styled.div`
  background-color: #c9c9c9;
  
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-size: 0.95rem;
  font-family: "yg-jalnan";
  min-width: 130px;
  padding: 0.3rem 0.3rem;
  margin: 0;
  
  border-style: none;
  &:first-child {
    border-top-left-radius: 35.5px;
    border-bottom-left-radius: 35.5px;
    box-shadow: inset 3px 3px 7px 0 rgba(6, 0, 1, 0.21);
    //box-shadow
  }
  &:last-child {
    border-top-right-radius: 35.5px;
    border-bottom-right-radius: 35.5px;
    box-shadow: inset -3px 3px 7px 0 rgba(6, 0, 1, 0.21);
  }
`;