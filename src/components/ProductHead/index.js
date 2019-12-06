import React from 'react'
import PropTypes from 'prop-types'
import {Col, ButtonGroup, Button} from 'react-bootstrap'
import {connect} from 'react-redux';
import {setProductViewType} from '../../actions'
import Add from './Add'
import {Inner} from './style'

const ProductViewType = props => {
    const {viewType, handleAdd} = props;

    const handleClick = type => props.setProductViewType(type);

    return <Col>
        <Inner>
            <Add handleAdd={handleAdd}/>

            <ButtonGroup aria-label="Basic example">
                <Button onClick={() => handleClick('comfort')} variant={viewType === 'comfort' ? 'primary' : ''}>Comfort</Button>
                <Button onClick={() => handleClick('list')} variant={viewType === 'list' ? 'primary' : ''}>List</Button>
            </ButtonGroup>
        </Inner>
    </Col>
}

ProductViewType.propTypes = {
    viewType: PropTypes.string,
}

const mapStateToProps = ({products}) => ({
    viewType: products.viewType,
})

const mapDispatchToProps = dispatch => ({
 setProductViewType: data => dispatch(setProductViewType(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewType);