import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default class GenderSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
    };
  }

  changeGender(i) {
    this.setState({
      selected: i,
    });
    this.props.onClick(i);
  }

  render() {
    const maleSrc = (this.state.selected == 0) ?
      '../resources/male-selected.png' : '../resources/male.png';
    const maleStyle = {'height': '64px'};
    if (this.state.selected == 0) {
      maleStyle['background-color'] = '#4690FF';
    }
    const maleBtn = (
      <Col style = {{'paddingLeft': '0px', 'paddingRight': '5px'}}>
        <Container>
          <Row className="justify-content-center">
            <Button variant={'outline-secondary'} size={'lg'} block
              active = {this.state.selected == 0}
              onClick={() => this.changeGender(0)}
              style={maleStyle}>
              <img alt={'Male'}
                src={maleSrc}
                width={10}>
              </img></Button>
          </Row>
        </Container>
      </Col>);

    const femaleSrc = (this.state.selected == 1) ?
      '../resources/female-selected.png' : '../resources/female.png';
    const femaleStyle = {'height': '64px'};
    if (this.state.selected == 1) {
      femaleStyle['background-color'] = '#E93CAC';
    }
    const femaleBtn = (
      <Col style = {{'paddingLeft': '5px', 'paddingRight': '0px'}}>
        <Container>
          <Row className="justify-content-center">
            <Button variant={'outline-secondary'} size={'lg'} block
              active = {this.state.selected == 1}
              onClick={() => this.changeGender(1)}
              style={femaleStyle}>
              <img alt={'Female'}
                src={femaleSrc}
                width={13}>
              </img>
            </Button>
          </Row>
        </Container>
      </Col>
    );

    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <p className = "text-muted">Gender</p>
          </Col>
          <Col>
            <Container>
              <Row className="justify-content-center">
                {maleBtn}
                {femaleBtn}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}
