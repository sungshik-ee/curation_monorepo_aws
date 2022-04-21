import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col} from 'styled-bootstrap-grid';

import {IntroButton} from "./IntroButton";
import {Button} from "./Button";

export const CompositeButton: React.FC = ({active, label}) => {
    return (
        <Container>
            <Row >
                <Col col={5}>
                    <IntroButton label="책과 만나요"/>
                </Col>
                <Col col={5}>
                    <Button label="책과 만나요 단계"/>
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