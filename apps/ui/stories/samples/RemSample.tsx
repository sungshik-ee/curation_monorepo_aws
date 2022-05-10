import React, { FC } from 'react';
import { Box, Composition } from 'atomic-layout';
import styled, { createGlobalStyle, css } from 'styled-components';

type Props = {
    globalFontSize?: number;
    fontSize?: number;
};
type FontSizeStyleProps = {
    fontSize?: number;
};

const areas = `
    px rem em
`;

const GlobalStyle = createGlobalStyle<FontSizeStyleProps>`
    html {
      font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '1rem')};
    }
`;

const BaseStyled = styled.div<FontSizeStyleProps>`
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : 'inherit')};
`;

const StyledPx = styled(BaseStyled)`
    width: 320px;
    height: 320px;
    background: #1abc9c;
    padding: 32px;
`;

const StyledRem = styled(BaseStyled)`
    width: 20rem;
    height: 20rem;
    background: #4aa3df;
    padding: 2rem;
    color: white;
`;

const StyledEm = styled(BaseStyled)`
    width: 20em;
    height: 20em;
    background: #34495e;
    padding: 2em;
    color: white;
`;

export const RemSample: FC<Props> = (props: Props) => {
    return (
        <>
            <GlobalStyle fontSize={props.globalFontSize} />
            <Composition gap="5rem" areas={areas}>
                {/*<Composition gap="15" areas={areas}>*/}

                {({ Px, Rem, Em }) => (
                    <>
                        <Px>
                            <StyledPx fontSize={props.fontSize}>
                                <div>'px'을 사용하는 영역</div>
                                <div>320px * 320px</div>
                                <div>padding: 32px</div>
                            </StyledPx>
                        </Px>
                        <Rem>
                            <StyledRem fontSize={props.fontSize}>
                                <div>'rem'을 사용하는 영역</div>
                                <div>20rem * 20rem</div>
                                <div>padding: 20rem</div>
                            </StyledRem>
                        </Rem>
                        <Em>
                            <StyledEm fontSize={props.fontSize}>
                                <div>'em'을 사용하는 영역</div>
                                <div>20em * 20em</div>
                                <div>padding: 20em</div>
                            </StyledEm>
                        </Em>
                    </>
                )}
            </Composition>
        </>
    );
};
