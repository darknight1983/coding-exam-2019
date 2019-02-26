import React from "react";
import StarredRepo from "./starredRepoItem";
import { repoList } from "./sharedStyles";
import Router from "next/router";

const persistUser = user => {
  Router.push({
    pathname: "/gitUser",
    query: { user: user.full_name }
  });
};

const RepoList = props => {
  const { repos } = props;
  if (repos.length) {
    return (
      <div style={repoList}>
        {repos.map(repo => (
          <StarredRepo
            key={repo.id}
            name={repo.name}
            language={repo.language}
            description={repo.description}
            user={repo}
            userInfo={persistUser}
          />
        ))}
      </div>
    );
  } else {
    return <div>Oh No! No repositories to render</div>;
  }
};

export default RepoList;
