import React from 'react'
import ModalComponent from '../ModalComponent'
import useForm from 'react-hook-form'
import {Form} from 'react-bootstrap'

const EditProduct = props => {
    const {product, handleEdit} = props;
    const {register, handleSubmit, errors} = useForm({
        defaultValues:{
            title: product.title,
            category: product.category,
            avatar: product.avatar,
        }
    });
    
    const onSubmit = data => handleEdit(product.id, data);

    return <ModalComponent
        value={<span className='text-primary'>Edit</span>}
        title='Edit Product'
        body={
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="string" placeholder="Enter Title" name="title" ref={register({required: true})}/>
                    {errors.title && <span className='text-danger'>Title is required.</span>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="string" placeholder="Enter Category" name="category" ref={register({required: true})}/>
                    {errors.category && <span className='text-danger'>Category is required.</span>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control type="number" placeholder="Enter Avatar" name="avatar" ref={register({required: true})}/>
                    {errors.avatar && <span className='text-danger'>Avatar is required.</span>}
                </Form.Group>
            </Form>
        }
        submitText='Edit Product'
        onSubmit={handleSubmit(onSubmit)}
    />
}

export default EditProduct