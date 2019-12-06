import React from 'react'
import ModalComponent from '../ModalComponent'

const EditProduct = props => {
    const {id, handleDelete} = props;
    
    const handleClick = () => handleDelete(id);

    return <ModalComponent
        value={<span className='text-danger'>Delete</span>}
        title='Delete Product'
        onSubmit={handleClick}
        submitText='Delete Product'
        submitButtonVariant='danger'
    />
}

EditProduct.propTypes = {
    
}

export default EditProduct