import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import QuantityButtons from './QuantityButtons';

export default class QuantitySelector extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p className = "text-muted">Quantity Changed</p>
          </Col>
          <QuantityButtons onChange={this.props.onChange}
            quantity={this.props.quantity}/>
        </Row>
      </Container>
    );
  }
}
