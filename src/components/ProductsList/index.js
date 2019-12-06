import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ComfortProduct from '../Product/comfort'
import ListProduct from '../Product/list'
import {connect} from 'react-redux';
import {getProductList} from '../../actions'
import Axios from 'axios'
import ProductHead from '../ProductHead'

const ProductsList = props => {
    const {viewType, producsList} = props;

    const producsListGrid = viewType === 'comfort' ? {lg: 3, md: 4, sm: 6, xs: 12} : {xs: 12}

    const getAllProduct = () => {
        Axios.get('/product')
        .then(res => {
            props.getProductList(res.data)
        })
        .catch(() => alert('Error occurred'))
    }

    useEffect(() => {
        getAllProduct()
    }, [])

    const handleAdd = productItem => {
        Axios.post(`/product`, productItem)
        .then(res => {
            alert('Added Successfully');
            getAllProduct();
        })
        .catch(() => alert('Error occurred'))
    }

    const handleEdit = (id, productItem) => {
        Axios.put(`/product/${id}`, productItem)
        .then(res => {
            alert('Edited Successfully');
            getAllProduct();
        })
        .catch(() => alert('Error occurred'))
    }

    const handleDelete = id => {
        Axios.delete(`/product/${id}`)
        .then(res => {
            alert('Deleted Successfully');
            getAllProduct();
        })
        .catch(() => alert('Error occurred'))
    }

    return <Fragment>
        <Row className='mt-4'>
            <ProductHead handleAdd={handleAdd}/>
        </Row>
        <Row className='mt-4'>
        {
            producsList.length > 0 
            ? producsList.map(product => <Col className='mb-4' key={product.id} {...producsListGrid}>
                {
                    viewType === 'list' 
                        ? <ListProduct product={product} handleEdit={handleEdit} handleDelete={handleDelete}/> 
                        : <ComfortProduct product={product} handleEdit={handleEdit} handleDelete={handleDelete}/>
                }
            </Col>) 
            : null
        }
    </Row>
    </Fragment>;
}

ProductsList.propTypes = {
    viewType: PropTypes.string,
    producsList: PropTypes.array,
}

ProductsList.defaultProps = {
}

const mapStateToProps = ({products}) => ({
    producsList: products.list,
    viewType: products.viewType,
})

const mapDispatchToProps = dispatch => ({
 getProductList: data => dispatch(getProductList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);