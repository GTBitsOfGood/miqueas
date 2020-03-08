import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default class LocationSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
    };
  }

  changeLocation(i) {
    this.setState({
      selected: i,
    });
    // this.props.onClick(i);
  }

  render() {
    const bodegaBtnStyle = {'height': '64px',
      'fontSize': '14px',
      'textAlign': 'center'};
    if (this.state.selected == 0) {
      bodegaBtnStyle['background-color'] = '#51ADA9';
      bodegaBtnStyle['color'] = 'white';
    }
    const bodegaBtn = (
      <Col style = {{'paddingLeft': '0px', 'paddingRight': '5px'}}>
        <Container>
          <Row className="justify-content-center">
            <Button variant={'outline-secondary'} size={'sm'} block
                    active = {this.state.selected == 0}
                    onClick={() => this.changeLocation(0)}
                    style={bodegaBtnStyle}>bodega
            </Button>
          </Row>
        </Container>
      </Col>);

    const downBtnStyle = {'height': '64px',
      'fontSize': '14px',
      'textAlign': 'center'};
    if (this.state.selected == 1) {
      downBtnStyle['background-color'] = '#51ADA9';
      downBtnStyle['color'] = 'white';
    }
    const downstairsBtn = (
      <Col style = {{'paddingLeft': '5px', 'paddingRight': '0px'}}>
        <Container>
          <Row className="justify-content-center">
            <Button variant={'outline-secondary'} size={'sm'} block
                    active = {this.state.selected == 1}
                    onClick={() => this.changeLocation(1)}
                    style={downBtnStyle}>downstairs
            </Button>
          </Row>
        </Container>
      </Col>
    );

    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <p className = "text-muted">Location</p>
          </Col>
          <Col>
            <Container>
              <Row className="justify-content-center">
                {bodegaBtn}
                {downstairsBtn}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}