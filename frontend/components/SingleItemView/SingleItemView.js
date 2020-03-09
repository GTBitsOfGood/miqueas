import React from 'react';
import ItemHeader from '../TransactionForm/ItemHeader';
import SingleViewHeader from './SingleViewHeader';
import SingleItemStock from './SingleItemStock';
import SingleItemInfoLine from './SingleItemInfo';
import Container from 'react-bootstrap/Container';

class SingleItemView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stock: 0,
      tempStock: 0,
      editMode: true,
    };
  }

  updateStock(i) {
    this.setState({
      tempStock: i,
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
          onUpdate={(i) => (this.updateStock(i))}/>
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
      </div>
    );
  }

}

export default SingleItemView;
