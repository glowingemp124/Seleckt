import React from 'react';
import { Pagination, Container, Row, Col } from 'react-bootstrap';

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
    console.log("current page >>>> ", currentPage)
    // Function to handle previous page click
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    // Function to handle next page click
    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <span>{`Pages ${currentPage} of ${totalPages}`}</span>
                </Col>
                <Col xs="auto">
                    <Pagination>
                        <Pagination.Prev onClick={handlePrevious} disabled={currentPage === 1} />
                        <Pagination.Next onClick={handleNext} disabled={currentPage === totalPages} />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
};

// Usage example
const App = ({onPageChange, totalPages,currentPage}) => {
    console.log('xyz',typeof currentPage);
    // const [currentPage, setCurrentPage] = React.useState(1);
    // const totalPages = 10;

    // // Handler function for page change
    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    // };

    return (
        <div className="App">
            <h1>Pagination Example</h1>
            <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </div>
    );
};

export default App;
