import React from 'react'
import PropTypes from 'prop-types'
import {Item, Inner, Image, Img, Title, Other, Category, Cat} from './listStyle'
import {imageBaseUrl} from '../../utils';
import Edit from './Edit'
import Delete from './Delete'

const Product = props => {
    const {product, handleEdit, handleDelete} = props;

    return <Item>
        <Inner>
            <Image>
                <Img src={imageBaseUrl(product.avatar)} alt={product.title}/>
            </Image>
            <Other>
                <Title>{product.title}</Title>
                <Category>Category: <Cat>{product.category}</Cat></Category>
                <br/>
                <div>
                    <Edit product={product} handleEdit={handleEdit}/>
                    <span> - </span>
                    <Delete id={product.id} handleDelete={handleDelete}/>
                </div>
            </Other>
        </Inner>
    </Item>
}

Product.propTypes = {
    product: PropTypes.object
}

export default Product