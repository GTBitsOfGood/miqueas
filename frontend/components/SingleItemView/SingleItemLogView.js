import React from 'react';
import SingleItemLogHeader from './SingleItemLogHeader';
import ItemHeader from '../TransactionForm/ItemHeader';
import Container from 'react-bootstrap/Container';
import SingleItemInfoLine from './SingleItemInfo';

class SingleItemLogView extends React.Component {
  // somehow should read from database and update the page content
  render() {
    return (
      <>
        <SingleItemLogHeader name={'Details'} onEdit={() => {
          window.open('/singleview')
          console.log('THIS SHOULD TAKE US TO AN EDIT PAGE');
        }}/>
        <ItemHeader name={'Regular notebook'} category={'School'}/>
        <hr style={{'marginTop': 0}}/>
        <Container>
          <SingleItemInfoLine title={'Quantity Changed'} data={'-1'}/>
          <SingleItemInfoLine title={'Stock'} data={'49'}/>
        </Container>
        <hr style={{'marginTop': 0}}/>
        <Container>
          <SingleItemInfoLine title={'Staff'} data={'staff 3'}/>
          <SingleItemInfoLine title={'Gender'} data={'girl'}/>
          <SingleItemInfoLine title={'Recipient'} data={'child 16'}/>
        </Container>
        <hr style={{'marginTop': 0}}/>
        <Container>
          <SingleItemInfoLine title={'Type'} data={'normal'}/>
          <SingleItemInfoLine title={'Location'} data={'bodega'}/>
          <SingleItemInfoLine title={'Date'} data={'02/10/20'}/>
          <SingleItemInfoLine title={'Time'} data={'10:10am'}/>
        </Container>
        <hr style={{'marginTop': 0}}/>
      </>
    );
  }

}

export default SingleItemLogView;
