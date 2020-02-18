import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'none',
      quantity: 0,
    };
  }

  handleGenderSwap(i) {
    let gender = 'none';
    switch (i) {
      case 0:
        gender = 'male';
        break;
      case 1:
        gender = 'female';
        break;
      case 2:
        gender = 'unisex';
        break;
    }
    this.setState({
      gender: gender,
    });
  }

  changeQuantity(i) {
    this.setState({
      quantity: i,
    })
  }

  render() {
    return (
      <div>
        <ItemHeader name={'Backpack [School]'}/>
        <hr style={{'marginTop': 0}}/>
        <GenderSelector onClick={(i) => this.handleGenderSwap(i)}>
        </GenderSelector>
        <hr></hr>
        <QuantitySelector quantity={this.state.quantity}
          onChange={(i) => this.changeQuantity(i)}/>
        <hr></hr>
        <VerticalRadio name={'Type/Color'} options = {['brown',
          'blue', 'orange', 'green', 'purple', 'white', 'yellow',
          'black', 'pink', 'red', 'glitter']} />
        <hr/>
        <HorizontalRadio name={'Location'}
          options = {['bodega', 'downstairs']}/>
        <hr/>
        <NextButtons/>
      </div>
    );
  }
}

class ItemHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      showPopup: false,
    };
  }


  handleClose() {
    this.setState({
      showPopup: false,
    });
  }

  render() {
    const show = this.state.showPopup;

    return (
      <>
        <Navbar bg={'light'} >
          <Navbar.Brand>
            <img
              alt={'Back'}
              src={'../resources/arrow-back.png'}
              width={30}
              height={30}
              onClick={() => {
                this.setState({showPopup: true});
              }}>
            </img>
          </Navbar.Brand>
          <Navbar.Collapse className={'justify-content-start'}>
            <Navbar.Brand>
              {this.state.name}
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={() => {
          this.setState({showPopup: false});
        }}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to go back?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Any edits will be lost.</Modal.Body>
          <Modal.Footer>
            <Button variant="link" href={'/'}>
              Go Back
            </Button>
            <Button variant="link" onClick={() => {
              this.setState({showPopup: false});
            }}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

class GenderSelector extends React.Component {
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
    let unisexOption;
    if(this.props.includeUnisex){
      unisexOption = (
        <Col>
          <Container>
            <Row className="justify-content-center">
              <Button
                variant={'outline-secondary'} size={'lg'} block
                active = {this.state.selected == 2}
                onClick={() => this.changeGender(2)}>NA</Button>
            </Row>
          </Container>
        </Col>
      );
    } else {
      unisexOption = (<div></div>);
    }
    return (
      <Container>
        <p className = "text-muted">Gender</p>
        <Row className="justify-content-center">
          <Col>
            <Container>
              <Row className="justify-content-center">
                <Button variant={'outline-secondary'} size={'lg'} block
                  active = {this.state.selected == 0}
                  onClick={() => this.changeGender(0)}>
                  <img alt={'Male'}
                    src={'../resources/male.png'}
                    width={10}>
                  </img></Button>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row className="justify-content-center">
                <Button variant={'outline-secondary'} size={'lg'} block
                  active = {this.state.selected == 1}
                  onClick={() => this.changeGender(1)}>
                  <img alt={'Female'}
                    src={'../resources/female.png'}
                    width={13}>
                  </img>
                </Button>
              </Row>
            </Container>
          </Col>
          {unisexOption}
        </Row>
      </Container>
    );
  }
}

class QuantitySelector extends React.Component {
  render() {
    let pHolder = '0';
    if (this.props.quantity == '') {
      pHolder = '';
    }
    return (
      <Container>
        <Row>
          <Col>
            <p className = "text-muted">Quantity</p>
          </Col>
          <Col>
            <InputGroup>
              <InputGroup.Prepend>
                <Button variant="outline-secondary"
                  onClick={() =>
                    this.props.onChange(parseInt(this.props.quantity) - 1)}>-
                </Button>
              </InputGroup.Prepend>
              <FormControl style={{'textAlign': 'center'}}
                type={'number'}
                placeholder={pHolder}
                value = {this.props.quantity}
                onChange = {(e) => {
                  this.props.onChange(e.target.value);
                }}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary"
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

class VerticalRadio extends React.Component {
  render() {
    const options = [];
    let i = 0;
    this.props.options.forEach((option) => {
      options.push(
          <Form.Check
            custom
            type={'radio'}
            label = {option}
            name = {this.props.name + 'Radio'}
            id = {option + i.toString()}
          />);
      i++;
    });
    return (
      <Container>
        <p className = {'text-muted'}>{this.props.name}</p>
        <Form>
          <Col>
            {options}
          </Col>
        </Form>
      </Container>
    );
  }
}

class HorizontalRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
    }
  }

  updateSelected(i) {
    this.setState({
      selected: i,
    });
  }

  render() {
    const options = [];
    this.props.options.forEach((option, i) => {
      options.push(
          <Col>
            <Container>
              <Row className="justify-content-center">
                <Button
                  variant={'outline-secondary'} size={'md'} block
                  active = {this.state.selected == i}
                  onClick={() => this.updateSelected(i)}>{option}</Button>
              </Row>
            </Container>
          </Col>,
      );
    });
    return (
      <Container>
        <p className = "text-muted">{this.props.name}</p>
        <Row className="justify-content-center">
          {options}
        </Row>
      </Container>
    );
  }
}

class NextButtons extends React.Component {
  render() {
    return (
      <Container>
        <Row className={'justify-content-center'}>
          <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4}>
            <Container>
              <Row className = 'justify-content-center'>
                <Button
                  variant={'outline-secondary'} block
                  style={{'min-height': '62px'}}>
                  add same item
                </Button>
              </Row>
            </Container>
          </Col>
          <Col xs = {8} sm = {8} md = {8} lg = {8} xl = {8}>
            <Container>
              <Row className = 'justify-content-center'>
                <Button block style={{'min-height': '62px'}}>
                  next
                </Button>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>);
  }
}

export default TransactionForm;
