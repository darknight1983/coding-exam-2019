import React from "react";
import { header, logo } from "./sharedStyles";

const Header = () => {
  return (
    <div style={header}>
      <h1 style={logo}>Github Browser</h1>
    </div>
  );
};

export default Header;
