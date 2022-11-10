import React from "react";
import Layout from "@components/layoutElements/Layout/Layout";
import Input from "@components/dataEntry/Input/Input";
import Stack from "@components/arrangement/Stack/Stack";
import Title from "@components/dataDisplay/Title/Title";

const App = () => {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <Layout variant={"sidebar-navbar-content"}>
      {/* <h1>Hello world 1</h1>
      <h2>Hello world 1</h2>
      <h3>Hello world 1</h3>
      <h4>Hello world 1</h4>
      <p className="s1">Hello world 1</p>
      <p className="s2">Hello world 1</p>
      <p className="subheader">Hello world 1</p>
      <button>Example button</button> */}
      <Stack rowGap={32}>
        <Title level={3}>Fill your data</Title>
        <Stack rowGap={16}>
          <Input
            value={inputValue}
            onChange={setInputValue}
            error=""
            placeholder="Place your text here"
            type="search"
            label="Name"
          />
          <Input
            value={inputValue}
            onChange={setInputValue}
            error=""
            placeholder="Place your text here"
            type="search"
            label="Second name"
          />
          <Input
            value={inputValue}
            onChange={setInputValue}
            error="Invalid url"
            placeholder="Place your text here"
            type="email"
            label="Email"
          />
          <Input
            value={inputValue}
            onChange={setInputValue}
            error=""
            placeholder="Place your text here"
            type="tel"
            label="Tel"
          />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default App;
