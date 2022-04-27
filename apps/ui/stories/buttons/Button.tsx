import React, { useState } from "react";
import { Box } from "atomic-layout";

import {
  StyledButton,
  StyledButtonWrapper,
  StyledYgFont as StyledFont,
} from "./styles/button";
import { ButtonProps as Props } from "./types/button";

export const Button: React.FC<Props> = (props: Props) => {
  const [active, setActive] = useState(props.active);
  const handleClick = (event) => {
    event.preventDefault();
    const value = !active;
    setActive(value);
    props.onClick(value);
  };
  return (
    <StyledButtonWrapper>
      <StyledFont />
      <Box flex justifyContent="center">
        <StyledButton {...props} active={active} onClick={handleClick}>
          {props.label}
        </StyledButton>
      </Box>
    </StyledButtonWrapper>
  );
};

Button.defaultProps = {
  active: false,
  activeType: "RED",
  label: "play",
};
