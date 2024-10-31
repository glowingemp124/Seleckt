import React from 'react'
import { Modal } from 'react-bootstrap'

const CustomeModal = ({ title, show, onHide, content }) => {
    return (
        <div>
            <Modal show={show} onHide={onHide} centered>
                {title !== "" && (
                    <Modal.Header closeButton className='align-items-center'>
                        <Modal.Title><b>{title}</b></Modal.Title>
                    </Modal.Header>
                )}
                <Modal.Body>
                    {content}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CustomeModal