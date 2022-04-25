import React from "react";
import { Composition, Box } from "atomic-layout";
import { StyledButtonWrapper, StyledFont, StyledButton } from "./styles/button";
import { ActiveType } from "./types/button";

const template = `
  top
  bottom
`;
interface Props {
  activeType: ActiveType;
}
export const Buttons: React.FC<Props> = (props: JSX.IntrinsicAttributes) => {
  return (
    <Composition template={template} gap={6}>
      {(Areas) => (
        <>
          <StyledFont />
          <Areas.Top>
            <StyledButtonWrapper>
              <Box flex justifyContent="center">
                <StyledButton {...props}>{"책과 친해져요 단계"}</StyledButton>
                <StyledButton {...props} active={true}>
                  {"책과 생활해요 단계"}
                </StyledButton>
              </Box>
            </StyledButtonWrapper>
          </Areas.Top>
          <Areas.Bottom>
            <StyledButtonWrapper>
              <Box flex justifyContent="center">
                <StyledButton {...props}>{"책과 친해져요 단계"}</StyledButton>
                <StyledButton {...props}>{"책과 생활해요 단계"}</StyledButton>
              </Box>
            </StyledButtonWrapper>
          </Areas.Bottom>
        </>
      )}
    </Composition>
  );
};

Buttons.defaultProps = {
  activeType: "RED",
};
