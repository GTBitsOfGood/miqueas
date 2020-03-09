import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

export default class QuantitySelector extends React.Component {
  render() {
    let pHolder = '0';
    if (this.props.quantity == '') {
      pHolder = '';
    }
    return (
      <Container>
        <Row>
          <Col>
            <p className = "text-muted">Quantity Changed</p>
          </Col>
          <Col>
            <InputGroup>
              <InputGroup.Prepend>
                <Button variant="outline-secondary"
                  style={{'color': '#51ADA9',
                    'borderRight': 'none'}}
                  onClick={() =>
                    this.props.onChange(parseInt(this.props.quantity) - 1)}>-
                </Button>
              </InputGroup.Prepend>
              <FormControl style={{'textAlign': 'center',
                'borderRight': 'none', 'borderLeft': 'none',
                'borderColor': 'rgb(108, 117, 125)'}}
              type={'number'}
              placeholder={pHolder}
              value = {this.props.quantity}
              onChange = {(e) => {
                this.props.onChange(e.target.value);
              }}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary"
                  style={{'color': '#51ADA9',
                    'borderLeft': 'none'}}
                  onClick={() =>
                    this.props.onChange(parseInt(this.props.quantity) + 1)}>+
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
