import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import {Wrapper, Head, Title, Content} from './style'

const ProductsWrapper = props => {
    const {children, title} = props;

    return <Container>
        <Wrapper>
            <Head>
                <Title className='m-0'>{title}</Title>
            </Head>
            <Content>
                {children}
            </Content>
        </Wrapper>
    </Container>;
}

    ProductsWrapper.propTypes = {
        children: PropTypes.node.isRequired,
        title: PropTypes.string,
    }

    ProductsWrapper.defaultProps = {
        title: 'Linkerpad',
    }

export default ProductsWrapper