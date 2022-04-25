import React from "react";
import {Composition, Box} from "atomic-layout";
import {StyledButtonWrapper, StyledFont, StyledButton} from "./styles/button"
import {ActiveType} from "./types/button";

interface Props {
    activeType: ActiveType
}
export const Buttons: React.FC<Props> = (props: JSX.IntrinsicAttributes) => {
    return (
        <>
            <StyledFont/>
            <StyledButtonWrapper>

                <Box flex justifyContent="center">
                    <StyledButton {...props}>{"책과 친해져요 단계"}</StyledButton>
                    <StyledButton {...props} active={true}>{"책과 생활해요 단계"}</StyledButton>
                    {/*<Button key={0} label="책과 친해져요 단계"/>*/}
                    {/*<Button key={1} label="책과 생활해요 단계"/>*/}

                </Box>

            </StyledButtonWrapper>
            <StyledButtonWrapper>

                <Box flex justifyContent="center">
                    <StyledButton {...props}>{"책과 친해져요 단계"}</StyledButton>
                    <StyledButton {...props} active={true}>{"책과 생활해요 단계"}</StyledButton>
                    {/*<Button key={0} label="책과 친해져요 단계"/>*/}
                    {/*<Button key={1} label="책과 생활해요 단계"/>*/}

                </Box>

            </StyledButtonWrapper>
        </>

    )
}

Buttons.defaultProps = {
    activeType: "RED",
}
