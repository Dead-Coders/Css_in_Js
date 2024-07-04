import React from "react";
import { styled, setup } from "goober";

setup(React.createElement);

const Title = styled("h1")`
  font-weight: bold;
  color: dodgerblue;
`;

export default function App() {
  return (
    <div className="App">
      <Title>Hello CodeSandbox</Title>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
