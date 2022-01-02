import React from "react";

export default ({ children }) => {
  console.log("children: " , children)
  return <div className="container">{children}</div>;
};