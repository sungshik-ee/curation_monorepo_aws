import React from 'react'
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components'

enum ButtonLevel {RA, RB, RT, UNDEFINED}

const Container = styled.div`
  margin-bottom: 8px;
  position: relative;
  line-height: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 35.5px;
  box-shadow: inset 0 3px 7px 0 rgba(6, 0, 1, 0.21);
  background-color: #c9c9c9;
  width: 100%;
  height: 10.3vw;
  max-height: 76px;
  color: white;
  font-size: ~"calc(min(3.9vw, 28px))";
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48%;
  height: 84.2%;
  z-index: 1;
  ${(props) =>
    props.active &&
    css`
      position: absolute;
      width: 48%;
      height: 84.2%;
      border-radius: 32px;
      z-index: 0;
      left: 1%;
      background-image: linear-gradient(to top, #ec3068, #ea4a7a);
      &.blue {background-image: linear-gradient(to right bottom, #649CE1, #0977FF) !important;}
      &.left {margin-left: 0;}
      &.right {margin-left: 50%;}
    `
  }
`;

export const IntroButton: React.FC = ({active, label}) => {
    return (
        <Container>
            <Item active={active}>{label}</Item>
        </Container>
    )
}

IntroButton.propTypes = {
    active: PropTypes.bool,
    label: PropTypes.string,
    key: PropTypes.number
}

IntroButton.defaultProps = {
    active: false
}