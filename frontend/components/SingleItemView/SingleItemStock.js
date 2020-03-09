import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuantityButtons from '../TransactionForm/QuantityButtons';

class SingleItemStock extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let dataView = (
      <Row>
        <Col style={{'paddingLeft': '0px'}}>
          <p>this.props.stock</p>
        </Col>
        <Col>
          <img
            alt={'Edit'}
            src={'../resources/pencil.svg'}
            width={15}
            height={15}
            style={{'marginLeft':'75%'}}/>
        </Col>
      </Row>
    );

    if (this.props.editMode) {
      dataView = (
        <Row>
          <Col style={{'paddingLeft': '0px', 'marginTop':'-8px',
            'margin-bottom':'8px'}}>
            <QuantityButtons quantity={this.props.stock}
              onChange={this.props.onUpdate}/>
          </Col>
        </Row>
      );
    }

    return (
      <Container>
        <Row>
          <Col>
            <Container>
              <Row className={'justify-content-end'}>
                <strong>Stock</strong>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              {dataView}
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default SingleItemStock;
