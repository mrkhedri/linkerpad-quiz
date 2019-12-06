import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Modal, Button} from 'react-bootstrap'

const ModalComponent = props => {
    const {value, title, body, onSubmit, submitButtonVariant, submitText, closeText} = props;
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);

    const handleSave = data => {
        setShow(false);
        onSubmit(data)
    };

    return (
        <>
        <span onClick={handleShow}>
            {value}
        </span>

        <Modal show={show} onHide={handleClose}>
            {
                title ? <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header> : null
            }
            {body ? <Modal.Body>{body}</Modal.Body> : null}
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {closeText}
                </Button>
                <Button variant={submitButtonVariant} onClick={handleSave}>
                    {submitText}
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

ModalComponent.propTypes = {
    value: PropTypes.string.isRequired,
    title: PropTypes.string,
    body: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    onSubmit: PropTypes.func
}

ModalComponent.defaultProps = {
    submitButtonVarian: 'primary',
    submitText: 'Save Changes',
    closeText: 'Close',
}

export default ModalComponent