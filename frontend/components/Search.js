import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      needsClearButton: false
    }
  }

  createSearch = () => {
    let foundMatches = [];
    if (this.props.searchType == "name") {
      this.props.data.forEach(item => {
        if (item.name.includes(this.state.query)) {
          foundMatches.push(item);
        }
      })
    } else if (this.props.searchType == "category") {
      this.props.data.forEach(category => {
        if (category.includes(this.state.query)) {
          foundMatches.push(category);
        }
      })
    } else if (this.props.searchType == "all") {
      this.props.data.forEach(item => {
        for (var property in item) { 
          var val = item[property];
          if (typeof val == "string" && val.includes(this.state.query)){
            foundMatches.push(item);
            break;
          }
        }
      })
    }
    this.props.createSearchResults(foundMatches, this.state.query)
    console.log("foundMatches: ", foundMatches);
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