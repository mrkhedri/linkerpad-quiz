import React from 'react'
import ModalComponent from '../ModalComponent'
import useForm from 'react-hook-form'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'

const EditProduct = props => {
    const {handleAdd} = props;
    const {register, handleSubmit, errors} = useForm();
    
    const onSubmit = data => handleAdd(data);

    return <ModalComponent
        value={<Button>Add new product</Button>}
        title='Add Product'
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
        submitText='Add Product'
        onSubmit={handleSubmit(onSubmit)}
    />
}

export default EditProduct