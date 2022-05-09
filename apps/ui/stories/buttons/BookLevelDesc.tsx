import React from 'react';
import styled from 'styled-components';
import { BooksLevelType } from './types/button';

export const StyledImage = styled.img`
    max-width: 100%;
    display: block;
    margin: 30px auto;
`;

type Props = {
    level: BooksLevelType;
};

export const BookLevelDesc: React.FC<Props> = (props: Props) => {
    return (
        <StyledImage
            src={`http://s.wink.co.kr/wink_books/images/home/intro-middle-describe-${props.level}.png`}
        />
    );
};

BookLevelDesc.defaultProps = {
    level: 'RA',
};
