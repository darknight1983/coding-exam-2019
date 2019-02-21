import React from "react";
import { repoItem, center } from "./sharedStyles";

const StarredRepo = ({ name, language, description }) => {
  return (
    <div style={repoItem}>
      <h1 style={center}>{name}</h1>
      <h3 style={center}>{language}</h3>
      <p style={center}>{description}</p>
    </div>
  );
};

export default StarredRepo;
