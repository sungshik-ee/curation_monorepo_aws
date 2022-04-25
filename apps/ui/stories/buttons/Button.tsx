import React, {useState,useEffect} from "react";
import {Composition, Box} from "atomic-layout";

import {StyledButtonWrapper, StyledFont, StyledButton} from "./styles/button"
import {ActiveType, Props} from './types/button'

export const Button:React.FC<Props> = (props: Props) => {
    const [active, setActive] = useState(props.active);
    const handleClick = (event) => {
        event.preventDefault();
        const value = !active
        setActive(value);
        props.onClick(value)
    }
    return (
        <StyledButtonWrapper>
            <StyledFont/>
            <Box flex justifyContent="center">
                <StyledButton {...props} active={active} onClick={handleClick}>{props.label}</StyledButton>
            </Box>
        </StyledButtonWrapper>
    )
}

Button.defaultProps = {
    active: false,
    activeType: "RED",
    label: "play"
}