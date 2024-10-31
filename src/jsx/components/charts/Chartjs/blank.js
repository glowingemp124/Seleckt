import React from 'react';
import { Row, Col, Card } from 'react-bootstrap'



function Blank() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body></Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Blank;