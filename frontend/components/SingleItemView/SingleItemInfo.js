import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function InfoLine(props) {
  if(props.title == "Gender") {
    return <GenderLine data = {props.data}/>
  }
  return (
    <Row>
      <Col>
        <Container>
          <Row className={'justify-content-end'}>
            <strong>{props.title}</strong>
          </Row>
        </Container>
      </Col>
      <Col>
        <Container>
          <Row>
            <Col style={{'paddingLeft': '0px'}}>
              <p>
                {props.data}</p>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}

function GenderLine(props) {
  let dataDisplay = <></>;
  if (props.data == 'male' || props.data == 'boy') {
    dataDisplay = (
      <p>
        <img
          alt={'male'}
          src={'../resources/male.png'}
          height={20}
          style={{'marginTop': '-2px'}}
        />
        {'  male'}
      </p>);
  } else if (props.data == 'female' || props.data == 'girl') {
    dataDisplay = (
      <p>
        <img
          alt={'female'}
          src={'../resources/female.png'}
          height={20}
          style={{'marginTop': '-2px'}}
        />
        {'  female'}
      </p>);
  }

  return (
    <Row>
      <Col>
        <Container>
          <Row className={'justify-content-end'}>
            <strong>{'Gender'}</strong>
          </Row>
        </Container>
      </Col>
      <Col>
        <Container>
          <Row>
            <Col style={{'paddingLeft': '0px'}}>
              {dataDisplay}
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
