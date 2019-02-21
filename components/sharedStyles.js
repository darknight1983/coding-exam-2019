const mainContainer = {
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
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

const searchBar = {
  marginTop: 20
};

const repoList = {
  alignContent: "center",
  justifyContent: "space-between",
  display: "flex",
  flexWrap: "wrap"
};

const repoItem = {
  outline: "1px solid #000",
  flexGrow: 1,
  width: 300,
  height: 300,
  margin: 10
};

const center = {
  textAlign: "center"
};

module.exports = {
  mainContainer,
  header,
  logo,
  searchBar,
  repoList,
  repoItem,
  center
};
