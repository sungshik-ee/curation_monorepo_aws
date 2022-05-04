import React, { useState } from 'react';
import { Composition, Box } from 'atomic-layout';
import { StyledButtonWrapper, StyledYgFont as StyledFont, StyledButton } from './styles/button';
import { BooksLevelType, ButtonsProps as Props } from './types/button';

export const Buttons: React.FC<Props> = (props: Props) => {
    const [selectedLevel, setSelectedLevel] = useState(props.selectedLevel);
    const handleClick = (key: BooksLevelType) => {
        setSelectedLevel(key);
        if (key !== selectedLevel) {
            props.onSelect(key);
        }
    };
    return (
        <Composition gap={6}>
            <StyledFont />
            {props.buttonSets.map((buttons) => (
                <StyledButtonWrapper>
                    <Box flex justifyContent="center">
                        {buttons.map((button) => (
                            <StyledButton
                                activeType={button.activeType}
                                active={button.key === selectedLevel}
                                onClick={(event) => handleClick(button.key)}
                            >
                                {button.label}
                            </StyledButton>
                        ))}
                    </Box>
                </StyledButtonWrapper>
            ))}
        </Composition>
    );
};

Buttons.defaultProps = {
    selectedLevel: 'RA',
    buttonSets: [
        [
            { key: 'RA', label: '책과 진해져요 단계', activeType: 'RED' },
            { key: 'RB', label: '책과 생활해요 단계', activeType: 'RED' },
        ],
        [
            { key: 'RT', label: '스스로 읽어요 단계', activeType: 'RED' },
            { key: 'ALL', label: '도서 단계 모두 보기', activeType: 'BLUE' },
        ],
    ],
};
