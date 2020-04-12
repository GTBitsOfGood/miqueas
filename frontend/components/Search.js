import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      categoryResults: [],
      nameResults: [],
      data: this.props.data,
      searchByName: true,
      searchByCategory: true
    }
  }

  getInfo = () => {
    var categoryArray = [];
    var nameArray = []
    if (this.state.searchByName && this.state.searchByCategory) {
      this.state.data.map(item => {
        if (item.name.contains(this.state.query)) {
          nameArray.push(item);
        } else if (item.category.contains(this.state.query)) {
          categoryArray.push(item);
        }
      }
      )
    } else if (this.state.searchByName) {
      this.state.data.map(item => {
        if (item.name.contains(this.state.query)) {
          nameArray.push(item);
        }
      })
    } else if (this.state.searchByCategory) {
      this.state.data.map(item => {
        if (item.category.contains(this.state.query)) {
          categoryArray.push(item);
        }
      })
    }
    this.setState({
      categoryResults: categoryArray,
      nameResults: nameArray
    })
    this.props.createSearchResults(categoryArray, nameArray);
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      }
    })
  }

  render() {
    return (
      <form>
        <input
          className="searchbar"
          placeholder="Search..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }
}

export default Search