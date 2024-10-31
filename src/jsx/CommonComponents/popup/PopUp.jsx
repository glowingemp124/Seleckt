import React from 'react'
import { Modal } from 'react-bootstrap'

const PopUp = ({ title, show, onHide, content }) => {
    return (
        <div>
            <Modal size='md' show={show} onHide={onHide} centered>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {content}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PopUp