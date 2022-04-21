import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #16bdca;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-size: 0.7rem;
  min-width: 130px;
  padding: 0.9rem 2.8rem;
  margin: 0;
  border-radius: 3px;
  border-style: none;
`
interface Props {
    label: string,
    active: boolean,
    key: number
}

export const Button:React.FC<Props> = props => {
    return <StyledButton {...props}>{props.label}</StyledButton>
}

Button.defaultProps = {
    active: false,
    label: "play"
}