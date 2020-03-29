import React from 'react';
import ItemHeader from '../TransactionForm/ItemHeader';
import SingleViewHeader from './SingleViewHeader';
import SingleItemStock from './SingleItemStock';
import SingleItemInfoLine from './SingleItemInfo';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class SingleItemView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stock: 0,
      tempStock: 0,
      editMode: false,
    };
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
        <SingleViewHeader name={'Details'}/>
        <ItemHeader name={'White Undershirt'} category={'Girl\'s Shirts'}/>
        <hr style={{'marginTop': 0}}/>
        <SingleItemStock stock={this.state.tempStock}
          editMode={this.state.editMode}
          onUpdate={(i) => (this.updateStock(i))}
          onEdit={() => this.triggerEdit()}
        />
        <hr style={{'marginTop': 0}}/>
        <Container>
          <SingleItemInfoLine title={'Type/Color'} data={'individual'}/>
          <SingleItemInfoLine title={'Size'} data={'S (4-6)'}/>
          <SingleItemInfoLine title={'Gender'} data={'girl'}/>
        </Container>
        <hr style={{'marginTop': 0}}/>
        <Container>
          <SingleItemInfoLine title={'Location'} data={'bodega'}/>
          <SingleItemInfoLine title={'Date Checked'} data={'02/10/20'}/>
          <SingleItemInfoLine title={'Time Checked'} data={'10:10am'}/>
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

export default SingleItemView;
