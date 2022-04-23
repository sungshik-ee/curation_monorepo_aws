import React from "react";
import {Composition, Box} from "atomic-layout";
import styled, {css} from "styled-components";

import {StyledButtonWrapper, StyledFont, StyledButton} from "./styles/button"

type Props = {
    label: string,
    active?: boolean,
    activeType?: string,
    key: number
}

export const Button:React.FC<Props> = props => {
    return (
        <StyledButtonWrapper>
            <StyledFont/>
            <Box flex justifyContent="center">
                <StyledButton {...props}>{props.label}</StyledButton>
            </Box>
        </StyledButtonWrapper>
    )
}

Button.defaultProps = {
    active: false,
    activeType: "red",
    label: "play"
}