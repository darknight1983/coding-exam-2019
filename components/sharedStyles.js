const mainContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const header = {
  backgroundColor: "rgba(0, 21, 36, 1.0)",
  width: "100%",
  // height: 200,
  padding: 0,
  margin: 0
};

const logo = {
  color: "rgba(35, 114, 209, 1.0)",
  marginLeft: 15
};

const searchBarContainer = {
  marginTop: 20,
  marginBottom: 20,
  width: "100%",
  marginLeft: "50%"
};

const searchBar = {
  width: "50%",
  fontSize: 18
};

const repoList = {
  alignContent: "center",
  justifyContent: "space-between",
  display: "flex",
  flexWrap: "wrap"
};

const repoItem = {
  cursor: "pointer",
  outline: "1px solid #000",
  backgroundColor: "#FFF",
  flexGrow: 1,
  width: 300,
  height: 300,
  margin: 10
};

const h1 = {
  fontWeight: "bold",
  textAlign: "center"
};

const button = {
  border: "1px solid #FFF",
  color: "#FFF",
  backgroundColor: "rgba(35, 114, 209, 1.0)",
  textAlign: "center"
};

const center = {
  textAlign: "center"
};

const userDetail = {};
module.exports = {
  mainContainer,
  header,
  logo,
  h1,
  button,
  searchBar,
  searchBarContainer,
  repoList,
  repoItem,
  center,
  userDetail
};
