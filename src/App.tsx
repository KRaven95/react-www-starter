import React from "react";
import Layout from "@components/layoutElements/Layout/Layout";

const App = () => {
  return (
    <Layout variant={"sidebar-navbar-content"}>
      <h1>Hello world 1</h1>
      <h2>Hello world 2</h2>
      <h3>Hello world 2</h3>
      <h4>Hello world 2</h4>
      <p className="s1">Hello world 2</p>
      <p className="s2">Hello world 2</p>
      <p className="subheader">Hello world 2</p>
      <button>Example button</button>
    </Layout>
  );
};

export default App;
