import NavigationBar from '../frontend/components/NavigationBar';
import React from 'react';
import Router from 'next/router'
import { Spinner, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import '../public/log.css';
import translate from '../frontend/components/translate.js';
import { getTransactions, getTransactionItem } from '../frontend/actions/transaction.js'
import { getItemName } from '../frontend/actions/items.js'
import LogTable from '../frontend/components/LogTable.js'

const getItem = (id, staff, date) => {
  return new Promise((resolve, reject) => {
    getTransactionItem(id).then(function (response) {
      response.staff = staff;
      response.date = date;
      response.transactionId = id;
      resolve(response);
    }, function (error) {
      reject(error);
    })
  })
}
const getName = (transactionItem) => {
  return new Promise((resolve, reject) => {
    getItemName(transactionItem.item).then(function (response) {
      const wholeItem = {...transactionItem, ...response};
      resolve(wholeItem);
    }, function (error) {
      reject(error);
    })
  })
}

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '1', isLoading: true, isAdmin: false, isAll: true, isBodega: false,
      isDownstairs: false, isCloset: false, allItems: [], bodegaItems: [], downstairsItems: [], otherItems: [], currentItems: [], closetItems: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    let transactionArray = [];
    try {
      let transactions = await getTransactions();
      for (let transaction of transactions) {
        transaction.transactionItems.map((id) => {
          transactionArray.push(getItem(id, transaction.staff_name, transaction.transaction_date))
        })
      }
    } catch (e) {
      console.error(e);
    }
    Promise.all(transactionArray).then(values => {
      let promiseArray = [];
      for (let item of values) {
        promiseArray.push(getName(item));
      }
      Promise.all(promiseArray).then(results => {
        for (let finalItem of results) {
          this.setState({ allItems: [...this.state.allItems, finalItem] }) 
          switch(finalItem.location) {
            case "downstairs":
              this.setState({ downstairsItems: [...this.state.downstairsItems, finalItem] }); break;
            case "bodega":
              this.setState({ bodegaItems: [...this.state.bodegaItems, finalItem] }); break;
            case "closet":
            this.setState({ closetItems: [...this.state.closetItems, finalItem] }); break;
            default:
              this.setState({ otherItems: [...this.state.otherItems, finalItem] });
          }
        }
        this.setState({currentItems: this.state.allItems, isLoading: false});
      })
    })
  }

  handleChange(value) {
    this.setState({selectedValue: value});
    switch (value) {
      case 1:
        this.setState({isAll: true, isBodega: false, isDownstairs: false, 
          isCloset: false, currentItems: this.state.allItems}); break;
      case 2:
        this.setState({isAll: false, isBodega: true, isDownstairs: false,
           isCloset: false, currentItems: this.state.bodegaItems}); break;
      case 3:
        this.setState({isAll: false, isBodega: false, isDownstairs: true,
           isCloset: false, currentItems: this.state.downstairsItems}); break;
      case 4:
        this.setState({isAll: false, isBodega: false, isDownstairs: false, isCloset: true}); break;
    }
  }
  render() {
    return (
      <div className="Clean">
        <h1>Log</h1>
        <ToggleButtonGroup className="Location" name="Radio" value={this.state.value} onChange={this.handleChange}>
          <ToggleButton
            className={this.state.isAll ? 'selected': 'o1'} value={1}>all</ToggleButton>
          <ToggleButton
            className={this.state.isBodega ? 'selected':'o1'} value={2}>bodega</ToggleButton>
          <ToggleButton
            className={this.state.isDownstairs?'selected':'o1'} value={3}>downstairs</ToggleButton>
          {this.state.isAdmin && <ToggleButton
            className={this.state.isCloset ? 'selected':'o1'} value={4}>closet</ToggleButton>}
        </ToggleButtonGroup>
        <table><thead><tr><td width="10%"/><td>Name</td><td>Staff</td></tr></thead></table>
        <div style={{height: '65vh', overflowY:'auto'}}>
        {this.state.isLoading && <Spinner className="spinner" animation='border'></Spinner>}
          <table  bordercollapse='collapse'><tbody>
            {!this.state.isLoading && 
              <LogTable items={this.state.currentItems} headerColumns={['name', 'type', 'size', 'stock']}></LogTable>}
          </tbody></table>
        </div>
        <div className="Footer"><NavigationBar/></div>
      </div>
    );
  }
}
export default Log;
