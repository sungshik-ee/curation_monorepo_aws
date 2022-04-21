import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col} from 'styled-bootstrap-grid';

import {IntroButton} from "./IntroButton";
import {BookLevelButton} from "./BookLevelButton";
import {Composition} from "atomic-layout";

export const CompositeButton: React.FC = ({active, label}) => {
    return (
        <Container>
            <Row >
                <Col col={5}>
                    <IntroButton label="TEST1"/>
                </Col>
                <Col col={5}>
                    <IntroButton label="TEST2"/>
                </Col>

            </Row>
            <Row>
                <Col col={10}>
                    <div>TEST</div>
                </Col>
            </Row>
        </Container>
    )
}

CompositeButton.propTypes = {
    active: PropTypes.bool,
    label: PropTypes.string,
    key: PropTypes.number
}

CompositeButton.defaultProps = {
    active: false
}