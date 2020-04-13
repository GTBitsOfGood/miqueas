import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: this.props.data,
      searchType: this.props.searchType,
      needsClearButton: false
    }
  }

  createSearch = () => {
    let foundMatches = []
    if (this.state.searchType == "name") {
      this.state.data.map(item => {
        if (item.name.includes(this.state.query)) {
          foundMatches.push(item);
        }
      })
    } else if (this.state.searchType == "category") {
      this.state.data.map(category => {
        if (category.includes(this.state.query)) {
          foundMatches.push(category);
        }
      })
    } else if (this.state.searchType == "all") {
      this.state.data.map(item => {
        for (var property in item) { 
          var val = item[property];
          if (typeof val == "string" && val.includes(this.state.query)){
            foundMatches.push(item);
            break;
          }
        }
      })
    }
    this.props.createSearchResults(foundMatches)
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.setState({needsClearButton: true})
        if (this.state.query.length % 2 === 0) {
          this.createSearch()
        }
      } else {
        this.setState({needsClearButton: false});
        this.props.clear();
      }
    })
  }
  clearSearch() {
    this.setState({query: '', needsClearButton: false});
    this.props.clear();
    this.search.value = '';
  }

  render() {
    return (
      <form>
        <input
          className="search"
          placeholder="Search..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        {!this.state.needsClearButton && <FontAwesomeIcon className="searchButtons" icon={faExpand}></FontAwesomeIcon>}
        {this.state.needsClearButton && <FontAwesomeIcon className="searchButtons" onClick={()=>this.clearSearch()} icon={faTimesCircle}></FontAwesomeIcon>}
      </form>
    )
  }
}

export default Search