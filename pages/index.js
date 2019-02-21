import React, { Component } from "react";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import RepoList from "../components/repoList";
import { mainContainer } from "../components/sharedStyles";

class App extends Component {
  state = {
    repos: []
  };
  grabUserRepos = name => {
    console.log(name);

    // Be sure to validate for black characters
    if (name) {
      fetch(`https://api.github.com/users/${name}/repos`)
        .then(response => response.json())
        .then(response => {
          console.log(response[0]);
          this.setState({
            repos: response.filter(
              repo => repo.fork !== true && repo.stargazers_count >= 1
            )
          });
        })
        .catch(error => console.error(error));
    }
  };
  render() {
    return (
      <div style={mainContainer}>
        <Header />
        <SearchBar grabRepos={this.grabUserRepos} />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
