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
                <Row className = 'justify-content-center' style={{'margin': '0px'}}>
                  <Button
                    variant={'outline-secondary'} block
                    style={{'height': '54px', 'borderColor': '#51ADA9',
                      'color': '#51ADA9', 'fontWeight': 'bold', 'lineHeight': '20px', 'textAlign': 'center'}}
                    className={'btn-outline-secondary-miqueas'}>
                    add same item
                  </Button>
                </Row>
            </Col>
            <Col>
                <Row className = 'justify-content-center' style={{'margin': '0px'}}>
                  <Button
                    variant={'secondary'} block
                    style={{'height': '54px',
                      'fontWeight': 'bold',
                      'background': '#51ADA9',
                      'borderColor': '#51ADA9'}}>
                    next
                  </Button>
                </Row>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
}
