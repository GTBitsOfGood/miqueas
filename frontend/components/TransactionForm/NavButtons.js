import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class NavButtons extends React.Component {
  render() {
    return (
      <Navbar sticky={'bottom'}>
        <Container>
          <Row style={{'width': '100%', 'marginLeft': '0px'}}>
            <Col>
              <Container>
                <Row className = 'justify-content-center'>
                  <Button
                    variant={'outline-secondary'} block
                    style={{'minHeight': '54px', 'borderColor': '#51ADA9',
                      'color': '#51ADA9', 'fontWeight': 'bold'}}
                    className={'btn-outline-secondary-miqueas'}
                    disabled={this.props.disabled}>
                    add same item
                  </Button>
                </Row>
              </Container>
            </Col>
            <Col>
              <Container>
                <Row className = 'justify-content-center'>
                  <Button
                    variant={'secondary'} block
                    style={{'minHeight': '54px',
                      'fontWeight': 'bold',
                      'background': '#51ADA9',
                      'borderColor': '#51ADA9'}}
                    disabled={this.props.disabled}>
                    next
                  </Button>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
}
