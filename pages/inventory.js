import NavigationBar from '../frontend/components/NavigationBar';
import React from 'react';
import Router from 'next/router';
import { Spinner, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import translate from '../frontend/components/translate.js';
import { getCategories } from '../frontend/actions/Items.js';
import CategoryList from '../frontend/components/CategoryList.js';
import CategoryItems from '../frontend/components/CategoryItems.js';
import InventoryItem from '../frontend/components/InventoryItem/InventoryItem';


class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '1', isLoading: true, isSchool: true, isOther: false, data: [], categories: [],
      isLogTable: true, isCategorySelected: false, isItemSelected: false, selectedCategory: null, backButton: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    let dataTable = {}
    let categories = []
    try {
      let items = await getCategories();
      for (let item of items) {
        if (dataTable[item.category] == null) {
          dataTable[item.category] = [];
          categories.push(item.category);
        }
        dataTable[item.category].push(item);
      }
      this.setState({ isLoading: false, data: dataTable, categories: categories });
    } catch (e) {
      console.error(e);
    }
  }

  handleChange(value) {
    this.setState({ selectedValue: value });
    switch (value) {
      case 1:
        this.setState({ isSchool: true, isOther: false }); break;
      case 2:
        this.setState({ isSchool: false, isOther: true }); break;
    }
  }
  selectCategory = (category) => {
    this.setState({ isLogTable: false, isCategorySelected: true, selectedCategory: category, backButton: true });
  }

  selectItem = (item) => {
    this.setState({ isCategorySelected: false, isItemSelected: true, selectedItem: item })
  }
  goBack() {
    if (this.state.isItemSelected) {
      this.setState({ isCategorySelected: true, isItemSelected: false });
    } else if (this.state.isCategorySelected) {
      this.setState({ isLogTable: true, isCategorySelected: false, backButton: false });
    } else {
      //It should never reach this else condition but if it does, re-render the component
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        {this.state.backButton && <FontAwesomeIcon onClick={() => this.goBack()} className='back' icon={faArrowLeft} />}
        <div className="clean">
          {this.state.isLogTable && <div>
            <ToggleButtonGroup className="location" name="Radio" value={this.state.value} onChange={this.handleChange}>
              <ToggleButton
                className={this.state.isSchool ? 'selected' : 'o1'} value={1}>school</ToggleButton>
              <ToggleButton
                className={this.state.isOther ? 'selected' : 'o1'} value={2}>other</ToggleButton>
            </ToggleButtonGroup>

            <div style={{ height: '63vh', overflowY: 'auto' }}>
              {this.state.isLoading && <Spinner className="spinner" animation='border'></Spinner>}
              <table bordercollapse='collapse'><tbody>
                <tr><th colSpan={3}>Category</th></tr>
                {!this.state.isLoading && <CategoryList items={this.state.data} categories={this.state.categories} callback={this.selectCategory} />}
              </tbody></table>
            </div>
          </div>}
          {this.state.isCategorySelected && <div>
              <h3>{this.state.selectedCategory}</h3>
              <div style={{ height: '63vh', overflowY: 'auto' }}>
             <CategoryItems items={this.state.data[this.state.selectedCategory]} callback={this.selectItem} />
            </div>
            </div>}
            {this.state.isItemSelected && <div>
              <InventoryItem item={this.state.selectedItem}/>
            </div>}
          <div className="Footer"><NavigationBar /></div>
        </div>
      </div>
    );
  }
}
export default Inventory;