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
import QrReader from 'react-qr-reader'
import { useMediaQuery } from 'react-responsive'

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
    });
  }

  render() {
    return (
      <div>
        <TransactionHeader name={'Transaction Form'}/>
        <hr style={{'marginTop': 0}}/>
        <ItemHeader name={'Foam Paper'} category={'School'}/>
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
        <NavButtons/>
      </div>
    );
  }
}

class ItemHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{'width': '100%'}}>
        <Row className="justify-content-center">
          <strong>{this.props.name}</strong>
        </Row>
        <Row className="justify-content-center">
          <p>{this.props.category}</p>
        </Row>
      </Container>
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
        <Row>
          <Col>
            <p className = {'text-muted'}>{this.props.name}</p>
          </Col>
          <Col>
            <Form>
              <Container>
                {options}
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

class HorizontalRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
    };
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

class NavButtons extends React.Component {
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
                    className={'btn-outline-secondary-miqueas'}>
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
                      'borderColor': '#51ADA9'}}>
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

export default TransactionForm;
