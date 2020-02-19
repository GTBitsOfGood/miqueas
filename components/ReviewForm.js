import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ReviewForm extends React.Component {
  render() {
    return (
      <>
        <Navbar bg={'light'} >
          <Navbar.Collapse className={'justify-content-start'}>
            <Navbar.Brand>
              {'Review and Submit'}
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <ReviewItem/>
        </Container>
      </>
    );
  }
}

class ReviewItem extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body style={{'padding-left': '0.5rem', 'padding-right': '0.5rem'}}>
          <Container width={'100%'}>
            <Row>
              <Col xs = {1} sm={1} md={1} lg={1} xl={1}>
                <img
                  alt={'Delete'}
                  src={'../resources/trashcan.png'}
                  height={15}/>
              </Col>
              <Col xs = {4} sm={4} md={4} lg={4} xl={4}>
                <Card.Text>
                  Double Lined Notebook [School]
                </Card.Text>
              </Col>
              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <img
                  alt={'Male'}
                  src={'../resources/male.png'}
                  height={20}/>
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                <Card.Text>
                  Test
                </Card.Text>
              </Col>
              <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                <Card.Text>
                  Test
                </Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

export default ReviewForm;
