import React from 'react';
import Form from 'react-bootstrap/Form';

const ToggleBtn = ({ label, isChecked, handleChange }) => {

    return (
        <>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={label}
                    checked={isChecked}
                    onChange={handleChange}
                />
            </Form>
        </>
    );
};


export default ToggleBtn;
