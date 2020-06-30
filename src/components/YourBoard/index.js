import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TurnTable from '../TurnTable';
import data from '../../data/2_board.json';

function YourBoard({ N }) {
    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <TurnTable turnRecords={data.board.yourturns} />
                </Col>
            </Row>
        </Container>
    );
}

YourBoard.propTypes = {
    N: PropTypes.number.isRequired,
};

export default YourBoard;
