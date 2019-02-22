import React, { Component, useState } from "react";
import { searchBar, searchBarContainer } from "./sharedStyles";

const SearchBar = props => {
  const [name, setName] = useState(" ");

  function handleNameChange(e) {
    setName(e.target.value.trim());
    console.log(name);
  }

  const handleSubmit = e => {
    if (e.key === "Enter") {
      props.grabRepos(name);
      // Find a better way to clear the name property.
      setName(" ");
    }
  };

  return (
    <div style={searchBarContainer}>
      <input
        value={name}
        onChange={handleNameChange}
        name="name"
        onKeyUp={handleSubmit}
        style={searchBar}
      />
    </div>
  );
};

export default SearchBar;
