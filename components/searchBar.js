import React, { Component } from "react";
import { searchBar, searchBarContainer } from "./sharedStyles";

class SearchBar extends Component {
  state = {
    name: " "
  };

  handleChange = query => {
    const { name, value } = query.target;
    this.setState({
      [name]: value.trim()
    });
  };
  handleSubmit = e => {
    if (e.key === "Enter") {
      this.props.grabRepos(this.state.name);
      // Find a better way to clear the name property.
      this.setState({ name: " " });
    }
  };
  render() {
    const { name } = this.state;
    return (
      <div style={searchBarContainer}>
        <input
          value={name}
          onChange={this.handleChange}
          name="name"
          onKeyUp={this.handleSubmit}
          style={searchBar}
        />
      </div>
    );
  }
}

export default SearchBar;
