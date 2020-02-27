import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ReviewItemModel {
  constructor(name, gender, quantity, attributes) {
    this.name = name;
    this.gender = gender;
    this.quantity = quantity;
    this.attributes = attributes;
  }
}

const testItem = new ReviewItemModel('Double Lined Notebook [School]',
    'female', 13, []);
const testItem2 = new ReviewItemModel('Foam Paper [School]',
    'female', 20, []);
const testItem3 = new ReviewItemModel('Foam Paper [School]',
    'female', 25, ['orange', 'downstairs']);
const testItem4 = new ReviewItemModel('Graph Notebook [School]',
    'male', -5, ['normal', 'child1']);

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  hidePopup() {
    this.setState({
      showPopup: false,
    });
  }

  render() {
    return (
      <>
        <Popup show={this.state.showPopup} onHide={() => {
          this.hidePopup();
        }}/>
        <Navbar bg={'light'} >
          <Navbar.Collapse className={'justify-content-start'}>
            <Navbar.Brand>
              {'Review and Submit'}
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
        <hr style={{'marginTop': '0px', 'marginBottom': '0px'}}/>
        <Container className={'item-block'}>
          <br/>
          <h3 className = {'mini-header'}>Added Items</h3>
          <ReviewItem item={testItem}/>
          <ReviewItem item={testItem2}/>
          <ReviewItem item={testItem3}/>
          <h3 className = {'mini-header'}>Removed Items</h3>
          <ReviewItem item={testItem4}></ReviewItem>
        </Container>
      </>
    );
  }
}

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.item.quantity,
    };
  }

  onQuantityChange(val) {
    this.setState({quantity: val});
  }

  render() {
    const additionalAttributes = [];
    this.props.item.attributes.forEach((attr) => {
      additionalAttributes.push(<p className={'super-shrink-text'}
        style={{'marginBottom': '0px', 'marginLeft': '12px'}}>
        {attr}</p>);
    });
    let genderIcon = <></>;
    if (this.props.item.gender.toLowerCase() == 'male' ||
      this.props.item.gender.toLowerCase() == 'female') {
      const path = '../resources/' +
        this.props.item.gender.toLowerCase() + '.png';
      genderIcon = <img
        alt={this.props.item.gender}
        src={path}
        height={20}
        className = {'side-img'}
        style = {{'marginTop': '5px'}}
      />;
    }
    return (
      <Card style={{'marginBottom': '13px'}}>
        <Card.Body style={{
          'paddingLeft': '0.5rem',
          'paddingRight': '0.5rem',
          'paddingBottom': '0.5rem',
          'paddingTop': '0.8rem'}}>
          <Container width={'100%'} style={{'paddingLeft': '15px',
            'paddingRight': '0px'}}>
            <Row>
              <Col xs = {1} sm={1} md={1} lg={1} xl={1}
                style={{'paddingLeft': '0.5rem', 'paddingRight': '0.5rem',
                  'marginTop': '5px'}}>
                <img
                  alt={'Delete'}
                  src={'../resources/trashcan.png'}
                  height={15}/>
              </Col>
              <Col xs = {4} sm={4} md={4} lg={4} xl={4}
                style={{'paddingLeft': '0.5rem', 'paddingRight': '0rem',
                  'maxWidth': '40%', 'flex-basis': '40%', 'marginTop': '5px'}}>
                <Card.Text className={'shrink-text'}>
                  {this.props.item.name}
                </Card.Text>
              </Col>
              <Col xs={3} sm={3} md={3} lg={3} xl={3}
                style={{'paddingLeft': '0.5rem', 'paddingRight': '0rem',
                  'marginTop': '5px'}}>
                {genderIcon}
                {additionalAttributes}
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} xl={2}
                style={{'paddingLeft': '0rem', 'paddingRight': '0.5rem'}}>
                <FormControl style={{'textAlign': 'center',
                  'borderColor': '#51ADA9'}}
                type={'number'}
                placeholder={'0'}
                value = {this.state.quantity}
                onChange={(e) => {
                  this.onQuantityChange(e.target.value);
                }}
                />
              </Col>
              <Col xs={1} sm={1} md={1} lg={1} xl={1}
                style={{'paddingLeft': '0.5rem', 'paddingRight': '0.5rem',
                  'marginTop': '5px'}}>
                <img
                  alt={'Edit'}
                  src={'../resources/right.png'}
                  height={10}/>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

class Trash extends React.Component {
  render() {
    return (<img
      alt={'Delete'}
      src={'../resources/trashcan.png'}
      height={15}/>);
  }
}

class Popup extends React.Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}
        className={'popup'}>
        <Modal.Body closeButton>
          <p>Are you sure you want to delete this item?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" href={'/'}>
            Yes
          </Button>
          <Button variant="link" onClick={this.props.onHide}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ReviewForm;
