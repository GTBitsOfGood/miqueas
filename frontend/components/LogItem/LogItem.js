import React from 'react';
import ItemHeader from '../TransactionForm/ItemHeader';
import SingleItemStock from './SingleItemStock';
import SingleItemInfoLine from './SingleItemInfo';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class LogItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stock: 0,
      tempStock: 0,
      editMode: false,
      item: {}
    };
  }

  componentDidMount() {
    let currentItem = this.props.item;
    this.setState({item: currentItem});
  }

  updateStock(i) {
    if (i >= 0) {
      this.setState({
        tempStock: i,
      });
    }
  }

  triggerEdit() {
    this.setState({
      editMode: true,
    });
  }

  // This will need to update on the backend as well!!!
  saveStock() {
    // We might not need to have a separate stock attribute
    this.setState({
      stock: this.state.tempStock,
      editMode: false,
    });
  }

  render() {
    return (
      <div>
        <ItemHeader name={this.state.item.name} category={this.state.item.category}/>
        <hr style={{'marginTop': 0}}/>
        <SingleItemStock stock={this.state.item.stock}
          editMode={this.state.editMode}
          onUpdate={(i) => (this.updateStock(i))}
          onEdit={() => this.triggerEdit()}
        />
        <hr style={{'marginTop': 0}}/>
        <Container>
          <SingleItemInfoLine title={'Type/Color'} data={this.state.item.typeColor}/>
          <SingleItemInfoLine title={'Size'} data={this.state.item.size}/>
          <SingleItemInfoLine title={'Gender'} data={this.state.item.gender}/>
        </Container>
        <hr style={{'marginTop': 0}}/>
        <Container>
          <SingleItemInfoLine title={'Location'} data={this.state.item.location}/>
          <SingleItemInfoLine title={'Date Checked'} data={this.state.item.visibleDate}/>
          <SingleItemInfoLine title={'Time Checked'} data={this.state.item.time}/>
        </Container>
        <hr style={{'marginTop': 0}}/>
        <Container>
          <Button
            variant={'secondary'} block
            style={{'minHeight': '54px',
              'fontWeight': 'bold',
              'background': '#51ADA9',
              'borderColor': '#51ADA9'}}
            onClick = {() => this.saveStock()}
            hidden = {!this.state.editMode}>
            save
          </Button>
        </Container>
      </div>
    );
  }

}

export default LogItem;
