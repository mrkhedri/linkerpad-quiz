import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Title} from './style'

const MainTitle = props => {
    const {children, ...otherProps} = props;

    return <Container {...otherProps}>
        <Row>
            <Col>
                <Title>{children}</Title>
            </Col>
        </Row>
    </Container>
}

MainTitle.propTypes = {
    children: PropTypes.string.isRequired,
}

MainTitle.defaultProps = {
    children: 'Linkerpad',
}

export default MainTitle