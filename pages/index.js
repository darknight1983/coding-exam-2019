import React, { useState, lazy, Suspense } from "react";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import RepoList from "../components/repoList";

import { mainContainer } from "../components/sharedStyles";

const App = () => {
  const [repos, setRepos] = useState([]);

  const grabUserRepos = name => {
    if (name) {
      fetch(`https://api.github.com/users/${name}/repos`)
        .then(response => response.json())
        .then(response => {
          setRepos(
            response.filter(
              repo => repo.fork !== true && repo.stargazers_count >= 1
            )
          );
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <div style={mainContainer}>
      <Header />
      <SearchBar grabRepos={grabUserRepos} />
      <RepoList repos={repos} />
    </div>
  );
};

export default App;
