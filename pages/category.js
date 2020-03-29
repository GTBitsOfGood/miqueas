import NavigationBar from '../frontend/components/NavigationBar';
import React from 'react';
import Router from 'next/router';
import { Spinner, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import translate from '../frontend/components/translate.js';
import { getCategories } from '../frontend/actions/Items.js';
import CategoryList from '../frontend/components/CategoryList.js';
import '../public/category.css';

class Category extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedValue: '1', isLoading: true, isSchool: true, isOther: false, data: [], categories: []
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
        this.setState({isLoading: false, data: dataTable, categories: categories});

        console.log(dataTable);
      } catch (e) {
        console.error(e);
      }
    }
  
    handleChange(value) {
      this.setState({selectedValue: value});
      switch (value) {
        case 1:
          this.setState({isSchool: true, isOther: false}); break;
        case 2:
          this.setState({isSchool: false, isOther: true}); break;
      }
    }
    render() {
      return (
        <div className="Clean">
          <h1>Log</h1>
          <ToggleButtonGroup className="Location" name="Radio" value={this.state.value} onChange={this.handleChange}>
            <ToggleButton
              className={this.state.isSchool ? 'selected': 'o1'} value={1}>school</ToggleButton>
            <ToggleButton
              className={this.state.isOther ? 'selected':'o1'} value={2}>other</ToggleButton>
          </ToggleButtonGroup>
          <div style={{height: '63vh', overflowY:'auto'}}>
          {this.state.isLoading && <Spinner className="spinner" animation='border'></Spinner>}
            <table bordercollapse='collapse'><tbody>
                <tr><th colSpan={3}>Category</th></tr>
              {!this.state.isLoading && <CategoryList items={this.state.data} categories={this.state.categories}></CategoryList>}
            </tbody></table>
          </div>
          <div className="Footer"><NavigationBar/></div>
        </div>
      );
    }
  }
  export default Category;