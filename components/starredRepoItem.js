import React from "react";

import { repoItem, h1, center, button } from "./sharedStyles";

const StarredRepo = ({ name, language, description, user, userInfo }) => {
  return (
    <div style={repoItem} onClick={e => userInfo(user)}>
      <h1 style={h1}>{name}</h1>
      <hr />
      <h3 style={button}>{language}</h3>
      <p style={center}>{description}</p>
    </div>
  );
};

export default StarredRepo;
