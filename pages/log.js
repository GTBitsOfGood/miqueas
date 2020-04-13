import NavigationBar from '../frontend/components/NavigationBar';
import React from 'react';
import Router from 'next/router';
import { Spinner, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import translate from '../frontend/components/translate.js';
import { getTransactions, getTransactionItem } from '../frontend/actions/Transaction.js';
import { getItemName } from '../frontend/actions/Items.js';
import LogTable from '../frontend/components/LogTable.js';
import LogItem from '../frontend/components/LogItem/LogItem';
import SingleItemLogView from '../frontend/components/LogItem/SingleItemLogView';


const getItem = (id, transId, staff, date) => {
  return new Promise((resolve, reject) => {
    getTransactionItem(id).then(function (response) {
      response.staff = staff;
      response.date = date;
      response.time = date.substring(11,16);
      response.transactionItemId = id;
      response.transactionId = transId;
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
      isDownstairs: false, isCloset: false, allItems: [], bodegaItems: [], downstairsItems: [], otherItems: [],
      currentItems: [], closetItems: [], isItemSelected: false, selectedItem: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    let transactionArray = [];
    try {
      let transactions = await getTransactions();
      for (let transaction of transactions) {
        transaction.transactionItems.map((id) => {
          transactionArray.push(getItem(id, transaction._id, transaction.staff_name, transaction.transaction_date))
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
  goBack() {
    this.setState({isItemSelected: false});
  }

  selectItem = (item) => {
    this.setState({ isItemSelected: true, selectedItem: item });
  }

  render() {
    return (
      <div>
        {!this.state.isItemSelected &&
          <div>
            {this.state.isItemSelected &&
            <FontAwesomeIcon onClick={() => this.goBack()} className='back'
                             icon={faArrowLeft}/>}
            <div className="Clean">
              {!this.state.isItemSelected && <div>
                <div style={{'padding': '2rem', 'paddingBottom': '0'}}>
                  <ToggleButtonGroup className="Location" name="Radio"
                                     value={this.state.value}
                                     onChange={this.handleChange}>
                    <ToggleButton
                      className={this.state.isAll ? 'selected' : 'o1'}
                      value={1}>all</ToggleButton>
                    <ToggleButton
                      className={this.state.isBodega ? 'selected' : 'o1'}
                      value={2}>bodega</ToggleButton>
                    <ToggleButton
                      className={this.state.isDownstairs ? 'selected' : 'o1'}
                      value={3}>downstairs</ToggleButton>
                    {this.state.isAdmin && <ToggleButton
                      className={this.state.isCloset ? 'selected' : 'o1'}
                      value={4}>closet</ToggleButton>}
                  </ToggleButtonGroup>
                </div>
                <table>
                  <thead>
                  <tr fontWeight='bold'>
                    <td className="h3"/>
                    <td className='h1'>Name</td>
                    <td className='h1'>Staff</td>
                    <td className='h1'>Child</td>
                    <td className='h1'>Quantity Changed</td>
                    <td className='h2'></td>
                  </tr>
                  </thead>
                </table>
              </div>}
              <div style={{height: '63vh', overflowY: 'auto'}}>
                {this.state.isLoading &&
                <Spinner className="spinner" animation='border'></Spinner>}
                <table bordercollapse='collapse'>
                  <tbody>
                  {!this.state.isLoading && !this.state.isItemSelected &&
                  <LogTable items={this.state.currentItems}
                            callback={this.selectItem}></LogTable>}
                  </tbody>
                </table>
                {this.state.isItemSelected &&
                <div><LogItem item={this.state.selectedItem}/>
                  <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                  />
                </div>}
              </div>
              <div className="Footer"><NavigationBar selector={3}/></div>
            </div>
          </div>
        }
        {
          this.state.isItemSelected &&
            <>
              <SingleItemLogView onBack = {() => {this.goBack()}}
                item = {this.state.selectedItem}/>
              <div className="Footer"><NavigationBar selector={3}/></div>
            </>
        }
      </div>
    );
  }
}

export default Log;
