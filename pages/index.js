import React, { Component, Suspense } from "react";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import RepoList from "../components/repoList";
import useFetch from "fetch-suspense";
import { mainContainer } from "../components/sharedStyles";

class App extends Component {
  state = {
    repos: []
  };
  grabUserRepos = name => {
    let data = useFetch(`https://api.github.com/users/${name}/repos`);
    console.log(data);
    // if (name) {
    //   fetch(`https://api.github.com/users/${name}/repos`)
    //     .then(response => response.json())
    //     .then(response => {
    //       console.log(response[0]);
    //       this.setState({
    //         repos: response.filter(
    //           repo => repo.fork !== true && repo.stargazers_count >= 1
    //         )
    //       });
    //     })
    //     .catch(error => console.error(error));
    // }
  };
  render() {
    return (
      <div style={mainContainer}>
        <Header />
        <SearchBar grabRepos={this.grabUserRepos} />
        <Suspense fallback="Loading...">
          <RepoList repos={this.state.repos} />
        </Suspense>
      </div>
    );
  }
}

export default App;
