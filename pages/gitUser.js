import React from "react";
import Header from "../components/header";
import { mainContainer, header, userDetail } from "../components/sharedStyles";

const UserPage = ({
  owner,
  openIssues,
  homepage,
  id,
  hasIssues,
  hasDownloads
}) => {
  return (
    <div style={mainContainer}>
      <Header />
      <div style={userDetail}>
        <h1>{owner}</h1>
        <h3>{id}</h3>
        <p>{homepage}</p>
        <p>Downloads: {hasDownloads}</p>
        <p>Has Issues: {hasIssues}</p>
        <p>Open Issues: {openIssues}</p>
      </div>
    </div>
  );
};

UserPage.getInitialProps = async ({ query }) => {
  const user = await fetch(`https://api.github.com/repos/${query.user}`);
  const userData = await user.json();
  console.log(userData);
  return {
    hasDownloads: userData.has_downloads,
    hasIssues: userData.has_issues,
    id: userData.id,
    homePage: userData.homepage,
    openIssues: userData.open_issues,
    owner: userData.owner.login
  };
};
export default UserPage;
